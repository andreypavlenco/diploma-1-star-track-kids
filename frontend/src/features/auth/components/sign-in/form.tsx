'use client'

import { useApolloClient } from '@apollo/client'
import { LogIn } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import { LoginInput } from '@/graphql/generated/output'

import { useSingIn } from '../../hook'

import { Button } from '@/shared/ui-kit/ui/button'
import { Card, CardContent } from '@/shared/ui-kit/ui/card'
import { Input } from '@/shared/ui-kit/ui/input'
import { Label } from '@/shared/ui-kit/ui/label'

export const SignInForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginInput>()

	const { loginUser, data, loading, error } = useSingIn()
	const client = useApolloClient()

	const onSubmit: SubmitHandler<LoginInput> = async values => {
		const { data } = await loginUser({ variables: { data: values } })

		if (data?.loginUser) {
			await client.refetchQueries({ include: ['FindProfile'] })
			window.location.href = '/'
		}
	}

	return (
		<Card className='animate-fadeInScale rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-green-50 to-lime-50 shadow-2xl'>
			<CardContent className='space-y-8 p-8'>
				<div className='mb-4 flex items-center gap-2'>
					<LogIn className='text-green-700' />
					<h2 className='text-2xl font-bold text-green-700'>
						Вхід у систему
					</h2>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col gap-6'
				>
					<div className='grid gap-2'>
						<Label htmlFor='email'>Email</Label>
						<Input
							id='email'
							type='email'
							placeholder='you@example.com'
							{...register('email', {
								required: 'Обовʼязкове поле'
							})}
						/>
						{errors.email && (
							<p className='text-sm text-red-500'>
								{errors.email.message}
							</p>
						)}
					</div>

					<div className='grid gap-2'>
						<Label htmlFor='password'>Пароль</Label>
						<Input
							id='password'
							type='password'
							{...register('password', {
								required: 'Обовʼязкове поле'
							})}
						/>
						{errors.password && (
							<p className='text-sm text-red-500'>
								{errors.password.message}
							</p>
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

					{data?.loginUser && (
						<p className='text-center text-green-600'>
							Ви увійшли як {data.loginUser.email}
						</p>
					)}
				</form>
			</CardContent>
		</Card>
	)
}
