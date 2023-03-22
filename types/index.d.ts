import type { User } from 'prisma/prisma-client'

export type ApiUser = User & { followersCount: number }