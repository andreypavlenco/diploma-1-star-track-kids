import { redirect } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import { LoginInput, useLoginUserMutation } from '@/graphql/generated/output'

import { Button } from '@/shared/ui-kit/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/shared/ui-kit/ui/card'
import { Input } from '@/shared/ui-kit/ui/input'
import { Label } from '@/shared/ui-kit/ui/label'

export function SignInForm() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginInput>()

	const [loginUser, { data, loaging, error }] = useLoginUserMutation()

	const onSubmit: SubmitHandler<LoginInput> = async values => {
		const result = await loginUser({
			variables: {
				data: {
					email: values.email,
					password: values.password
				}
			}
		})
		console.log(result)
		if (result) {
			redirect('/')
		}
	}

	return (
		<>
			<Card variant={'destructive'}>
				<CardHeader>
					<CardTitle>Login to your account</CardTitle>
					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='flex flex-col gap-6'>
							<div className='grid gap-3'>
								<Label htmlFor='email'>Email</Label>
								<Input
									{...register('email', { required: true })}
									id='email'
									type='email'
									placeholder='m@example.com'
									required
								/>
							</div>
							<div className='grid gap-3'>
								<div className='flex items-center'>
									<Label htmlFor='password'>Password</Label>
								</div>
								<Input
									{...register('password', {
										required: true
									})}
									id='password'
									type='password'
									required
								/>
							</div>
							<div className='flex flex-col gap-3'>
								<Button
									type='submit'
									disabled={loaging}
									className='w-full'
								>
									{loaging ? 'Logging in...' : 'Login'}
								</Button>
							</div>
						</div>
						{error && (
							<p className='text-red-500'>{error.message}</p>
						)}
						{data && (
							<p className='text-green-600'>
								Logged in as {data.loginUser.email}
							</p>
						)}
					</form>
				</CardContent>
			</Card>
		</>
	)
}
