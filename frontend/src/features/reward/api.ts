import { useCreateRoomMutation as __useCreateRoomMutation } from '@/graphql/generated/output'

export function useCreateRoomMutation(
	options?: Partial<typeof __useCreateRoomMutation>
) {
	return __useCreateRoomMutation(options)
}
