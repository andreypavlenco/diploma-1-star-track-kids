'use client'

import { useApolloClient } from '@apollo/client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import {
	useDeleteQuestMutation,
	useUpdateQuestMutation
} from '@/graphql/generated/output'

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/shared/ui-kit/ui/alert-dialog'
import { Button } from '@/shared/ui-kit/ui/button'

type QuestSettingsDialogProps = {
	isOpen: boolean
	onClose: () => void
	questId: string
	currentTitle: string
	currentDescription?: string
	currentDeadline?: string
	currentDifficulty?: number
	refetch: () => void
}

export default function QuestSettingsDialog({
	isOpen,
	onClose,
	questId,
	currentTitle,
	currentDescription,
	currentDeadline,
	currentDifficulty,
	refetch
}: QuestSettingsDialogProps) {
	const router = useRouter()
	const [newTitle, setNewTitle] = useState(currentTitle)
	const [newDescription, setNewDescription] = useState(
		currentDescription ?? ''
	)

	const [newDeadline, setNewDeadline] = useState(
		currentDeadline ? currentDeadline.split('T')[0] : ''
	)
	const [newTime, setNewTime] = useState(
		currentDeadline
			? currentDeadline.split('T')[1]?.substring(0, 5)
			: '00:00'
	)
	const client = useApolloClient()
	const [newDifficulty, setNewDifficulty] = useState(currentDifficulty ?? 1)

	const [renameQuest, { loading: renaming }] = useUpdateQuestMutation()
	const [deleteQuest, { loading: deleting }] = useDeleteQuestMutation()

	function combineDateAndTime(date: string, time: string): string {
		if (!date) return ''
		const [year, month, day] = date.split('-')
		const [hours = '00', minutes = '00'] = time
			? time.split(':')
			: ['00', '00']
		const combinedDate = new Date(
			Number(year),
			Number(month) - 1,
			Number(day),
			Number(hours),
			Number(minutes)
		)
		return combinedDate.toISOString()
	}

	const handleRename = async () => {
		try {
			const isoDeadline = combineDateAndTime(newDeadline, newTime)
			await renameQuest({
				variables: {
					questId,
					data: {
						title: newTitle,
						description: newDescription,
						deadline: isoDeadline,
						difficulty: newDifficulty
					}
				}
			})
			onClose()
			router.refresh()
		} catch (err) {
			console.error('Rename error:', err)
		}
	}

	const handleDelete = async () => {
		if (confirm('Are you sure you want to delete this quest?')) {
			try {
				const { data } = await deleteQuest({ variables: { questId } })
				console.log(data)
				if (data?.deleteQuest) {
					if (data?.deleteQuest) {
						refetch()
						onClose()
						// window.location.href = '/room/';
						return
					}
				}
			} catch (err) {
				console.error('Delete error:', err)
			}
		}
	}

	return (
		<AlertDialog open={isOpen} onOpenChange={open => !open && onClose()}>
			<AlertDialogTrigger asChild>
				<div />
			</AlertDialogTrigger>
			<AlertDialogContent className='max-w-md rounded-lg bg-white p-6 shadow-lg'>
				<AlertDialogHeader className='mb-4'>
					<AlertDialogTitle className='text-2xl font-bold text-gray-800'>
						Quest Settings
					</AlertDialogTitle>
					<AlertDialogDescription className='text-gray-500'>
						Manage this quest: rename it, edit the description,
						deadline, difficulty, or delete it.
					</AlertDialogDescription>
				</AlertDialogHeader>

				<div className='space-y-5'>
					{/* Title */}
					<div>
						<label className='mb-1 block text-sm font-semibold text-gray-700'>
							Title
						</label>
						<input
							type='text'
							value={newTitle}
							onChange={e => setNewTitle(e.target.value)}
							className='focus:ring-primary-400 w-full rounded-md border border-gray-300 px-3 py-2 transition focus:ring-2 focus:outline-none'
							placeholder='Enter new quest title'
						/>
					</div>

					{/* Description */}
					<div>
						<label className='mb-1 block text-sm font-semibold text-gray-700'>
							Description
						</label>
						<textarea
							value={newDescription}
							onChange={e => setNewDescription(e.target.value)}
							className='focus:ring-primary-400 w-full rounded-md border border-gray-300 px-3 py-2 transition focus:ring-2 focus:outline-none'
							placeholder='Enter quest description'
						/>
					</div>

					{/* Deadline */}
					<div>
						<label className='mb-1 block text-sm font-semibold text-gray-700'>
							Deadline
						</label>
						<div className='flex gap-2'>
							<input
								type='date'
								value={newDeadline}
								onChange={e => setNewDeadline(e.target.value)}
								className='focus:ring-primary-400 flex-1 rounded-md border border-gray-300 px-3 py-2 transition focus:ring-2 focus:outline-none'
							/>
							<input
								type='time'
								value={newTime}
								onChange={e => setNewTime(e.target.value)}
								className='focus:ring-primary-400 w-32 rounded-md border border-gray-300 px-3 py-2 transition focus:ring-2 focus:outline-none'
							/>
						</div>
					</div>

					{/* Difficulty */}
					<div>
						<label className='mb-1 block text-sm font-semibold text-gray-700'>
							Difficulty
						</label>
						<input
							type='number'
							min={1}
							max={5}
							value={newDifficulty}
							onChange={e =>
								setNewDifficulty(parseInt(e.target.value, 10))
							}
							className='focus:ring-primary-400 w-full rounded-md border border-gray-300 px-3 py-2 transition focus:ring-2 focus:outline-none'
						/>
					</div>

					{/* Save button */}
					<Button
						onClick={handleRename}
						disabled={renaming}
						className='mt-3 w-full rounded-md bg-green-500 py-2 font-semibold text-white transition hover:bg-green-600'
					>
						{renaming ? 'Saving...' : 'Save Changes'}
					</Button>

					{/* Delete button */}
					<div>
						<Button
							variant='destructive'
							onClick={handleDelete}
							disabled={deleting}
							className='w-full rounded-md bg-red-500 py-2 font-semibold text-white transition hover:bg-red-600'
						>
							Delete Quest
						</Button>
					</div>
				</div>

				<AlertDialogFooter className='mt-6'>
					<AlertDialogCancel asChild>
						<Button
							variant='secondary'
							onClick={onClose}
							className='w-full rounded-md bg-gray-200 py-2 font-semibold text-gray-700 transition hover:bg-gray-300'
						>
							Close
						</Button>
					</AlertDialogCancel>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
