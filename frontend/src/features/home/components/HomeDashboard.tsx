'use client'

import { Quest } from '@/graphql/generated/output'
import { RewardType } from '@/features/reward/type'
import { QuestColumn } from '@/features/quest/components/QuestColumn'
import { RewardColumn } from '@/features/reward/components/RewardColumn'
import { RoomWithQuests } from '@/features/quest/type'

type HomeDashboardProps = {
	todayQuests: Quest[]
	tomorrowQuests: Quest[]
	rewards: RewardType[]
	onRefreshReward: () => void
	rooms: RoomWithQuests[]
	onRefreshQuests: () => void
}

export function HomeDashboard({
	rewards,
	onRefreshReward,
	rooms,
	onRefreshQuests
}: HomeDashboardProps) {
	return (
<div className="w-full px-4 py-6">
			<div className="flex flex-col lg:flex-row gap-6 w-full">
				{/* Квести */}
				<div className="flex-1 min-h-[600px]">
					<QuestColumn rooms={rooms} onRefreshQuests={onRefreshQuests} />
				</div>

				{/* Винагороди */}
				<div className="flex-1 min-h-[600px]">
					<RewardColumn rewards={rewards} onRefreshReward={onRefreshReward} />
				</div>
			</div>
		</div>

	)
}
