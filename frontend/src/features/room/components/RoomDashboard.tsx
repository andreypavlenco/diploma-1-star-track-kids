'use client'

import React from 'react'

import { RoomMemberType } from '../type'

import { RoomColumn } from './RoomColumn'
import { RewardColumn } from '@/features/reward/components/RewardColumn'
import { useProfile } from '@/shared/hooks/useProfile'

export function RoomDashboard() {
	const { rooms, loading, error, refetch } = useProfile()

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div className='flex h-full w-full gap-4 px-4 py-6'>
			<RoomColumn rooms={rooms} onRefreshProfile={() => refetch()} />
			<RewardColumn />
		</div>
	)
}
