import type { User, Post } from 'prisma/prisma-client'

export type OptionalString = string | null | undefined;
export type ApiUser = User & { followersCount: number }
export type ApiPost = Post