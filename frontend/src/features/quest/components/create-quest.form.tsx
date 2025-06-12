'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GoX } from 'react-icons/go'
import { CalendarClock } from 'lucide-react'

import { CreateQuestInput } from '@/graphql/generated/output'
import { useCreateQuest } from '../hook'

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
import {
	Card,
	CardContent
} from '@/shared/ui-kit/ui/card'
import { Input } from '@/shared/ui-kit/ui/input'
import { Label } from '@/shared/ui-kit/ui/label'

type Props = {
	roomId: string
	onRefreshQuest: () => void
}

export const CreateQuestForm = ({ roomId, onRefreshQuest }: Props) => {
	const [isOpen, setIsOpen] = useState(false)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<CreateQuestInput>()

	const {
		createQuest,
		loading,
		error,
		reset: resetMutation
	} = useCreateQuest()

	const onSubmit: SubmitHandler<CreateQuestInput> = async values => {
		try {
			const { data } = await createQuest({
				variables: {
					roomId,
					data: {
						...values,
						difficulty: Number(values.difficulty)
					}
				}
			})

			if (data?.createQuest) {
				onRefreshQuest()
				reset()
				resetMutation()
				setIsOpen(false)
			}
		} catch (e) {
			console.error((e as Error).message)
		}
	}

	return (
		<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialogTrigger asChild>
				<Button className='rounded-full border border-green-500 bg-gradient-to-r from-green-100 to-lime-100 text-green-800 hover:from-green-200 hover:to-lime-200 px-4 py-2 font-semibold shadow-sm transition'>
					+ Створити квест
				</Button>
			</AlertDialogTrigger>

			<AlertDialogContent className='fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 animate-fadeInScale rounded-xl border bg-gradient-to-br from-white via-lime-50 to-green-50 p-6 shadow-xl'>
			<AlertDialogHeader className='flex justify-end к top-1 right-2'>
		<AlertDialogCancel asChild>
		<button className='absolute top-4 right-4 z-10 rounded-full border-2 border-green-300 bg-white/80 text-green-700 hover:bg-green-100 hover:shadow-lg transition'>
			<GoX size={18} />
		</button>
	</AlertDialogCancel>
</AlertDialogHeader>
				<AlertDialogDescription asChild>
					<Card className='bg-white/90 backdrop-blur-sm rounded-lg shadow-inner'>
						<CardContent className='p-5 space-y-5'>
							<form onSubmit={handleSubmit(onSubmit)} noValidate className='space-y-10'>

								<div className='grid gap-2'>
									<Label htmlFor='title'>Назва квесту</Label>
									<Input
										id='title'
										placeholder='Наприклад: Прибрати кімнату'
										className='rounded-md border-gray-300 focus:ring-green-400'
										{...register('title', {
											required: 'Обовʼязкове поле',
											minLength: { value: 2, message: 'Мінімум 2 символи' }
										})}
									/>
									{errors.title && (
										<p className='text-red-500 text-sm'>{errors.title.message}</p>
									)}
								</div>

								<div className='grid gap-2'>
									<Label htmlFor='description'>Опис</Label>
									<Input
										id='description'
										placeholder='Опиши завдання...'
										className='rounded-md'
										{...register('description')}
									/>
								</div>

								<div className='grid gap-2'>
									<Label htmlFor='deadline'>Дедлайн (дата та час)</Label>
									<div className='flex items-center gap-2'>
										<CalendarClock className='text-green-500' size={18} />
										<Input
											id='deadline'
											type='datetime-local'
											className='rounded-md'
											{...register('deadline', {
												required: 'Оберіть дедлайн'
											})}
										/>
									</div>
									{errors.deadline && (
										<p className='text-red-500 text-sm'>{errors.deadline.message}</p>
									)}
								</div>

								<div className='grid gap-2'>
									<Label htmlFor='difficulty'>Складність (1–5)</Label>
									<Input
										id='difficulty'
										type='number'
										min={1}
										max={5}
										className='rounded-md'
										{...register('difficulty', {
											required: 'Вкажіть складність',
											min: 1,
											max: 5
										})}
									/>
									{errors.difficulty && (
										<p className='text-red-500 text-sm'>{errors.difficulty.message}</p>
									)}
								</div>

								<Button
									type='submit'
									disabled={loading}
									className='w-full rounded-full bg-gradient-to-r from-green-400 to-lime-400 text-white font-semibold hover:from-green-500 hover:to-lime-500 shadow-md transition'
								>
									{loading ? 'Створення…' : 'Створити'}
								</Button>

								{error && (
									<p className='text-sm text-red-500'>{error.message}</p>
								)}
							</form>
						</CardContent>
					</Card>
				</AlertDialogDescription>

				<AlertDialogFooter />
			</AlertDialogContent>
		</AlertDialog>
	)
}
