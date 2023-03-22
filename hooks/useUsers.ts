import { ApiUser } from '@/types'
import useSWR from 'swr'
import { fetcher } from '../libs/fetcher'

export const useUsers = () => { // TODO simplify return as it is
    const { data, error, isLoading, mutate } = useSWR<ApiUser[]>('/api/users', fetcher)

    return {
        data,
        error,
        isLoading,
        mutate
    }
}