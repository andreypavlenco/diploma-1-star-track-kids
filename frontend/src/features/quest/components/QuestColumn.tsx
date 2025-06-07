'use client'

import React from 'react'

import { QuestColumnProps } from '../type'

import { CreateQuestForm } from './create-quest.form'

export function QuestColumn({ rooms, onRefreshQuests }: QuestColumnProps) {
	return (
		<section className='border-border/60 bg-card flex flex-1 flex-col rounded-xl border shadow-sm'>
			{/* заголовок */}
			<header className='bg-muted/40 flex items-center justify-between gap-4 rounded-t-xl px-6 py-3'>
				<h2 className='text-foreground text-lg font-semibold'>
					Today Quests
				</h2>
				<CreateQuestForm
					rooms={rooms}
					onRefreshQuests={onRefreshQuests}
				/>
			</header>

			{/* контент */}
			<ul className='space-y-3 overflow-y-auto p-6'>
				{rooms.flatMap(room => room.quests).length === 0 && (
					<li className='text-muted-foreground'>No quests</li>
				)}

				{rooms
					.flatMap(room => room.quests)
					.map(q => (
						<li
							key={q.id}
							className='border-border bg-background hover:bg-muted/10 animate-slideInRight flex items-center justify-between rounded-lg border px-4 py-2 shadow-sm transition'
						>
							<span className='flex items-center gap-2'>
								<span className='animate-ping-slow bg-primary h-2 w-2 rounded-full' />
								<span>{q.title}</span>
							</span>

							<span className='text-muted-foreground text-sm tabular-nums'>
								{new Date(q.deadline).toLocaleTimeString([], {
									hour: '2-digit',
									minute: '2-digit'
								})}
								&nbsp;•&nbsp; #{q.difficulty}
							</span>
						</li>
					))}
			</ul>
		</section>
	)
}
