import { useFindGoalQuery } from './api'

export function useListGoal() {
	const { data, loading, error } = useFindGoalQuery()

	return { data, loading, error }
}
