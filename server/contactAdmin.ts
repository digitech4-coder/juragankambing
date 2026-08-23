import { z } from "zod";

export const FOLLOW_UP_STATUSES = ["baru", "dihubungi", "deal", "selesai"] as const;
export const followUpStatusSchema = z.enum(FOLLOW_UP_STATUSES);
const dateInput = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Tanggal harus berformat YYYY-MM-DD");

export const contactHistoryInput = z.object({
  from: dateInput.optional(),
  to: dateInput.optional(),
  domisili: z.string().max(40).optional(),
  followUpStatus: followUpStatusSchema.optional(),
}).optional();

export type ContactHistoryInput = z.infer<typeof contactHistoryInput>;

export function toContactHistoryFilters(input: ContactHistoryInput) {
  return {
    from: input?.from ? new Date(`${input.from}T00:00:00.000Z`) : undefined,
    to: input?.to ? new Date(`${input.to}T23:59:59.999Z`) : undefined,
    domisili: input?.domisili || undefined,
    followUpStatus: input?.followUpStatus,
  };
}
