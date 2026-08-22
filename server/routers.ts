import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { ENV } from "./_core/env";
import { contactRequestInput, sendContactRequest } from "./contact";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";
import { createContactRequest, createStoredAsset, listContactRequests, listStoredAssets, updateContactRequestEmailStatus } from "./db";
import { storagePut } from "./storage";

const MAX_UPLOAD_BYTES = 8 * 1024 * 1024;

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  contact: router({
    sendRequest: publicProcedure
      .input(contactRequestInput)
      .mutation(async ({ input }) => {
        if (input.website) return { accepted: true as const };
        const record = await createContactRequest({
          name: input.name,
          email: input.email,
          whatsapp: input.whatsapp,
          service: input.service,
          domisili: input.domisili,
          guests: input.guests ?? "",
          message: input.message ?? "",
          emailStatus: "pending",
        });

        try {
          await sendContactRequest(input, ENV.resendApiKey);
          await updateContactRequestEmailStatus(record.id, "sent");
          return { accepted: true as const, requestId: record.id };
        } catch (error) {
          try {
            await updateContactRequestEmailStatus(record.id, "failed");
          } catch (statusError) {
            console.error("Failed to update contact request email status", statusError);
          }
          throw error;
        }
      }),
    history: adminProcedure.query(() => listContactRequests()),
  }),
  fileStorage: router({
    list: adminProcedure.query(() => listStoredAssets()),
    upload: adminProcedure
      .input(z.object({
        originalName: z.string().min(1).max(255),
        mimeType: z.string().min(1).max(255),
        sizeBytes: z.number().int().positive().max(MAX_UPLOAD_BYTES),
        base64: z.string().min(1),
      }))
      .mutation(async ({ ctx, input }) => {
        const buffer = Buffer.from(input.base64, "base64");
        if (buffer.byteLength !== input.sizeBytes) {
          throw new Error("File size validation failed");
        }
        const safeName = input.originalName.replace(/[^a-zA-Z0-9._-]/g, "-");
        const uploaded = await storagePut(`site-assets/${ctx.user.id}/${safeName}`, buffer, input.mimeType);
        return createStoredAsset({
          ownerId: ctx.user.id,
          originalName: input.originalName,
          storageKey: uploaded.key,
          url: uploaded.url,
          mimeType: input.mimeType,
          sizeBytes: input.sizeBytes,
        });
      }),
  }),
});

export type AppRouter = typeof appRouter;
