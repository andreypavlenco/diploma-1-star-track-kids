import { Room } from '@/graphql/generated/output'

import { useCreateRoomMutation } from './api'

export const useCreateRoom = () => {
	const [createRoom, { data, loading, error, reset }] =
		useCreateRoomMutation()

	const room: Room | null = data?.createRoom ?? null

	return { createRoom, room, loading, error, reset }
}
