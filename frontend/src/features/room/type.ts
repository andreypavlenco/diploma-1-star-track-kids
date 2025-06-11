export type RoomType = {
	id: string
	name: string
	createUser?: {
		id: string
		email: string
	}
	quests?: {
		id: string
		title: string
		description?: string
		deadline: string
		difficulty: number
	}[]
}

export type RoomMemberType = {
	id: string
	room?: RoomType
}

export type RoomColumnProps = {
	rooms: RoomType[]
	onRefreshRoom: () => void
}
