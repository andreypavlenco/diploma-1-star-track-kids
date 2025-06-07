import React from 'react'

import { RewardType } from '../type'

import { CreateRewardForm } from './create-reward.form'

type RewardColumnProps = {
	rewards?: RewardType[]
	onRefreshReward: () => void
}

export function RewardColumn({
	rewards = [],
	onRefreshReward
}: RewardColumnProps) {
	return (
		<section className='border-border/60 bg-card flex flex-1 flex-col rounded-xl border shadow-sm'>
			<header className='bg-muted/40 flex items-center justify-between rounded-t-xl px-6 py-3'>
				<h2 className='text-foreground text-lg font-semibold'>
					Rewards
				</h2>
				<CreateRewardForm onRefreshReward={onRefreshReward} />
			</header>

			<div className='space-y-3 overflow-y-auto p-6'>
				{rewards.length === 0 ? (
					<p className='text-muted-foreground'>No rewards</p>
				) : (
					rewards.map(reward => (
						<div
							key={reward.id}
							className='border-border bg-background hover:bg-muted/10 animate-slideInRight flex items-center justify-between rounded-lg border px-4 py-2 shadow-sm transition'
						>
							<span className='font-medium'>{reward.title}</span>
							<span className='bg-primary/10 text-primary rounded-full px-3 py-0.5 text-sm font-medium'>
								★ {reward.starCost}
							</span>
						</div>
					))
				)}
			</div>
		</section>
	)
}
