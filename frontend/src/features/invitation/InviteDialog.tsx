'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogCancel,
} from '@/shared/ui-kit/ui/alert-dialog'
import { Button } from '@/shared/ui-kit/ui/button'
import { Input } from '@/shared/ui-kit/ui/input'
import { Label } from '@/shared/ui-kit/ui/label'
import { useCreateInvitationMutation } from '@/graphql/generated/output'
import { Users } from 'lucide-react'

type FormValues = {
	email: string
	role: 'CHILD' | 'PARENT'
}

interface InviteAlertDialogProps {
	roomId: string
}

export function InviteAlertDialog({ roomId }: InviteAlertDialogProps) {
	const [open, setOpen] = useState(false)
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting }
	} = useForm<FormValues>()
	const [createInvitation] = useCreateInvitationMutation()

	const onSubmit = async (values: FormValues) => {
		try {
			await createInvitation({
				variables: {
					roomId,
					data: {
						email: values.email,
						role: values.role,
					},
				},
			})
			reset()
			setOpen(false)
			alert('✅ Запрошення успішно надіслано!')
		} catch (err) {
			console.error(err)
			alert('❌ Сталася помилка при надсиланні запрошення.')
		}
	}

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<Button className='rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 px-4 py-2 text-white shadow-md hover:from-blue-500 hover:to-cyan-500 transition-all'>
					<Users className='mr-2 h-4 w-4' />
					Запросити користувача
				</Button>
			</AlertDialogTrigger>

			<AlertDialogContent className='animate-fadeInScale rounded-xl border bg-gradient-to-br from-white via-blue-50 to-cyan-50 p-6 shadow-xl max-w-md transition-all'>
				<AlertDialogHeader className='text-2xl font-semibold text-blue-800 mb-4'>
					Запрошення користувача
				</AlertDialogHeader>

				<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
					<div>
						<Label htmlFor='email' className='text-blue-900 '>Email</Label>
						<Input
							id='email'
							type='email'
							placeholder='example@email.com'
							className='rounded-md focus:ring-cyan-500 mt-2 text-sm'
							{...register('email', { required: 'Email обов’язковий' })}
						/>
						{errors.email && (
							<p className='text-sm text-red-500 mt-1'>{errors.email.message}</p>
						)}
					</div>

					<div>
						<Label htmlFor='role' className='text-blue-900'>Роль</Label>
						<select
  className='w-full rounded-md border mt-3 border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-cyan-400'
  {...register('role')}
>
  <option className='text-cyan-700'>Дитина</option>
  <option className='text-lime-700 '>Батько/Мати</option>
</select>
					</div>

					<AlertDialogFooter className='flex justify-end gap-4 pt-4'>
						<AlertDialogCancel asChild>
							<Button variant='ghost' className='border text-gray-600 hover:bg-gray-100'>
								Скасувати
							</Button>
						</AlertDialogCancel>

						<Button
							type='submit'
							disabled={isSubmitting}
							className='rounded-full bg-gradient-to-r from-green-400 to-lime-400 px-6 py-2 font-semibold text-white shadow-md hover:from-green-500 hover:to-lime-500 transition-all'
						>
							{isSubmitting ? 'Надсилання...' : 'Надіслати'}
						</Button>
					</AlertDialogFooter>
				</form>
			</AlertDialogContent>
		</AlertDialog>
	)
}
