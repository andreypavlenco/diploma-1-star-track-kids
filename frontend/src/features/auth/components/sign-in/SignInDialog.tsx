'use client'

import { useApolloClient } from '@apollo/client'
import { LogIn } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GoX } from 'react-icons/go'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

import { LoginInput } from '@/graphql/generated/output'
import { useSingIn } from '../../hook'

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogTrigger
} from '@/shared/ui-kit/ui/alert-dialog'
import { Button } from '@/shared/ui-kit/ui/button'
import { Input } from '@/shared/ui-kit/ui/input'
import { Label } from '@/shared/ui-kit/ui/label'

export default function SignInDialog() {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginInput>()

	const { loginUser, data, loading, error } = useSingIn()
	const client = useApolloClient()

	const onSubmit: SubmitHandler<LoginInput> = async values => {
		try {
			const result = await loginUser({ variables: { data: values } })
			if (result.data?.loginUser) {
				await client.refetchQueries({ include: ['FindProfile'] })
				// редирект виконується в useEffect
			}
		} catch (err) {
			toast.error('Помилка під час входу')
			console.error(err)
		}
	}

const handlePendingInvitation = () => {
  const pendingToken = localStorage.getItem('pendingInvitationToken')
  if (pendingToken) {
    localStorage.removeItem('pendingInvitationToken')
    toast.success('Запрошення знайдено — приєднуємось...')
    router.replace(`/invitation/accept?token=${pendingToken}`)
  } else {
    router.replace('/')
  }
}

useEffect(() => {
  if (data?.loginUser) {
    handlePendingInvitation()
  }
}, [data?.loginUser])

	return (
		<AlertDialog
			defaultOpen
			onOpenChange={open => {
				if (!open) router.back()
			}}
		>
			<AlertDialogTrigger asChild />

			<AlertDialogContent className='animate-fadeInScale max-w-md rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-green-50 to-lime-50 p-0 shadow-2xl'>
				<div className='relative flex items-center justify-between rounded-t-2xl border-b bg-gradient-to-r from-green-100 via-lime-50 to-white px-6 py-4'>
					<div className='flex items-center gap-2'>
						<LogIn className='text-green-700' />
						<h2 className='text-xl font-bold text-green-800'>Вхід у систему</h2>
					</div>
					<AlertDialogCancel
						className='bg-gray-250 absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full text-gray-800 shadow-sm transition hover:bg-gray-400 hover:text-black focus-visible:ring-2 focus-visible:ring-green-400'
						aria-label='Закрити'
					>
						<GoX size={18} />
					</AlertDialogCancel>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col gap-6 px-6 py-8'
				>
					<div className='grid gap-2'>
						<Label htmlFor='email'>Email</Label>
						<Input
							id='email'
							type='email'
							placeholder='you@example.com'
							{...register('email', { required: 'Обовʼязкове поле' })}
						/>
						{errors.email && (
							<p className='text-sm text-red-500'>{errors.email.message}</p>
						)}
					</div>

					<div className='grid gap-2'>
						<Label htmlFor='password'>Пароль</Label>
						<Input
							id='password'
							type='password'
							{...register('password', { required: 'Обовʼязкове поле' })}
						/>
						{errors.password && (
							<p className='text-sm text-red-500'>{errors.password.message}</p>
						)}
					</div>

					{error && (
						<p className='text-sm text-red-500'>{error.message}</p>
					)}

					<Button
						type='submit'
						disabled={loading}
						className='w-full rounded-full bg-gradient-to-r from-green-500 to-lime-500 py-2 font-semibold text-white shadow-lg hover:from-green-600 hover:to-lime-600'
					>
						{loading ? 'Вхід...' : 'Увійти'}
					</Button>
				</form>

				<AlertDialogFooter />
			</AlertDialogContent>
		</AlertDialog>
	)
}
