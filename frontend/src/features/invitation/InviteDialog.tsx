'use client'

import { Users } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import {
	UserRole,
	useCreateInvitationMutation
} from '@/graphql/generated/output'

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTrigger
} from '@/shared/ui-kit/ui/alert-dialog'
import { Button } from '@/shared/ui-kit/ui/button'
import { Input } from '@/shared/ui-kit/ui/input'
import { Label } from '@/shared/ui-kit/ui/label'
import { GoX } from 'react-icons/go'

type FormValues = {
	email: string
	role: UserRole
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
		const toastId = toast.loading('Надсилання запрошення...')

		try {
			await createInvitation({
				variables: {
					roomId,
					data: {
						email: values.email,
						role: values.role
					}
				}
			})

			toast.success('Запрошення успішно надіслано!', { id: toastId })
			reset()
			setOpen(false)
		} catch (err) {
			console.error(err)
			toast.error(' Сталася помилка при надсиланні запрошення.', {
				id: toastId
			})
		}
	}

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
<Button

  className="flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2 text-emerald-800 font-medium shadow-sm transition hover:bg-emerald-200 hover:shadow-md active:scale-[0.98]"
>
  <Users className="h-4 w-4 text-emerald-600" />
  Запросити користувача
</Button>


			</AlertDialogTrigger>

			<AlertDialogContent className='animate-fadeInScale max-w-md rounded-xl border bg-gradient-to-br from-white via-blue-50 to-cyan-50 p-6 shadow-xl transition-all'>
				<AlertDialogHeader className="relative -mx-6 -mt-6 mb-6 rounded-t-xl bg-gradient-to-r from-blue-100 via-cyan-50 to-white px-6 py-5 shadow-inner">
  <h3 className="text-center text-xl font-bold text-blue-800 flex items-center justify-center gap-2">
    <span className="text-2xl">👥</span> Запрошення користувача
  </h3>
  <AlertDialogCancel
    className="absolute right-4 top-4 rounded-full p-1.5 text-gray-600 hover:bg-gray-200 hover:text-black focus-visible:ring-2 focus-visible:ring-cyan-400"
    aria-label="Закрити"
  >
    <GoX size={18} />
  </AlertDialogCancel>
</AlertDialogHeader>

				<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
					<div>
						<Label htmlFor='email' className='text-blue-900'>
							Email
						</Label>
						<Input
							id='email'
							type='email'
							placeholder='example@email.com'
							className='mt-2 rounded-md text-sm focus:ring-cyan-500'
							{...register('email', {
								required: 'Email обов’язковий'
							})}
						/>
						{errors.email && (
							<p className='mt-1 text-sm text-red-500'>
								{errors.email.message}
							</p>
						)}
					</div>

					<div>
						<Label htmlFor='role' className='text-blue-900'>
							Роль
						</Label>
						<select
  className='mt-2 w-full rounded-full border border-cyan-300 bg-white px-4 py-2 text-gray-800 shadow-sm transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-300 focus:outline-none'
  {...register('role')}
>
  <option value={UserRole.Child}>👦 Дитина</option>
  <option value={UserRole.Parent}>👨‍👩‍👧‍👦 Батько/Мати</option>
</select>
					</div>

					<AlertDialogFooter className='flex justify-end gap-4 pt-4'>
						<AlertDialogCancel asChild>
							<Button
								variant='ghost'
								className='border text-gray-600 hover:bg-gray-100'
							>
								Скасувати
							</Button>
						</AlertDialogCancel>

						<Button
  type='submit'
  disabled={isSubmitting}
  className='rounded-full bg-gradient-to-r from-green-400 to-lime-400 px-6 py-2 font-semibold text-white shadow-md transition-all hover:from-green-500 hover:to-lime-500'
>
  {isSubmitting ? 'Надсилання…' : 'Надіслати'}
</Button>
					</AlertDialogFooter>
				</form>
			</AlertDialogContent>
		</AlertDialog>
	)
}
