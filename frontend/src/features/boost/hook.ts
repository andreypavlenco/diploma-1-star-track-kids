import { useListAllBoostsQuery } from './api'

export function useListBoost() {
	const { data, loading, error } = useListAllBoostsQuery()

	return { data, loading, error }
}
