// components/Dashboard.tsx
'use client'

import { isToday, isTomorrow, parseISO } from 'date-fns'
import React from 'react'

import { useFindProfileQuery } from '@/graphql/generated/output'

import { QuestColumn } from './QuestColumn'
import { RewardColumn } from './RewardColumn'

// components/Dashboard.tsx

// components/Dashboard.tsx

// components/Dashboard.tsx

// components/Dashboard.tsx

// components/Dashboard.tsx

// components/Dashboard.tsx

export function Dashboard() {
	const { data, loading, error } = useFindProfileQuery()
	console.log(data)
	const quests = data?.findProfile?.quests || []
	const rewards = data?.findProfile?.reward || []
	const todayQuests = quests.filter(q => isToday(parseISO(q.deadline)))
	const tomorrowQuests = quests.filter(q => isTomorrow(parseISO(q.deadline)))
	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div className='flex h-full w-full gap-4 px-4 py-6'>
			{/* 3 колонки: Today, Tomorrow, Rewards */}
			<QuestColumn title='Today Quests' quests={quests} />
			<QuestColumn title='Tomorrow Quests' quests={tomorrowQuests} />
			<RewardColumn rewards={rewards} />
		</div>
	)
}
