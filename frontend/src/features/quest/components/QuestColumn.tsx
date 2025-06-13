'use client'

import clsx from 'clsx'
import { differenceInHours } from 'date-fns'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useQuery } from '@apollo/client'

import { useAuthContext } from '@/app/providers/AuthProvider'
import {
	useCompleteQuestMutation,
	useGetChildrenActivityQuery
} from '@/graphql/generated/output'

import { QuestColumnProps } from '../type'
import { Button } from '@/shared/ui-kit/ui/button'

export function QuestColumn({
	rooms,
	onRefreshQuests,
	onRefreshProfile
}: QuestColumnProps) {
	const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null)
	const [selectedStatus, setSelectedStatus] = useState<'all' | 'completed' | 'uncompleted'>('all')

	const [completeQuest, { loading: completing }] = useCompleteQuestMutation({
		refetchQueries: ['findAllQuestByRoomMemberId'],
		awaitRefetchQueries: true
	})

	const { profile } = useAuthContext()
	const userId = profile?.id
	const isParent = profile?.role === 'PARENT'

	const { data: activityData, loading: loadingActivity } = useGetChildrenActivityQuery({
		skip: !isParent
	})
console.log(activityData)
	const filteredRooms = selectedRoomId ? rooms.filter(room => room.id === selectedRoomId) : rooms

	const handleComplete = async (questId: string) => {
		const toastId = toast.loading('Завершення квесту...')
		try {
			const result = await completeQuest({ variables: { questId } })
			if (result.data?.questCompletion) {
				await onRefreshQuests()
				await onRefreshProfile()
				toast.success('Квест успішно завершено!', { id: toastId })
			} else {
				toast.error('Не вдалося завершити квест', { id: toastId })
			}
		} catch (err) {
			console.error('Помилка під час завершення квесту:', err)
			toast.error('Помилка під час завершення квесту', { id: toastId })
		}
	}

	const getCompletedQuestIdsByChildren = (): string[] => {
		if (!isParent || !activityData?.getChildrenActivity?.completions) return []
		return activityData.getChildrenActivity.completions.map(c => c.quest.id)
	}

	const isCompletedByUser = (q: any): boolean => {
		if (!userId) return false
		if (!isParent) {
			return q.completions?.some((c: any) => c.userId === userId)
		}
		const completedIds = getCompletedQuestIdsByChildren()
		return completedIds.includes(q.id)
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
		<section className='flex flex-1 flex-col overflow-hidden rounded-xl border bg-white shadow-md'>
			<header className='flex items-center justify-between border-b bg-gradient-to-r from-green-200 via-lime-100 to-yellow-100 px-6 py-4 shadow-sm'>
				<div className='flex gap-1 text-2xl'>
					📜
					<h2 className='bg-gradient-to-r from-green-700 to-lime-500 bg-clip-text font-bold text-transparent drop-shadow'>
						Квести
					</h2>
				</div>
			</header>

			<div className='flex flex-wrap items-center gap-2 px-6 pt-4'>
				<Button variant={selectedRoomId === null ? 'default' : 'outline'} onClick={() => setSelectedRoomId(null)}>Усі кімнати</Button>
				{rooms.map(room => (
					<Button key={room.id} variant={selectedRoomId === room.id ? 'default' : 'outline'} onClick={() => setSelectedRoomId(room.id)}>
						{room.name}
					</Button>
				))}
				<div className='flex w-full flex-wrap justify-start gap-2 sm:w-auto sm:justify-end'>
					<Button variant={selectedStatus === 'all' ? 'default' : 'outline'} onClick={() => setSelectedStatus('all')}>🌐 Усі</Button>
					<Button variant={selectedStatus === 'completed' ? 'default' : 'outline'} onClick={() => setSelectedStatus('completed')}>✅ Завершені</Button>
					<Button variant={selectedStatus === 'uncompleted' ? 'default' : 'outline'} onClick={() => setSelectedStatus('uncompleted')}>❌ Незавершені</Button>
				</div>
			</div>

			<ul className='grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-2'>
				{filteredRooms.flatMap(room => filterQuestsByStatus(room.quests)).length === 0 ? (
					<li className='text-gray-500'>Немає квестів за обраними фільтрами</li>
				) : (
					filteredRooms.flatMap(room => filterQuestsByStatus(room.quests)).map(q => {
						const isCompleted = isCompletedByUser(q)
						return (
							<li key={q.id} className={clsx('animate-fadeIn transform rounded-lg border p-4 shadow-md transition-all duration-200 hover:scale-[1.01]', getQuestStyle(q))}>
								<div className='mb-2 flex items-center justify-between'>
									<div className='flex items-center gap-2'>
										<span className='h-2 w-2 rounded-full bg-green-500' />
										<h3 className='text-base font-semibold text-gray-800'>{q.title}</h3>
									</div>
									{!isParent && (
										<Button size='sm' variant='secondary' disabled={completing || isCompleted} onClick={() => handleComplete(q.id)}>
											{isCompleted ? '✅ Завершено' : 'Завершити'}
										</Button>
									)}
								</div>
								<div className='flex justify-between text-sm text-gray-700'>
									<div className='flex items-center gap-2'>
										<span>📅 {new Date(q.deadline).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
										<span className='text-xs text-gray-500'>({differenceInHours(new Date(q.deadline), new Date())} год залишилось)</span>
									</div>
									<div className='text-xs font-medium'>
										Складність:{' '}
										<span className={clsx('rounded-full px-2 py-0.5', {
											'bg-green-100 text-green-800': q.difficulty === 1,
											'bg-yellow-100 text-yellow-800': q.difficulty === 2,
											'bg-red-100 text-red-800': q.difficulty >= 3
										})}>
											#{q.difficulty}
										</span>
									</div>
								</div>
							</li>
						)
					})
				)}
			</ul>

			{isParent && activityData?.getChildrenActivity && (
				<div className='px-6 pb-6'>
					<h3 className='mb-2 text-lg font-bold text-green-700'>Активність дітей</h3>
					<ul className='space-y-2'>
						{activityData.getChildrenActivity.completions.map((c: any) => (
							<li key={c.id} className='rounded-md border p-2 shadow-sm'>
								✅ {c.user.email} завершив квест "{c.quest.title}" на {c.starsAwarded}⭐
							</li>
						))}
						{activityData.getChildrenActivity.purchases.map((p: any) => (
							<li key={p.id} className='rounded-md border p-2 shadow-sm'>
								🎁 {p.child.email} купив винагороду "{p.reward.title}" за {p.reward.starCost}⭐
							</li>
						))}
					</ul>
				</div>
			)}
		</section>
	)
}
