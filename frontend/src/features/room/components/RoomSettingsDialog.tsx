import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import {
	useDeleteRoomMutation,
	useUpdateRoomMutation
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

type RoomSettingsDialogProps = {
	isOpen: boolean
	onClose: () => void
	roomId: string
	currentName: string
	currentDescription?: string
}

export default function RoomSettingsDialog({
	isOpen,
	onClose,
	roomId,
	currentName
}: RoomSettingsDialogProps) {
	const router = useRouter()
	const [newName, setNewName] = useState(currentName)

	const [renameRoom, { loading: renaming }] = useUpdateRoomMutation()
	const [deleteRoom, { loading: deleting }] = useDeleteRoomMutation()

	const handleRename = async () => {
		try {
			await renameRoom({
				variables: {
					roomId,
					data: { name: newName }
				}
			})
			onClose()
			router.refresh()
		} catch (err) {
			console.error('Rename error:', err)
		}
	}

	const handleDelete = async () => {
		if (confirm('Are you sure you want to delete this room?')) {
			try {
				await deleteRoom({
					variables: { roomId }
				})
				onClose()
				window.location.href = '/room'
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
						Room Settings
					</AlertDialogTitle>
					<AlertDialogDescription className='text-gray-500'>
						Manage your room: rename it, delete it, or manage
						members.
					</AlertDialogDescription>
				</AlertDialogHeader>

				<div className='space-y-5'>
					<div>
						<label className='mb-1 block text-sm font-semibold text-gray-700'>
							Rename Room
						</label>
						<input
							type='text'
							value={newName}
							onChange={e => setNewName(e.target.value)}
							className='focus:ring-primary-400 w-full rounded-md border border-gray-300 px-3 py-2 transition focus:ring-2 focus:outline-none'
							placeholder='Enter new room name'
						/>
						<Button
							onClick={handleRename}
							disabled={renaming}
							className='mt-3 w-full rounded-md bg-green-500 py-2 font-semibold text-white transition hover:bg-green-600'
						>
							{renaming ? 'Renaming...' : 'Save Changes'}
						</Button>
					</div>

					<div>
						<Button
							variant='destructive'
							onClick={handleDelete}
							disabled={deleting}
							className='w-full rounded-md bg-red-500 py-2 font-semibold text-white transition hover:bg-red-600'
						>
							{deleting ? 'Deleting...' : 'Delete Room'}
						</Button>
					</div>

					<div>
						<Button
							variant='outline'
							onClick={() => alert('Feature coming soon!')}
							className='border-primary-300 text-primary-600 hover:bg-primary-50 w-full rounded-md border py-2 font-semibold transition'
						>
							➕ Add Users to Room
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
