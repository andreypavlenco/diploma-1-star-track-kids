'use client'

import React from 'react'

import { useFindProfileQuery } from '@/graphql/generated/output'

import { RewardColumn } from '../home/RewardColumn'

import { RoomColumn } from './RoomColumn'

type RoomType = {
	id: string
	name: string
}

type RoomMemberType = {
	id: string
	room: RoomType
}

export function Dashboard() {
	const { data, loading, error } = useFindProfileQuery()

	const rooms: RoomMemberType[] = data?.findProfile?.rooms || []
	const rewards = data?.findProfile?.reward || []
	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div className='flex h-full w-full gap-4 px-4 py-6'>
			<RoomColumn rooms={rooms} />
			<RewardColumn rewards={rewards} />
		</div>
	)
}
