'use client'

import React from 'react'

import { RewardColumn } from '../../reward/components/RewardColumn'
import { useFindAllQuestByRoomMemberId } from '../hook'

import { QuestColumn } from './QuestColumn'

export function QuestDashboard() {
	const { rooms, loading, error, refetch } = useFindAllQuestByRoomMemberId()

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div className='flex h-full w-full gap-4 px-4 py-6'>
			<QuestColumn rooms={rooms} onRefreshQuests={() => refetch()} />
			<RewardColumn />
		</div>
	)
}
