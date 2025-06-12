'use client'

import React from 'react'

import { RewardColumn } from '../../reward/components/RewardColumn'
import { useFindAllQuestByRoomMemberId } from '../hook'

import { QuestColumn } from './QuestColumn'
import { Loading } from '@/shared/components/loading/Loading'
import Error from '@/shared/components/error/Error'

export function QuestDashboard() {
	const { rooms, loading, error, refetch } = useFindAllQuestByRoomMemberId()

	if (loading) return <Loading/>
	if (error) return <Error error={error}/>

	return (
		<div className='mx-auto max-w-7xl flex h-full w-full gap-4 px-4 py-6'>
			<QuestColumn rooms={rooms} onRefreshQuests={() => refetch()} />
		</div>
	)
}
