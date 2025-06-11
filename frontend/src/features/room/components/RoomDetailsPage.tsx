'use client'

import { useState } from 'react'

import { useFindRoomByIdQuery } from '@/graphql/generated/output'

import RoomSettingsDialog from './RoomSettingsDialog'
import QuestSettingsDialog from '@/features/quest/components/ QuestSettingsDialog'
import { CreateQuestForm } from '@/features/quest/components/create-quest.form'
import Error from '@/shared/components/error/Error'
import { Loading } from '@/shared/components/loading/Loading'
import { Button } from '@/shared/ui-kit/ui/button'

type RoomDetailsPageProps = {
	roomId: string
}

export default function RoomDetailsPage({ roomId }: RoomDetailsPageProps) {
	const [isSettingsOpen, setIsSettingsOpen] = useState(false)
	const [selectedQuest, setSelectedQuest] = useState<any | null>(null)
	const [isQuestSettingsOpen, setIsQuestSettingsOpen] = useState(false)

	const { data, loading, error, refetch } = useFindRoomByIdQuery({
		variables: { roomId },
		fetchPolicy: 'network-only'
	})

	if (loading) return <Loading />
	if (error) return <Error error={error} />

	const room = data?.findRoomById

	return (
		<div className='mx-auto max-w-4xl p-6'>
			<div className='mb-6 rounded-lg bg-white p-6 shadow-md'>
				<div className='flex items-center justify-between'>
					<h1 className='text-3xl font-bold'>
						Room: {room?.name ?? 'Unknown'}
					</h1>
					<div className='flex items-center gap-2'>
						<CreateQuestForm
							roomId={room?.id}
							onRefreshQuest={() => refetch()}
						/>
						<Button
							variant='ghost'
							size='icon'
							onClick={() => setIsSettingsOpen(true)}
							className='text-gray-600 transition hover:text-gray-800'
							title='Room Settings'
						>
							⚙️
						</Button>
					</div>
				</div>
				<p className='mt-2 text-gray-600'>
					Total Quests:{' '}
					<span className='font-semibold'>
						{room?.quests?.length ?? 0}
					</span>
				</p>
				<RoomSettingsDialog
					isOpen={isSettingsOpen}
					onClose={() => setIsSettingsOpen(false)}
					roomId={room?.id}
					currentName={room?.name}
				/>
			</div>

			{room?.quests?.length === 0 ? (
				<p className='text-center text-gray-500'>
					No quests available for this room.
				</p>
			) : (
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
					{room?.quests?.map(q => (
						<div
							key={q.id}
							className='rounded-lg border border-gray-200 bg-white p-4 shadow transition hover:shadow-lg'
						>
							<div className='mb-2 flex items-center justify-between'>
								<h3 className='text-lg font-semibold'>
									{q.title}
								</h3>
								<button
									onClick={() => {
										setSelectedQuest(q)
										setIsQuestSettingsOpen(true)
									}}
									className='hover:text-primary-500 text-gray-500 transition'
									title='Quest Settings'
								>
									⚙️
								</button>
							</div>
							<p className='mb-1 text-gray-700'>
								{q.description ?? 'No description'}
							</p>
							<p className='text-sm text-gray-500'>
								Deadline:{' '}
								{new Date(q.deadline).toLocaleDateString()}
							</p>
							<p className='text-sm text-gray-500'>
								Difficulty: {q.difficulty}
							</p>
						</div>
					))}
				</div>
			)}

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
