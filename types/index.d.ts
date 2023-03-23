import type { User } from 'prisma/prisma-client'

export type OptionalString = string | null | undefined;
export type ApiUser = User & { followersCount: number }