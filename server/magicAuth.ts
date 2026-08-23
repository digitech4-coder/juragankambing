import { createHash, randomBytes } from "node:crypto";
import { ADMIN_EMAIL } from "@shared/const";
import {
  consumeMagicLoginToken,
  countRecentMagicLoginTokens,
  createMagicLoginToken,
  getMagicLoginTokenByHash,
  getUserByEmail,
} from "./db";

const MAGIC_LINK_TTL_MS = 10 * 60 * 1000;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 3;

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

function isAllowedOrigin(origin: string) {
  try {
    const url = new URL(origin);
    const isLocal = url.protocol === "http:" && ["localhost", "127.0.0.1"].includes(url.hostname);
    const isHttps = url.protocol === "https:";
    const isManus = url.hostname.endsWith(".manus.space");
    const isCustomDomain = url.hostname === "juragankambing.id";
    return (isLocal || isHttps && (isManus || isCustomDomain)) && url.pathname === "/" && !url.search && !url.hash;
  } catch {
    return false;
  }
}

async function sendMagicLinkEmail(email: string, link: string, apiKey: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "noreply@juragankambing.id",
      to: [email],
      subject: "Tautan masuk admin JuraganKambing.id",
      text: `Gunakan tautan berikut untuk masuk ke dashboard admin JuraganKambing.id:\n\n${link}\n\nTautan berlaku 10 menit dan hanya dapat digunakan satu kali. Jika Anda tidak meminta tautan ini, abaikan email ini.`,
      html: `<p>Gunakan tautan berikut untuk masuk ke dashboard admin JuraganKambing.id:</p><p><a href="${link}">Masuk ke dashboard admin</a></p><p>Tautan berlaku 10 menit dan hanya dapat digunakan satu kali. Jika Anda tidak meminta tautan ini, abaikan email ini.</p>`,
    }),
  });
  if (!response.ok) throw new Error(`Magic link email failed with status ${response.status}`);
}

export async function requestMagicLogin(emailInput: string, origin: string, apiKey: string) {
  const email = normalizeEmail(emailInput);
  if (email !== ADMIN_EMAIL || !isAllowedOrigin(origin)) return { accepted: true as const };

  const since = new Date(Date.now() - RATE_WINDOW_MS);
  if (await countRecentMagicLoginTokens(email, since) >= MAX_REQUESTS_PER_WINDOW) {
    return { accepted: true as const };
  }

  const token = randomBytes(32).toString("base64url");
  await createMagicLoginToken({
    email,
    tokenHash: hashToken(token),
    expiresAt: new Date(Date.now() + MAGIC_LINK_TTL_MS),
  });
  await sendMagicLinkEmail(email, `${origin}/admin/magic-login?token=${encodeURIComponent(token)}`, apiKey);
  return { accepted: true as const };
}

export async function verifyMagicLogin(token: string) {
  if (!/^[A-Za-z0-9_-]{40,}$/.test(token)) throw new Error("Invalid magic link");
  const record = await getMagicLoginTokenByHash(hashToken(token));
  if (!record || record.usedAt || new Date(record.expiresAt).getTime() <= Date.now()) {
    throw new Error("Magic link expired or already used");
  }
  const user = await getUserByEmail(record.email);
  if (!user || user.role !== "admin") throw new Error("Admin account not available");
  if (!await consumeMagicLoginToken(record.id)) throw new Error("Magic link already used");
  return user;
}

export { hashToken, isAllowedOrigin, normalizeEmail };
