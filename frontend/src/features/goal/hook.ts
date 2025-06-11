import { useFindGoalQuery } from './api'

export function useListGoal() {
	const { data, loading, error,  refetch } = useFindGoalQuery()

	return { data, loading, error,  refetch }
}
