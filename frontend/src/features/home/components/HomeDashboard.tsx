'use client'

import { Quest } from '@/graphql/generated/output'

import { RewardColumn } from '../../reward/components/RewardColumn'

import { QuestColumn } from './QuestColumn'
import { RewardType } from '@/features/reward/type'

type HomeDashboardProps = {
	todayQuests: Quest[]
	tomorrowQuests: Quest[]
	rewards: RewardType[]
	onRefreshReward: () => void
}

export function HomeDashboard({
	todayQuests,
	tomorrowQuests,
	rewards,
	onRefreshReward
}: HomeDashboardProps) {
	 
	return (
		<div className='grid w-full auto-rows-[1fr] gap-6 px-4 py-6 sm:grid-cols-2 lg:grid-cols-3'>
			<QuestColumn title='Today Quests' quests={todayQuests} />
			<QuestColumn title='Tomorrow Quests' quests={tomorrowQuests} />
			<RewardColumn rewards={rewards} onRefreshReward={onRefreshReward} />
		</div>
	)
}
