'use client'

import React from 'react'

import { RewardColumn } from './RewardColumn'
import { useProfile } from '@/shared/hooks/useProfile'

export function RewardDashboard() {
	const { rewards, loading, error, refetch } = useProfile()

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div className='flex h-full w-full gap-4 px-4 py-6'>
			<RewardColumn rewards={rewards} onRefreshReward={refetch} />
		</div>
	)
}
