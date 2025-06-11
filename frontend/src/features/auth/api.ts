import {
	useCreateUserMutation as __useCreateUserMutation,
	useLoginUserMutation as __useLoginUserMutation
} from '@/graphql/generated/output'

export function useLoginUserMutation(
	options?: Partial<typeof __useLoginUserMutation>
) {
	return __useLoginUserMutation(options)
}

export function useCreateUserMutation(
	options?: Partial<typeof __useCreateUserMutation>
) {
	return __useCreateUserMutation(options)
}
