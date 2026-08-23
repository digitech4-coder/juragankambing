const FULL_STACK_ORIGIN = "https://juragankam-5f36bibh.manus.space";

/**
 * The Manus-hosted app serves both the React client and tRPC API from one origin.
 * The GitHub Pages custom domain only serves the static client, so public API
 * calls must target the full-stack origin instead.
 */
export function getTrpcUrl(hostname: string): string {
  const normalized = hostname.toLowerCase();
  const isManagedOrigin =
    normalized === "localhost" ||
    normalized === "127.0.0.1" ||
    normalized.endsWith(".manus.computer") ||
    normalized.endsWith(".manus.space");

  return `${isManagedOrigin ? "" : FULL_STACK_ORIGIN}/api/trpc`;
}

export { FULL_STACK_ORIGIN };
