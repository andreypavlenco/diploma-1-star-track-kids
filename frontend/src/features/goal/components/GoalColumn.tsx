import React from 'react'

import { useListGoal } from '../hook'
import { GoalType } from '../type'

export function GoalColumn() {
	const { data, loading, error } = useListGoal()

	const goals: GoalType[] = data?.findGoal || []
	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div className='flex flex-1 flex-col overflow-hidden rounded-lg border bg-white shadow-sm'>
			<div className='border-b bg-gray-100 px-4 py-2'>
				<h2 className='text-lg font-semibold'>Goals</h2>
			</div>
			<div className='flex-1 space-y-3 overflow-y-auto p-4'>
				{goals.length === 0 ? (
					<p className='text-gray-500'>No Goals</p>
				) : (
					goals.map(goal => (
						<div
							key={goal.id}
							className='cursor-pointer rounded-md border px-3 py-2 transition hover:bg-gray-50'
						>
							<span className='text-sm font-medium'>
								{goal.title}
							</span>
							<span className='text-sm font-medium'>
								{goal.starReward}
							</span>
						</div>
					))
				)}
			</div>
		</div>
	)
}
