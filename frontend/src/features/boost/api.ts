import { useListAllBoostsQuery as __useListAllBoostsQuery } from '@/graphql/generated/output'

export function useListAllBoostsQuery(
	options?: Partial<typeof __useListAllBoostsQuery>
) {
	return __useListAllBoostsQuery(options)
}
