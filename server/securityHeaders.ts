import type { Response } from "express";

export function applySecurityHeaders(res: Response, nodeEnv = process.env.NODE_ENV) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  if (nodeEnv === "production") {
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }
}

export function securityHeadersMiddleware(req: unknown, res: Response, next: () => void) {
  void req;
  applySecurityHeaders(res);
  next();
}

export default securityHeadersMiddleware;

