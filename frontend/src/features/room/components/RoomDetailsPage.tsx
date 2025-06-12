'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Sparkles, Users } from 'lucide-react'
import { differenceInDays, isPast, isToday } from 'date-fns'

import {
	useFindRoomByIdQuery,
	useUpdateQuestMutation
} from '@/graphql/generated/output'

import RoomSettingsDialog from './RoomSettingsDialog'
import QuestSettingsDialog from '@/features/quest/components/ QuestSettingsDialog'
import { CreateQuestForm } from '@/features/quest/components/create-quest.form'
import { InviteAlertDialog } from '@/features/invitation/InviteDialog'

import Error from '@/shared/components/error/Error'
import { Loading } from '@/shared/components/loading/Loading'
import { Button } from '@/shared/ui-kit/ui/button'

// Варіанти градієнтів
const gradientOptions = [
	'from-green-200 via-blue-200 to-purple-200',
	'from-yellow-200 via-orange-200 to-red-200',
	'from-teal-200 via-green-100 to-lime-200',
	'from-pink-200 via-purple-100 to-indigo-200',
	'from-blue-100 via-cyan-100 to-teal-100',
]

const getRandomGradient = () =>
	gradientOptions[Math.floor(Math.random() * gradientOptions.length)]

const getDeadlineStatus = (date: Date) => {
	const today = new Date()
	if (isToday(date)) return 'Сьогодні дедлайн!'
	if (isPast(date)) {
		const daysLate = differenceInDays(today, date)
		return `Прострочено на ${daysLate} дн.`
	}
	const daysLeft = differenceInDays(date, today)
	return `Залишилось: ${daysLeft} дн.`
}

type RoomDetailsPageProps = {
	roomId: string
}

export default function RoomDetailsPage({ roomId }: RoomDetailsPageProps) {
	const [isSettingsOpen, setIsSettingsOpen] = useState(false)
	const [selectedQuest, setSelectedQuest] = useState<any | null>(null)
	const [isQuestSettingsOpen, setIsQuestSettingsOpen] = useState(false)
	const [isInviteOpen, setIsInviteOpen] = useState(false)
	const [editingId, setEditingId] = useState<string | null>(null)
	const [tempDescription, setTempDescription] = useState<string>('')

	const [updateQuest] = useUpdateQuestMutation()

	const { data, loading, error, refetch } = useFindRoomByIdQuery({
		variables: { roomId },
		fetchPolicy: 'network-only'
	})

	if (loading) return <Loading />
	if (error) return <Error error={error} />

	const room = data?.findRoomById

	return (
		<div className='mx-auto max-w-6xl px-4 py-6'>
			<div className='mb-8 rounded-2xl border border-green-200 bg-gradient-to-br from-lime-50 via-green-50 to-white p-6 shadow-xl'>
				<div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
					<h1 className='text-3xl font-bold flex items-center gap-2'>
						<Sparkles className='text-green-500' />
						<span className='bg-gradient-to-r from-green-700 to-lime-500 bg-clip-text text-transparent'>
							Кімната: {room?.name ?? 'Невідома'}
						</span>
					</h1>
					<div className='flex flex-wrap gap-3 justify-end'>
						<CreateQuestForm roomId={room?.id} onRefreshQuest={refetch} />
						<InviteAlertDialog
							roomId={room?.id}
							open={isInviteOpen}
							onClose={() => setIsInviteOpen(false)}
						/>
					</div>
				</div>
				<p className='mt-3 text-gray-700'>
					Усього квестів:{' '}
					<span className='font-semibold text-green-800'>
						{room?.quests?.length ?? 0}
					</span>
				</p>
			</div>

			{room?.quests?.length === 0 ? (
				<p className='text-center text-gray-500'>У цій кімнаті ще немає квестів.</p>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
					{room?.quests?.map(q => (
						<div
							onClick={() => {
								setSelectedQuest(q)
								setIsQuestSettingsOpen(true)
							}}
							key={q.id}
							className={clsx(
								'rounded-xl border p-5 shadow-md transition-all duration-200 hover:shadow-xl hover:scale-[1.02] cursor-pointer',
								'bg-gradient-to-br',
								getRandomGradient()
							)}
						>
							<div className='mb-2 flex items-center justify-between'>
								<h3 className='text-lg font-semibold text-green-900'>{q.title}</h3>
								<button
									onClick={(e) => {
										e.stopPropagation()
										setSelectedQuest(q)
										setIsQuestSettingsOpen(true)
									}}
									className='text-gray-500 hover:text-green-500 transition'
									title='Редагувати квест'
								>
									⚙️
								</button>
							</div>

							<p
								className='mb-1 text-gray-700 cursor-pointer hover:underline'
								onClick={() => {
									setEditingId(q.id)
									setTempDescription(q.description || '')
								}}
							>
								{q.description || '— Немає опису —'}
							</p>

							<p
								className={clsx(
									'text-sm font-medium',
									isPast(new Date(q.deadline))
										? 'text-red-600'
										: isToday(new Date(q.deadline))
										? 'text-orange-500'
										: 'text-gray-600'
								)}
							>
								Дедлайн: {new Date(q.deadline).toLocaleDateString()} ({getDeadlineStatus(new Date(q.deadline))})
							</p>

							<p className='text-sm text-gray-700'>
								<span className='font-medium'>Складність:</span> {q.difficulty}
							</p>
						</div>
					))}
				</div>
			)}

			<RoomSettingsDialog
				isOpen={isSettingsOpen}
				onClose={() => setIsSettingsOpen(false)}
				roomId={room?.id}
				currentName={room?.name}
			/>

			{selectedQuest && (
				<QuestSettingsDialog
					isOpen={isQuestSettingsOpen}
					onClose={() => setIsQuestSettingsOpen(false)}
					questId={selectedQuest.id}
					currentTitle={selectedQuest.title}
					currentDescription={selectedQuest.description}
					currentDeadline={selectedQuest.deadline}
					currentDifficulty={selectedQuest.difficulty}
					refetch={() => refetch()}
				/>
			)}
		</div>
	)
}
