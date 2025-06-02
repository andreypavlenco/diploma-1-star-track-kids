'use client'

import React from 'react'

import { CreateQuestForm } from './create-quest.form'

interface Quest {
	title: string
	deadline: string
	difficulty: number
}

interface RoomWithQuests {
	id: string
	name: string
	quests: Quest[]
}

interface QuestColumnProps {
	rooms: RoomWithQuests[]
	onRefreshQuests: () => void
}

export function QuestColumn({ rooms, onRefreshQuests }: QuestColumnProps) {
	return (
		<div className='flex flex-1 flex-col overflow-hidden rounded-lg border bg-white shadow-sm'>
		
		<div className='flex gap-10 border-b bg-gray-100 px-4 py-2'>
				<h2 className='text-lg font-semibold'>Quests List</h2>
				<CreateQuestForm rooms={rooms} onRefreshQuests={() => onRefreshQuests()} />
			</div>
			
				<ul className='space-y-2'>
					{rooms.map((q) => (
						q.quests.map((q, idx) => (
							<li
							key={idx}
							className='flex justify-between rounded bg-gray-100 px-3 py-2'
						>
							<span>{q.title}</span>
							<span>
								{new Date(q.deadline).toLocaleDateString()} • #
								{q.difficulty}
							</span>
						</li>
						))
						
					))}
				</ul>
			
		</div>
	)
}
