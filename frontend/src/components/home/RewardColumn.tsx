// components/RewardColumn.tsx
import React from 'react'

interface Reward {
	id: string | number
	title: string
	description: string
	starCost: number
}

interface RewardColumnProps {
	rewards: Reward[] | []
}

export function RewardColumn({ rewards }: RewardColumnProps) {
	return (
		<div className='flex flex-1 flex-col overflow-hidden rounded-lg border bg-white shadow-sm'>
			<div className='border-b bg-gray-100 px-4 py-2'>
				<h2 className='text-lg font-semibold'>Reward</h2>
			</div>
			<div className='flex-1 space-y-3 overflow-y-auto p-4'>
				{rewards.length === 0 ? (
					<p className='text-gray-500'>No rewards</p>
				) : (
					rewards.map(reward => (
						<div
							key={reward.id}
							className='cursor-pointer rounded-md border px-3 py-2 transition hover:bg-gray-50'
						>
							<span className='text-sm font-medium'>
								{reward.title}
							</span>
							<span className='text-sm font-medium'>
								{reward.starCost}
							</span>
						</div>
					))
				)}
			</div>
		</div>
	)
}
