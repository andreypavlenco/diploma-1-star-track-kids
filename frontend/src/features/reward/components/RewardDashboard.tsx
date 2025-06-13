'use client'

import React from 'react'

import { useAuthContext } from '@/app/providers/AuthProvider'

import { useFindRewardsForUserQuery } from '@/graphql/generated/output'

import { RewardColumn } from './RewardColumn'
import Error from '@/shared/components/error/Error'
import { Loading } from '@/shared/components/loading/Loading'

export function RewardDashboard() {
	const { profile, refetch: onRefreshProfile } = useAuthContext()
	const userId = profile?.id
	const { data, loading, error, refetch } = useFindRewardsForUserQuery({
		fetchPolicy: 'network-only'
	})

	const handleRefresh = async () => {
		await refetch()
	}

	if (loading) return <Loading />
	if (error) return <Error error={error} />

	const rewards = data?.findRewardsForUser ?? []

	const boughtRewardIds = rewards
		.filter(reward =>
			reward.purchases?.some(purchase => purchase.child?.id === userId)
		)
		.map(reward => reward.id)

	return (
		<div className='flex h-full w-full gap-4 px-4 py-6'>
			<RewardColumn
				onRefreshProfile={onRefreshProfile}
				rewards={rewards}
				boughtRewardIds={boughtRewardIds}
				onRefreshReward={handleRefresh}
			/>
		</div>
	)
}
