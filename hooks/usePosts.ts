import type { ApiPost, ApiUser } from '@/types'

import useSWR from 'swr'
import { fetcher } from '../libs/fetcher'

export const usePosts = (userId?: string) => {
    const url = userId ? `/api/posts?userId=${userId}` : '/api/posts'
    const { data, error, isLoading, mutate } = useSWR<ApiPost[]>(url, fetcher)

    return {
        data,
        error,
        isLoading,
        mutate
    }
}