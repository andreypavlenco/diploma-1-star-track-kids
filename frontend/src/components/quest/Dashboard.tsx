'use client'

import React from 'react'

import {
	Quest,
	Room,
	useFindAllQuestByRoomMemberIdQuery,
	useFindProfileQuery
} from '@/graphql/generated/output'

import { RewardColumn } from '../home/RewardColumn'

import { QuestColumn } from './QuestColumn'

interface Quest {
	title: string
	deadline: string
	difficulty: number
}

interface RoomWithQuests {
	id: string
	name: string
	quests: Quest[]
}

export function Dashboard() {
	const { data, loading, error, refetch } =
		useFindAllQuestByRoomMemberIdQuery()

	const rooms : RoomWithQuests[] = data?.findAllQuestByRoomMemberId || []
	
	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div className='flex h-full w-full gap-4 px-4 py-6'>
			
			<QuestColumn rooms={rooms} onRefreshQuests={() => refetch()} />
			 <RewardColumn/>
		</div>
	)
}
