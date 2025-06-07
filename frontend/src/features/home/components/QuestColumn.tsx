'use client'

import React from 'react'

import { Quest } from '@/graphql/generated/output'

type QuestColumnProps = {
	title: string
	quests: Quest[]
}

export function QuestColumn({ title, quests }: QuestColumnProps) {
	return (
		<section className='border-border/60 bg-card flex flex-1 flex-col rounded-xl border shadow-sm'>
			<header className='bg-muted/40 flex items-center justify-between rounded-t-xl px-6 py-3'>
				<h2 className='text-foreground text-lg font-semibold'>
					{title}
				</h2>
			</header>
			<ul className='space-y-3 overflow-y-auto p-6'>
				{quests.length === 0 && (
					<li className='text-muted-foreground'>No quests</li>
				)}
				{quests.map(q => (
					<li
						key={q.id}
						className='border-border bg-background hover:bg-muted/10 animate-slideInRight flex items-center justify-between gap-4 rounded-lg border px-4 py-2 shadow-sm transition'
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
