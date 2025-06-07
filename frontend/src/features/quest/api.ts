import {
	useCreateQuestMutation as __useCreateQuestMutation,
	useFindAllQuestByRoomMemberIdQuery as __useFindAllQuestByRoomMemberIdQuery
} from '@/graphql/generated/output'

export function useFindAllQuestByRoomMemberIdQuery(
	options?: Partial<typeof __useFindAllQuestByRoomMemberIdQuery>
) {
	return __useFindAllQuestByRoomMemberIdQuery(options)
}

export function useCreateQuestMutation(
	options?: Partial<typeof __useCreateQuestMutation>
) {
	return __useCreateQuestMutation(options)
}
