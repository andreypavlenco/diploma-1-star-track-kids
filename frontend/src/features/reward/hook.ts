import { useCreateRoomMutation } from './api'

export function useCreateRoom() {
	const [createRoom, { loaging, error }] = useCreateRoomMutation()

	return { createRoom, loaging, error }
}
