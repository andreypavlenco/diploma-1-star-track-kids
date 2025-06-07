import { useFindGoalQuery as __useFindGoalQuery } from '@/graphql/generated/output'

export function useFindGoalQuery(options?: Partial<typeof __useFindGoalQuery>) {
	return __useFindGoalQuery(options)
}
