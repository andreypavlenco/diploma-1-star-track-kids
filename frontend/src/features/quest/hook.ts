import { useMemo } from 'react'

import {
	useCreateQuestMutation,
	useFindAllQuestByRoomMemberIdQuery
} from './api'
import { RoomWithQuests } from './type'

export function useFindAllQuestByRoomMemberId() {
	const { data, loading, error, refetch } =
		useFindAllQuestByRoomMemberIdQuery({
		fetchPolicy: 'network-only'
	})

	const rooms: RoomWithQuests[] = ({} = useMemo(
		() => data?.findAllQuestByRoomMemberId ?? [],
		[data]
	))
	return { rooms, loading, error, refetch }
}

export function useCreateQuest() {
	const [createQuest, { loading, error }] = useCreateQuestMutation()

	return { createQuest, loading, error }
}
