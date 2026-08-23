import { and, desc, eq, gte, lte, isNull } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { ContactRequestRecord, InsertContactRequest, InsertMagicLoginToken, InsertStoredAsset, InsertUser, contactRequests, magicLoginTokens, storedAssets, users } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function createStoredAsset(asset: InsertStoredAsset) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const result = await db.insert(storedAssets).values(asset);
  return { id: Number(result[0].insertId), ...asset };
}

export async function listStoredAssets() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(storedAssets).orderBy(storedAssets.createdAt);
}

export async function createContactRequest(request: InsertContactRequest): Promise<ContactRequestRecord> {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const result = await db.insert(contactRequests).values(request);
  return {
    id: Number(result[0].insertId),
    ...request,
    emailStatus: request.emailStatus ?? "pending",
    followUpStatus: request.followUpStatus ?? "baru",
    createdAt: request.createdAt ?? new Date(),
    updatedAt: request.updatedAt ?? new Date(),
  } as ContactRequestRecord;
}

export async function updateContactRequestEmailStatus(id: number, emailStatus: "sent" | "failed") {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  await db.update(contactRequests).set({
    emailStatus,
    emailSentAt: emailStatus === "sent" ? new Date() : null,
  }).where(eq(contactRequests.id, id));
}

export type ContactRequestFilters = {
  from?: Date;
  to?: Date;
  domisili?: string;
  followUpStatus?: "baru" | "dihubungi" | "deal" | "selesai";
};

export async function listContactRequests(filters: ContactRequestFilters = {}) {
  const db = await getDb();
  if (!db) return [];
  const conditions = [];
  if (filters.from) conditions.push(gte(contactRequests.createdAt, filters.from));
  if (filters.to) conditions.push(lte(contactRequests.createdAt, filters.to));
  if (filters.domisili) conditions.push(eq(contactRequests.domisili, filters.domisili));
  if (filters.followUpStatus) conditions.push(eq(contactRequests.followUpStatus, filters.followUpStatus));
  const where = conditions.length ? and(...conditions) : undefined;
  return db.select().from(contactRequests).where(where).orderBy(desc(contactRequests.createdAt)).limit(200);
}

export async function updateContactRequestFollowUpStatus(id: number, followUpStatus: "baru" | "dihubungi" | "deal" | "selesai") {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  await db.update(contactRequests).set({ followUpStatus }).where(eq(contactRequests.id, id));
}

export async function countRecentMagicLoginTokens(email: string, since: Date) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const rows = await db.select({ id: magicLoginTokens.id }).from(magicLoginTokens)
    .where(and(eq(magicLoginTokens.email, email), gte(magicLoginTokens.createdAt, since)));
  return rows.length;
}

export async function createMagicLoginToken(token: InsertMagicLoginToken) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  await db.insert(magicLoginTokens).values(token);
}

export async function getMagicLoginTokenByHash(tokenHash: string) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const rows = await db.select().from(magicLoginTokens).where(eq(magicLoginTokens.tokenHash, tokenHash)).limit(1);
  return rows[0];
}

export async function consumeMagicLoginToken(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const result = await db.update(magicLoginTokens).set({ usedAt: new Date() })
    .where(and(eq(magicLoginTokens.id, id), isNull(magicLoginTokens.usedAt)));
  return Number(result[0].affectedRows ?? 0) === 1;
}

export async function getUserByEmail(email: string) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const rows = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return rows[0];
}
