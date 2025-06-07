export type RoomType = {
	id: string
	name: string
}

export type RoomMemberType = {
	id: string
	room: RoomType
}

export type RoomColumnProps = {
	rooms: RoomMemberType[]
	onRefreshRoom: () => void
}
