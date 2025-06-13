'use client'

import React from 'react'

import { useAuthContext } from '@/app/providers/AuthProvider'

import { RewardColumn } from '../../reward/components/RewardColumn'
import { useFindAllQuestByRoomMemberId } from '../hook'

import { QuestColumn } from './QuestColumn'
import Error from '@/shared/components/error/Error'
import { Loading } from '@/shared/components/loading/Loading'

export function QuestDashboard() {
	const { refetch: onRefreshProfile } = useAuthContext()
	const { rooms, loading, error, refetch } = useFindAllQuestByRoomMemberId()

	if (loading) return <Loading />
	if (error) return <Error error={error} />

	return (
		<div className='mx-auto flex h-full w-full max-w-7xl gap-4 px-4 py-6'>
			<QuestColumn
				rooms={rooms}
				onRefreshProfile={onRefreshProfile}
				onRefreshQuests={() => refetch()}
			/>
		</div>
	)
}
