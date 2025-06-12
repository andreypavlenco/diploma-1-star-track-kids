import { useFindGoalQuery } from './api'
import { GoalType } from './type'

export function useListGoal() {
	const { data, loading, error,  refetch } = useFindGoalQuery({
		  fetchPolicy: 'network-only',
	})
	const goals: GoalType[] = data?.findGoal || []
	return { goals, loading, error,  refetch }
}
