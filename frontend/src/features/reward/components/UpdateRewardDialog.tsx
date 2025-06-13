'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import { GoX } from 'react-icons/go'

import {
	useDeleteRewardMutation,
	useUpdateRewardMutation
} from '@/graphql/generated/output'

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle
} from '@/shared/ui-kit/ui/alert-dialog'
import { Button } from '@/shared/ui-kit/ui/button'
import { Input } from '@/shared/ui-kit/ui/input'
import { Label } from '@/shared/ui-kit/ui/label'

type Props = {
	isOpen: boolean
	onClose: () => void
	rewardId: string
	currentTitle: string
	currentDescription?: string | null
	currentStarCost: number
	onUpdated: () => void
}

export default function UpdateRewardDialog({
	isOpen,
	onClose,
	rewardId,
	currentTitle,
	currentDescription,
	currentStarCost,
	onUpdated
}: Props) {
	const [title, setTitle] = useState(currentTitle)
	const [description, setDescription] = useState(currentDescription ?? '')
	const [starCost, setStarCost] = useState(currentStarCost)

	const [updateReward, { loading: updating }] = useUpdateRewardMutation()
	const [deleteReward, { loading: deleting }] = useDeleteRewardMutation()
  
	const handleUpdate = async () => {
		const toastId = toast.loading('Оновлення нагороди...')
		try {
			await updateReward({
				variables: {
					rewardId,
					data: { title, description, starCost }
				}
			})
			toast.success('Нагороду оновлено!', { id: toastId })
			onUpdated()
			onClose()
		} catch (err) {
			toast.error(' Помилка при оновленні нагороди', { id: toastId })
			console.error((err as Error).message)
		}
	}



	const handleDelete = async () => {
		if (!confirm('Ви впевнені, що хочете видалити цю нагороду?')) return
		const toastId = toast.loading('Видалення нагороди...')

		try {
			await deleteReward({ variables: { rewardId } })
			toast.success('Нагороду видалено', { id: toastId })
			onUpdated()
			onClose()
		} catch (err) {
			toast.error(' Помилка при видаленні нагороди', { id: toastId })
			console.error('Delete error:', err)
		}
	}

	return (
		<AlertDialog open={isOpen} onOpenChange={open => !open && onClose()}>
			<AlertDialogContent className='animate-fadeInScale fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border bg-gradient-to-br from-white via-green-50 to-lime-50 p-0 shadow-2xl'>
				{/* Градієнтний заголовок */}
				<div className='flex items-center justify-between border-b bg-gradient-to-r from-green-200 via-lime-100 to-white px-6 py-4'>
					<h3 className='text-lg font-bold text-gray-800'>
						🎁 Редагування винагороди
					</h3>
					<AlertDialogCancel
						className='bg-gray-250 absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full text-gray-800 shadow-sm transition hover:bg-gray-400 hover:text-black focus-visible:ring-2 focus-visible:ring-green-400'
						aria-label='Закрити'
					>
						<GoX size={18} />
					</AlertDialogCancel>
				</div>

				{/* Форма */}
				<form
					onSubmit={e => {
						e.preventDefault()
						handleUpdate()
					}}
					className='space-y-5 px-6 py-5'
				>
					<div>
						<Label
							htmlFor='title'
							className='text-sm text-gray-700'
						>
							Назва
						</Label>
						<Input
							id='title'
							value={title}
							onChange={e => setTitle(e.target.value)}
							className='mt-1 rounded-md border-gray-300 focus:border-green-500 focus:ring-green-100'
						/>
					</div>

					<div>
						<Label
							htmlFor='description'
							className='text-sm text-gray-700'
						>
							Опис (необовʼязково)
						</Label>
						<Input
							id='description'
							value={description}
							onChange={e => setDescription(e.target.value)}
							className='mt-1 rounded-md border-gray-300 focus:border-green-500 focus:ring-green-100'
						/>
					</div>

					<div>
						<Label
							htmlFor='starCost'
							className='text-sm text-gray-700'
						>
							Вартість у зірках
						</Label>
						<Input
							id='starCost'
							type='number'
							min={1}
							value={starCost}
							onChange={e => setStarCost(Number(e.target.value))}
							className='mt-1 rounded-md border-gray-300 focus:border-green-500 focus:ring-green-100'
						/>
					</div>

					<div className='flex flex-col gap-3 pt-4'>
						<Button
							type='submit'
							disabled={updating}
							className='w-full rounded-full bg-gradient-to-r from-green-400 to-lime-400 font-semibold text-white shadow transition hover:from-green-500 hover:to-lime-500'
						>
							{updating ? 'Збереження…' : '💾 Зберегти зміни'}
						</Button>
						<Button
							onClick={handleDelete}
							variant='destructive'
							className='w-full bg-red-500 font-semibold text-white shadow transition hover:bg-red-600 disabled:opacity-50'
							disabled={deleting}
						>
							{deleting ? 'Видалення…' : '🗑️ Видалити нагороду'}
						</Button>
						<AlertDialogFooter className='pt-2'>
							<AlertDialogCancel asChild>
								<Button
									variant='outline'
									onClick={onClose}
									className='w-full'
								>
									Скасувати
								</Button>
							</AlertDialogCancel>
						</AlertDialogFooter>
					</div>
				</form>
			</AlertDialogContent>
		</AlertDialog>
	)
}
