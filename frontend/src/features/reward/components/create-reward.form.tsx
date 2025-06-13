'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { GoX } from 'react-icons/go'

import {
	CreateRewardInput,
	useCreateRewardMutation
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

type CreateRewardFormProps = {
	onRefreshReward: () => void
}

export function CreateRewardForm({ onRefreshReward }: CreateRewardFormProps) {
	const [isOpen, setIsOpen] = useState(false)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<CreateRewardInput>()

	const [createReward, { loading, error }] = useCreateRewardMutation()

	const onSubmit: SubmitHandler<CreateRewardInput> = async values => {
		const toastId = toast.loading('Створення нагороди...')

		try {
			const { data } = await createReward({
				variables: {
					data: {
						title: values.title,
						description: values.description ?? '',
						starCost: Number(values.starCost)
					}
				}
			})

			if (data?.createReward) {
				toast.success(
					`🎁 Нагороду "${data.createReward.title}" створено!`,
					{ id: toastId }
				)
				onRefreshReward()
				reset()
				setIsOpen(false)
			} else {
				toast.error('Не вдалося створити нагороду', { id: toastId })
			}
		} catch (err) {
			const message =
				(err as Error).message ||
				'Сталася помилка при створенні нагороди'
			toast.error(`${message}`, { id: toastId })
			console.error(message)
		}
	}

	return (
		<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialogTrigger asChild>
				<Button className='relative flex w-full items-center justify-center rounded-full border border-green-400 bg-gradient-to-r from-green-200 to-lime-200 px-4 py-2 text-sm font-semibold whitespace-nowrap text-green-800 shadow-sm transition hover:from-green-300 hover:to-lime-300 sm:w-auto sm:text-base'>
					+ Створити винагороду
				</Button>
			</AlertDialogTrigger>

			<AlertDialogContent className='animate-fadeInScale fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border bg-white p-6 shadow-2xl'>
				<AlertDialogHeader className="relative rounded-t-2xl bg-gradient-to-r from-rose-50 via-green-50 to-white px-6 py-5 shadow-inner">
  <h2 className="text-xl font-extrabold text-green-700 text-center flex items-center justify-center gap-3 tracking-tight drop-shadow-sm">
    <span className="text-2xl md:text-3xl animate-bounce-slow">🎁</span>
    Нова винагорода
  </h2>
  <AlertDialogCancel
    className="absolute right-4 top-4 rounded-full p-1.5 text-gray-600 hover:bg-gray-200 hover:text-black focus-visible:ring-2 focus-visible:ring-green-400"
    aria-label="Закрити"
  >
    <GoX size={18} />
  </AlertDialogCancel>
</AlertDialogHeader>
				<AlertDialogDescription asChild>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='space-y-5'
					>
						<div className='grid gap-2'>
							<Label
								htmlFor='title'
								className='text-sm text-gray-700'
							>
								Назва
							</Label>
							<Input
								id='title'
								placeholder='Наприклад: 30 хв гри'
								{...register('title', {
									required: 'Назва обовʼязкова',
									minLength: {
										value: 3,
										message: 'Мінімум 3 символи'
									},
									maxLength: {
										value: 100,
										message: 'Максимум 100 символів'
									}
								})}
								className='rounded-md border border-gray-300 px-3 py-2 transition focus:border-green-400 focus:ring-2 focus:ring-green-100'
							/>
							{errors.title && (
								<p className='text-sm text-red-500'>
									{errors.title.message}
								</p>
							)}
						</div>

						<div className='grid gap-2'>
							<Label
								htmlFor='description'
								className='text-sm text-gray-700'
							>
								Опис{' '}
								<span className='text-gray-400'>
									(необовʼязково)
								</span>
							</Label>
							<Input
								id='description'
								placeholder='Що саме отримає користувач'
								{...register('description', {
									maxLength: {
										value: 500,
										message: 'Максимум 500 символів'
									}
								})}
								className='rounded-md border border-gray-300 px-3 py-2 transition focus:border-green-400 focus:ring-2 focus:ring-green-100'
							/>
							{errors.description && (
								<p className='text-sm text-red-500'>
									{errors.description.message}
								</p>
							)}
						</div>

						<div className='grid gap-2'>
							<Label
								htmlFor='starCost'
								className='text-sm text-gray-700'
							>
								Вартість у зірках
							</Label>
							<Input
								id='starCost'
								type='number'
								placeholder='Наприклад: 10'
								{...register('starCost', {
									required: 'Необхідно вказати вартість',
									min: {
										value: 1,
										message: 'Мінімум 1 зірка'
									},
									max: {
										value: 1000,
										message: 'Максимум 1000 зірок'
									},
									valueAsNumber: true
								})}
								className='rounded-md border border-gray-300 px-3 py-2 transition focus:border-green-400 focus:ring-2 focus:ring-green-100'
							/>
							{errors.starCost && (
								<p className='text-sm text-red-500'>
									{errors.starCost.message}
								</p>
							)}
						</div>

						<Button
							type='submit'
							disabled={loading}
							className='w-full rounded-md bg-green-500 py-2 font-semibold text-white transition hover:bg-green-600'
						>
							{loading ? 'Створення…' : 'Створити'}
						</Button>

						{error && (
							<p className='text-center text-sm text-red-500'>
								{error.message}
							</p>
						)}
					</form>
				</AlertDialogDescription>

				<AlertDialogFooter />
			</AlertDialogContent>
		</AlertDialog>
	)
}
