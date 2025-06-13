'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { GoX } from 'react-icons/go'

import {
	CreateGoalInput,
	useCreateGoalMutation
} from '@/graphql/generated/output'

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTrigger
} from '@/shared/ui-kit/ui/alert-dialog'
import { Button } from '@/shared/ui-kit/ui/button'
import { Card, CardContent, CardHeader } from '@/shared/ui-kit/ui/card'
import { Input } from '@/shared/ui-kit/ui/input'
import { Label } from '@/shared/ui-kit/ui/label'

type Props = {
	onRefreshGoal: () => void
}

export const CreateGoalForm = ({ onRefreshGoal }: Props) => {
	const [isOpen, setIsOpen] = useState(false)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<CreateGoalInput>()

	const [createGoal, { loading, error }] = useCreateGoalMutation()

	const onSubmit: SubmitHandler<CreateGoalInput> = async values => {
		values.starReward = Number(values.starReward)
		const toastId = toast.loading('Створення цілі...')

		try {
			const { data } = await createGoal({ variables: { data: values } })

			if (data?.createGoal) {
				toast.success(
					`🎯 Ціль "${data.createGoal.title}" створено успішно`,
					{ id: toastId }
				)
				onRefreshGoal()
				reset()
				setIsOpen(false)
			} else {
				toast.error('❌ Не вдалося створити ціль', { id: toastId })
			}
		} catch (err) {
			console.error('Create goal error:', err)
			toast.error('❌ Сталася помилка при створенні цілі', {
				id: toastId
			})
		}
	}

	return (
		<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialogTrigger asChild>
				<Button className='rounded-full bg-gradient-to-r from-green-200 to-lime-300 px-4 py-2 font-semibold text-green-900 shadow transition hover:from-green-300 hover:to-lime-400'>
					+ Створити ціль
				</Button>
			</AlertDialogTrigger>

			<AlertDialogContent className='animate-fadeInScale fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border bg-white p-0 shadow-2xl'>
				{/* Верхній блок з заголовком */}
				<div className='flex items-center justify-between border-b bg-gradient-to-r from-green-100 via-lime-50 to-white px-6 py-4'>
					<h3 className='text-lg font-semibold text-gray-800'>
						🎯 Нова ціль
					</h3>
					<AlertDialogCancel
						className='bg-gray-250 absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full text-gray-800 shadow-sm transition hover:bg-gray-400 hover:text-black focus-visible:ring-2 focus-visible:ring-green-400'
						aria-label='Закрити'
					>
						<GoX size={18} />
					</AlertDialogCancel>
				</div>

				{/* Контент форми */}
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='space-y-5 px-6 py-6'
				>
					<div className='grid gap-1'>
						<Label
							htmlFor='title'
							className='text-sm text-gray-700'
						>
							Назва
						</Label>
						<Input
							id='title'
							placeholder='Наприклад: Завершити проєкт'
							{...register('title', {
								required: 'Введіть назву'
							})}
							className='rounded-md border-gray-300 focus:border-green-500 focus:ring-green-100'
						/>
						{errors.title && (
							<p className='text-xs text-red-500'>
								{errors.title.message}
							</p>
						)}
					</div>

					<div className='grid gap-1'>
						<Label
							htmlFor='description'
							className='text-sm text-gray-700'
						>
							Опис (необовʼязково)
						</Label>
						<Input
							id='description'
							placeholder='Короткий опис або кроки'
							{...register('description')}
							className='rounded-md border-gray-300 focus:border-green-500 focus:ring-green-100'
						/>
					</div>

					<div className='grid gap-1'>
						<Label
							htmlFor='starReward'
							className='text-sm text-gray-700'
						>
							Вартість у зірках
						</Label>
						<Input
							id='starReward'
							type='number'
							min={1}
							placeholder='Наприклад: 10'
							{...register('starReward', {
								required: 'Вкажіть винагороду',
								min: { value: 1, message: 'Мінімум 1 зірка' }
							})}
							className='rounded-md border-gray-300 focus:border-green-500 focus:ring-green-100'
						/>
						{errors.starReward && (
							<p className='text-xs text-red-500'>
								{errors.starReward.message}
							</p>
						)}
					</div>

					<Button
						type='submit'
						disabled={loading}
						className='w-full rounded-md bg-gradient-to-r from-green-400 to-lime-400 font-semibold text-white transition hover:from-green-500 hover:to-lime-500'
					>
						{loading ? 'Створення…' : 'Створити'}
					</Button>

					{error && (
						<p className='mt-2 text-center text-sm text-red-500'>
							{error.message}
						</p>
					)}
				</form>
			</AlertDialogContent>
		</AlertDialog>
	)
}
