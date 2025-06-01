// components/QuestColumn.tsx
import { format } from 'date-fns'
import React from 'react'

interface QuestColumnProps {
	title: string
	quests: Quest[]
}
export type Quest = {
	id: string
	title: string
	deadline: string
}
export type Reward = {
	id: string
	title: string
}

export function QuestColumn({ title, quests }: QuestColumnProps) {
	return (
		<div className='flex flex-1 flex-col overflow-hidden rounded-lg border bg-white shadow-sm'>
			<div className='border-b bg-gray-100 px-4 py-2'>
				<h2 className='text-lg font-semibold'>{title}</h2>
			</div>
			<div className='flex-1 space-y-3 overflow-y-auto p-4'>
				{quests.length === 0 ? (
					<p className='text-gray-500'>No quests</p>
				) : (
					quests.map(quest => (
						<div
							key={quest.id}
							className='flex items-center justify-between rounded-md border px-3 py-2 transition hover:bg-gray-50'
						>
							<button className='mr-3 text-indigo-600 hover:text-indigo-800'>
								▶
							</button>
							<span className='flex-1 text-sm font-medium'>
								{quest.title}
							</span>
							<span className='ml-4 text-xs text-gray-500'>
								{format(quest.deadline, 'HH:mm (dd.MM)')}
							</span>
						</div>
					))
				)}
			</div>
		</div>
	)
}
