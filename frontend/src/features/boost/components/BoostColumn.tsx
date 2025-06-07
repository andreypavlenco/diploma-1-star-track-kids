import React from 'react'

import { useListBoost } from '../hook'
import { BoostType } from '../type'

export function BoostColumn() {
	const { data, loading, error } = useListBoost()

	const boosts: BoostType[] = data?.listAllBoosts || []
	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div className='flex flex-1 flex-col overflow-hidden rounded-lg border bg-white shadow-sm'>
			<div className='border-b bg-gray-100 px-4 py-2'>
				<h2 className='text-lg font-semibold'>Boost</h2>
			</div>
			<div className='flex-1 space-y-3 overflow-y-auto p-4'>
				{boosts.length === 0 ? (
					<p className='text-gray-500'>No boosts</p>
				) : (
					boosts.map(boost => (
						<div
							key={boost.id}
							className='cursor-pointer rounded-md border px-3 py-2 transition hover:bg-gray-50'
						>
							<button className='mr-3 text-indigo-600 hover:text-indigo-800'>
								▶
							</button>
							<span className='text-sm font-medium'>
								{boost.name}
							</span>
							<span className='text-sm font-medium'>
								{boost.description}
							</span>
							<span className='text-sm font-medium'>
								{boost.durationHours}
							</span>
						</div>
					))
				)}
			</div>
		</div>
	)
}
