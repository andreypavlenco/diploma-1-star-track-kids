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
	const router = useRouter()
	const onSubmit: SubmitHandler<LoginInput> = async values => {
		try {
			const { data } = await loginUser({
				variables: { data: values }
			})
			if (data?.loginUser) router.push('/')
		} catch (error) {
			console.log(error.message)
		}
	}

	return (
		<Card>
			<CardContent>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col gap-6'
				>
					<div className='grid gap-3'>
						<Label htmlFor='email'>Email</Label>
						<Input
							id='email'
							type='email'
							placeholder='m@example.com'
							{...register('email', {
								required: 'Email is required'
							})}
						/>
						{errors.email && (
							<p className='text-red-500'>
								{errors.email.message}
							</p>
						)}
					</div>

					<div className='grid gap-3'>
						<Label htmlFor='password'>Password</Label>
						<Input
							id='password'
							type='password'
							{...register('password', {
								required: 'Password is required'
							})}
						/>
						{errors.password && (
							<p className='text-red-500'>
								{errors.password.message}
							</p>
						)}
					</div>

					{error && <p className='text-red-500'>{error.message}</p>}

					<Button type='submit' disabled={loading} className='w-full'>
						{loading ? 'Logging in…' : 'Login'}
					</Button>

					{data?.loginUser && (
						<p className='text-green-600'>
							Logged in as {data.loginUser.email}
						</p>
					)}
				</form>
			</CardContent>
		</Card>
	)
}
