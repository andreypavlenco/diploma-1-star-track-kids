import { Room } from '@/graphql/generated/output'

export type Quest = {
	title: string
	deadline: string
	difficulty: number
}

export type RoomWithQuests = {
	id: string
	name: string
	quests: Quest[]
}

export type QuestColumnProps = {
	rooms: RoomWithQuests[]
	onRefreshQuests: () => void
}

export type CreateQuestFormProps = {
	rooms: Room[]
	onRefreshQuests: () => void
}

export type IFormInput = {
	title: string
	deadline: string
	difficulty: number
	roomId: string
}
