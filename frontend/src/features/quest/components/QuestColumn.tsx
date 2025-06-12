'use client'

import React, { useState } from 'react'
import { QuestColumnProps } from '../type'
import { useCompleteQuestMutation } from '@/graphql/generated/output'
import { Button } from '@/shared/ui-kit/ui/button'
import clsx from 'clsx'
import { differenceInHours } from 'date-fns'
import { useAuthContext } from '@/app/providers/AuthProvider'

export function QuestColumn({ rooms, onRefreshQuests }: QuestColumnProps) {
	const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null)
	const [selectedStatus, setSelectedStatus] = useState<'all' | 'completed' | 'uncompleted'>('all')
	const [completeQuest, { loading: completing }] = useCompleteQuestMutation({
		refetchQueries: ['findAllQuestByRoomMemberId'],
		awaitRefetchQueries: true,
	})

	const { profile } = useAuthContext()
	const userId = profile?.id

	const filteredRooms = selectedRoomId
		? rooms.filter(room => room.id === selectedRoomId)
		: rooms

	const handleComplete = async (questId: string) => {
		try {
			const result = await completeQuest({ variables: { questId } })
			if (result.data?.questCompletion) await onRefreshQuests()
		} catch (err) {
			console.error('Помилка під час завершення квесту:', err)
		}
	}

	const isCompletedByUser = (q: any): boolean => {
		if (!userId) return false
		return q.completions?.some((c: any) => c.userId === userId)
	}

	const getQuestStyle = (q: any): string => {
		if (isCompletedByUser(q)) return 'bg-gradient-to-br from-green-100 to-green-50 border-green-300'
		const hoursLeft = differenceInHours(new Date(q.deadline), new Date())
		if (hoursLeft <= 4) return 'bg-gradient-to-br from-red-100 to-red-50 border-red-300'
		return 'bg-gradient-to-br from-yellow-100 to-yellow-50 border-yellow-300'
	}

	const filterQuestsByStatus = (quests: any[]) => {
		return quests.filter(q => {
			const completed = isCompletedByUser(q)
			if (selectedStatus === 'completed') return completed
			if (selectedStatus === 'uncompleted') return !completed
			return true
		})
	}

	return (
		<section className="flex flex-1 flex-col rounded-xl border bg-white shadow-md overflow-hidden">
			{/* Заголовок */}
			<header className="bg-gradient-to-r from-green-200 via-lime-100 to-yellow-100 px-6 py-4 border-b shadow-sm flex items-center justify-between">
				<div className="text-2xl flex gap-1">
					📜
					<h2 className="font-bold bg-gradient-to-r from-green-700 to-lime-500 bg-clip-text text-transparent drop-shadow">
						Квести
					</h2>
				</div>
			</header>

			{/* Фільтрація кімнат і статусів */}
			<div className="flex flex-wrap gap-2 px-6 pt-4 items-center">
				{/* Кімнати */}
				<Button
					variant={selectedRoomId === null ? 'default' : 'outline'}
					onClick={() => setSelectedRoomId(null)}
				>
					Усі кімнати
				</Button>
				{rooms.map(room => (
					<Button
						key={room.id}
						variant={selectedRoomId === room.id ? 'default' : 'outline'}
						onClick={() => setSelectedRoomId(room.id)}
					>
						{room.name}
					</Button>
				))}

				{/* Статуси */}
				<div className="ml-auto flex gap-2">
					<Button
						variant={selectedStatus === 'all' ? 'default' : 'outline'}
						onClick={() => setSelectedStatus('all')}
					>
						🌐 Усі
					</Button>
					<Button
						variant={selectedStatus === 'completed' ? 'default' : 'outline'}
						onClick={() => setSelectedStatus('completed')}
					>
						✅ Завершені
					</Button>
					<Button
						variant={selectedStatus === 'uncompleted' ? 'default' : 'outline'}
						onClick={() => setSelectedStatus('uncompleted')}
					>
						❌ Незавершені
					</Button>
				</div>
			</div>

			{/* Список квестів */}
			<ul className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2  gap-6 p-6">
				{filteredRooms.flatMap(room =>
					filterQuestsByStatus(room.quests)
				).length === 0 ? (
					<li className="text-gray-500">Немає квестів за обраними фільтрами</li>
				) : (
					filteredRooms.flatMap(room =>
						filterQuestsByStatus(room.quests)
					).map(q => {
						const isCompleted = isCompletedByUser(q)

						return (
							<li
								key={q.id}
								className={clsx(
									'border rounded-lg p-4 shadow-md transition-all duration-200 transform hover:scale-[1.01] animate-fadeIn',
									getQuestStyle(q)
								)}
							>
								<div className="flex items-center justify-between mb-2">
									<div className="flex items-center gap-2">
										<span className="h-2 w-2 rounded-full bg-green-500" />
										<h3 className="text-base font-semibold text-gray-800">
											{q.title}
										</h3>
									</div>

									<Button
										size="sm"
										variant="secondary"
										disabled={completing || isCompleted}
										onClick={() => handleComplete(q.id)}
									>
										{isCompleted ? '✅ Завершено' : 'Завершити'}
									</Button>
								</div>

								<div className="flex justify-between text-sm text-gray-700">
									<div className="flex gap-2 items-center">
										<span>📅 {new Date(q.deadline).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
										<span className="text-xs text-gray-500">
											({differenceInHours(new Date(q.deadline), new Date())} год залишилось)
										</span>
									</div>
									<div className="font-medium text-xs">
										Складність:{' '}
										<span
											className={clsx('px-2 py-0.5 rounded-full', {
												'bg-green-100 text-green-800': q.difficulty === 1,
												'bg-yellow-100 text-yellow-800': q.difficulty === 2,
												'bg-red-100 text-red-800': q.difficulty >= 3,
											})}
										>
											#{q.difficulty}
										</span>
									</div>
								</div>
							</li>
						)
					})
				)}
			</ul>
		</section>
	)
}
