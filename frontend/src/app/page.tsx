'use client'

import { HomeDashboard } from '@/features/home/components/HomeDashboard'
import MainLayout from '@/features/home/components/MainLayout'
import { useFindAllQuestByRoomMemberId } from '@/features/quest/hook'
import {  useFindRewardsForUserQuery } from '@/graphql/generated/output'
import Error from '@/shared/components/error/Error'
import { Loading } from '@/shared/components/loading/Loading'
import { useProfile } from '@/shared/hooks/useProfile'

export default function HomePage() {
	const {
		profile,
		loading,
		error,
		rewards,
	} = useProfile()

	const { data  } = useFindRewardsForUserQuery({
		fetchPolicy: 'network-only',
	  });

	  const { rooms, refetch } = useFindAllQuestByRoomMemberId()

	if (loading) return <Loading />
	if (error) return <Error error={error} />

	return (
		<div>
			<MainLayout profile={profile} />

			<HomeDashboard
				
				rewards={data?.findRewardsForUser}
				onRefreshReward={refetch}
				rooms={rooms} 
				onRefreshQuests={() => refetch()}
			/>
		</div>
	)
}
