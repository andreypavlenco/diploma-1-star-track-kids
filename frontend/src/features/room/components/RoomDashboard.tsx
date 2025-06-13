'use client'

import React from 'react'

import { RoomColumn } from './RoomColumn'
import { useFindAllQuestByRoomMemberId } from '@/features/quest/hook'
import Error from '@/shared/components/error/Error'
import { Loading } from '@/shared/components/loading/Loading'

export function RoomDashboard() {
	const { rooms, loading, error, refetch } = useFindAllQuestByRoomMemberId()

	if (loading) return <Loading />
	if (error) return <Error error={error} />

	return (
		<div className='mx-auto flex h-full max-w-7xl flex-col gap-4 p-6 px-4 py-6'>
			{/* Список комнат */}
			<div className='flex-1 overflow-y-auto'>
				<RoomColumn rooms={rooms} onRefreshRoom={() => refetch()} />
			</div>
		</div>
	)
}
