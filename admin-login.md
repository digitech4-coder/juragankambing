# Admin login

## Primary fallback: magic link

The request-history dashboard is available at `/admin/requests`. When Manus OAuth is unavailable, use the **Kirim magic link admin** form on that page and enter the allowlisted address `digitechsmart4@gmail.com`. The email contains a short-lived, single-use link. Opening the link establishes a secure server-side session and returns to `/admin/requests`.

The implementation does not store a local password. Tokens are hashed before database storage, expire quickly, are consumed atomically, and are rate-limited. Only the configured allowlisted admin email can request a link. The magic-link session is independent of Manus OAuth and uses an HTTP-only secure cookie.

## OAuth

The existing Manus OAuth button remains available as an optional fallback. The OAuth callback currently depends on the central OAuth service. During an upstream `SEPARATION_FREEZE_ACTIVE` outage, OAuth may return `OAuth callback failed`; this is an external service failure, not an admin-role failure. Start a fresh login attempt after the service recovers, or use the magic link instead.

## Security notes

Do not store or share an admin password in source code, environment files committed to Git, or chat. If the allowlisted email must change, update the server-side allowlist and require a new verified login flow. Revoke access by changing the user role from `admin` to `user` and invalidate active sessions as part of the operational response.

## Revocation and rollback

To revoke this admin account, first change the matching row in `users` from `role = 'admin'` to `role = 'user'` using the Management UI database editor or a reviewed SQL update. Then remove or disable the email from the server-side magic-link allowlist and restart the service. Existing magic sessions should be invalidated by clearing the magic-session cookie in the affected browser; for an emergency global revocation, rotate the session secret through the project’s secret-management flow and restart the service, which invalidates previously signed sessions.

To roll back to OAuth-only access, disable the magic-link request and verification procedures in the admin page, remove the magic-login route from the application routes, and retain the existing OAuth return-path protections. Do not delete token rows during an incident unless the database backup and impact have been reviewed; expired tokens are unusable and can be cleaned up later through a controlled maintenance change.

For recovery, restore the magic-link allowlist only after confirming the administrator’s email identity, issue a new link, and verify that the resulting session can open `/admin/requests`. Never use the password previously shared in chat, and never place a replacement password in source code or a client-visible environment variable.
