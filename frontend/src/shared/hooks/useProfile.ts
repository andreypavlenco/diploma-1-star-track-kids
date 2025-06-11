import { isToday, isTomorrow, parseISO } from 'date-fns'
import { useMemo } from 'react'

import { Quest } from '@/graphql/generated/output'

import { useFindProfileQuery } from '../api'

import { RewardType } from '@/features/reward/type'
import { RoomMemberType } from '@/features/room/type'

export const useProfile = () => {
	const { data, loading, error, refetch } = useFindProfileQuery({
		fetchPolicy: 'network-only'
	})

	const profile = data?.findProfile ?? null

	const rooms: RoomMemberType[] = useMemo(
		() => profile?.rooms ?? [],
		[profile]
	)

	const rewards: RewardType[] = useMemo(
		() => profile?.reward ?? [],
		[profile]
	)

	const { todayQuests, tomorrowQuests } = useMemo(() => {
		const today: Quest[] = []
		const tomorrow: Quest[] = []

		;(profile?.quests ?? []).forEach(q => {
			const date = parseISO(q.deadline)
			if (isToday(date)) today.push(q)
			else if (isTomorrow(date)) tomorrow.push(q)
		})

		return { todayQuests: today, tomorrowQuests: tomorrow }
	}, [profile])

	return {
		profile,
		rooms,
		rewards,
		todayQuests,
		tomorrowQuests,
		loading,
		error,
		refetch
	}
}
