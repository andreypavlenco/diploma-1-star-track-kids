import { Quest } from '@/graphql/generated/output'

import { QuestColumn } from '@/features/quest/components/QuestColumn'
import { RoomWithQuests } from '@/features/quest/type'
import { RewardColumn } from '@/features/reward/components/RewardColumn'
import { RewardType } from '@/features/reward/type'

type HomeDashboardProps = {
	rewards: RewardType[]
	boughtRewardIds: string[] // ✅ новий проп
	onRefreshReward: () => void
	rooms: RoomWithQuests[]
	onRefreshProfile: () => void
	onRefreshQuests: () => void
}

export function HomeDashboard({
	rewards,
	boughtRewardIds,
	onRefreshReward,
	onRefreshProfile,
	rooms,
	onRefreshQuests
}: HomeDashboardProps) {
	return (
		<div className='w-full px-4 py-6'>
			<div className='flex w-full flex-col gap-6 lg:flex-row'>
				{/* Квести */}
				<div className='min-h-[500px] flex-1'>
					<QuestColumn
						rooms={rooms}
						onRefreshProfile={() => onRefreshProfile()}
						onRefreshQuests={onRefreshQuests}
					/>
				</div>

				{/* Винагороди */}
				<div className='min-h-[500px] flex-1'>
					<RewardColumn
						onRefreshProfile={() => onRefreshProfile()}
						rewards={rewards}
						boughtRewardIds={boughtRewardIds}
						onRefreshReward={() => onRefreshReward()}
					/>
				</div>
			</div>
		</div>
	)
}
