'use client'

import { useAuthContext } from '@/app/providers/AuthProvider'

import { useFindRewardsForUserQuery } from '@/graphql/generated/output'

import { HomeDashboard } from '@/features/home/components/HomeDashboard'
import MainLayout from '@/features/home/components/MainLayout'
import { useFindAllQuestByRoomMemberId } from '@/features/quest/hook'
import Error from '@/shared/components/error/Error'
import { Loading } from '@/shared/components/loading/Loading'

export default function HomePage() {
	const { profile, refetch: refetchProfile } = useAuthContext()
	const userId = profile?.id

	const { data, loading, error, refetch } = useFindRewardsForUserQuery({
		fetchPolicy: 'network-only'
	})

	const { rooms, refetch: refetchQuests } = useFindAllQuestByRoomMemberId()

	if (loading) return <Loading />
	if (error) return <Error error={error} />

	const rewards = data?.findRewardsForUser ?? []

	// Отримуємо ID винагород, які купив поточний користувач
	const boughtRewardIds = rewards
		.filter(reward =>
			reward.purchases?.some(purchase => purchase.child?.id === userId)
		)
		.map(reward => reward.id)

	const handleRefresh = async () => {
		await refetch()
	}

	return (
		<div>
			<MainLayout profile={profile} />
			<HomeDashboard
				rewards={rewards}
				boughtRewardIds={boughtRewardIds}
				onRefreshReward={handleRefresh}
				rooms={rooms}
				onRefreshProfile={() => refetchProfile()}
				onRefreshQuests={() => refetchQuests()}
			/>
		</div>
	)
}
