'use client'

import { HomeDashboard } from '@/features/home/components/HomeDashboard'
import MainLayout from '@/features/home/components/MainLayout'
import { useFindRewardsForUserQuery } from '@/graphql/generated/output'
import Error from '@/shared/components/error/Error'
import { Loading } from '@/shared/components/loading/Loading'
import { useProfile } from '@/shared/hooks/useProfile'

export default function HomePage() {
	const {
		profile,
		loading,
		error,
		todayQuests,
		tomorrowQuests,
	} = useProfile()

	const { data, refetch } = useFindRewardsForUserQuery({
		fetchPolicy: 'network-only',
	  });

	if (loading) return <Loading />
	if (error) return <Error error={error} />

	return (
		<div>
			<MainLayout profile={profile} />

			<HomeDashboard
				todayQuests={todayQuests}
				tomorrowQuests={tomorrowQuests}
				rewards={data?.findRewardsForUser}
				onRefreshReward={refetch}
			/>
		</div>
	)
}
