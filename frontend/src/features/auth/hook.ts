import {
	useCreateUserMutation,
	useLoginUserMutation
} from '@/graphql/generated/output'

export function useSingIn() {
	const [loginUser, { data, loading, error }] = useLoginUserMutation()

	return { loginUser, data, loading, error }
}

export function useSingUp() {
	const [createUser, { data, loading, error }] = useCreateUserMutation()

	return { createUser, data, loading, error }
}
