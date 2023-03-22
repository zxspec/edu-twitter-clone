import { ApiUser } from '@/types'
import useSWR from 'swr'
import { fetcher } from '../libs/fetcher'

export const useUser = (userId: string) => {
    const { data, error, isLoading, mutate } = useSWR<ApiUser>(userId ? `/api/users/${userId}` : null, fetcher)

    return {
        data,
        error,
        isLoading,
        mutate
    }
}