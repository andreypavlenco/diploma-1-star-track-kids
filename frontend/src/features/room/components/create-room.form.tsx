'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GoX } from 'react-icons/go'

import { CreateRoomInput } from '@/graphql/generated/output'
import { useCreateRoom } from '../hook'

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
	CardContent,
	CardHeader,
	CardTitle
} from '@/shared/ui-kit/ui/card'
import { Input } from '@/shared/ui-kit/ui/input'
import { Label } from '@/shared/ui-kit/ui/label'

type Props = {
	onRefreshRoom: () => void
}

export const CreateRoomForm = ({ onRefreshRoom }: Props) => {
	const router = useRouter()
	const [isOpen, setIsOpen] = useState(false)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<CreateRoomInput>()

	const { createRoom, loading, error, reset: resetMutation } = useCreateRoom()

	const onSubmit: SubmitHandler<CreateRoomInput> = async values => {
		try {
			const { data } = await createRoom({
				variables: { data: { name: values.name } }
			})

			if (data?.createRoom.name) {
				onRefreshRoom()
				reset()
				setIsOpen(false)
			}
		} catch (e) {
			console.error((e as Error).message)
		}
	}

	return (
		<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialogTrigger asChild>
				<Button
					className='rounded-full border border-green-400 bg-white/80 px-4 py-2 text-sm font-semibold text-green-700 shadow-sm hover:bg-green-100 hover:shadow-md transition duration-200'
				>
					+ Створити кімнату
				</Button>
			</AlertDialogTrigger>

			<AlertDialogContent className='fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 animate-fadeInScale rounded-xl border bg-gradient-to-br from-white via-lime-50 to-green-50 p-6 shadow-xl'>
				<AlertDialogHeader className='flex justify-end'>
					<AlertDialogCancel asChild>
						<button className='absolute top-4 right-4 z-10 rounded-full border-2 border-green-300 bg-white/80 text-green-700 hover:bg-green-100 hover:shadow-lg transition'>
							<GoX size={18} />
						</button>
					</AlertDialogCancel>
				</AlertDialogHeader>

				<AlertDialogDescription asChild>
					<Card className='bg-white/90 backdrop-blur-md rounded-lg shadow-inner'>
						<CardContent className='p-6'>
							<form
								className='space-y-6'
								onSubmit={handleSubmit(onSubmit)}
								noValidate
							>
								<div className='grid gap-2'>
									<Label htmlFor='name'>Назва кімнати</Label>
									<Input
										id='name'
										placeholder='Навчальна група…'
										className='rounded-lg border border-gray-300 focus:ring-green-300'
										{...register('name', {
											required: 'Назва обовʼязкова',
											minLength: {
												value: 2,
												message: 'Мінімум 2 символи'
											}
										})}
									/>
									{errors.name && (
										<p className='text-red-500 text-sm'>
											{errors.name.message}
										</p>
									)}
								</div>

								<Button
									type='submit'
									disabled={loading}
									className='w-full rounded-full bg-gradient-to-r from-green-400 to-lime-400 text-white font-semibold hover:from-green-500 hover:to-lime-500 transition-all duration-200 shadow-sm'
								>
									{loading ? 'Створення…' : 'Створити'}
								</Button>

								{error && (
									<p className='text-sm text-red-500'>
										{error.message}
									</p>
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
