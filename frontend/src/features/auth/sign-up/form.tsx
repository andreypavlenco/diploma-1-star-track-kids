import { redirect } from 'next/navigation'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { HiEye, HiEyeOff } from 'react-icons/hi'

import { UserRole, useCreateUserMutation } from '@/graphql/generated/output'

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
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/shared/ui-kit/ui/select'

type IFormInput = {
	email: string
	password: string
	gender: UserRole
}

export function SignUpForm() {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IFormInput>()

	const [createUser, { data, loading, error }] = useCreateUserMutation()

	const onSubmit: SubmitHandler<IFormInput> = async values => {
		const result = await createUser({
			variables: {
				data: {
					email: values.email,
					password: values.password,
					role: values.gender
				}
			}
		})
		if (result) {
			redirect('/')
		}
	}

	const [showPassword, setShowPassword] = useState(false)
	//const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	return (
		<div>
			<Card variant={'default'}>
				<CardHeader>
					<CardTitle>Register a new account</CardTitle>
					<CardDescription>
						Fill in the fields below to create your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='flex flex-col gap-6'>
							<div className='grid gap-3'>
								<Label htmlFor='email'>Email</Label>
								<Input
									{...register('email')}
									id='email'
									type='email'
									placeholder='m@example.com'
									required
								/>
							</div>

							<div className='relative grid gap-3'>
								<Label htmlFor='password'>Password</Label>
								<Input
									{...register('password')}
									id='password'
									type={showPassword ? 'text' : 'password'}
									required
									className='pr-10'
								/>
								<button
									type='button'
									aria-label={
										showPassword
											? 'Hide password'
											: 'Show password'
									}
									onClick={() =>
										setShowPassword(prev => !prev)
									}
									className='absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700'
								>
									{showPassword ? (
										<HiEyeOff size={20} />
									) : (
										<HiEye size={20} />
									)}
								</button>
							</div>

							<Controller
								name='gender'
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<Select
										onValueChange={field.onChange}
										value={field.value}
										defaultValue={undefined}
									>
										<SelectTrigger className='w-[180px]'>
											<SelectValue placeholder='Select a role' />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Role</SelectLabel>
												<SelectItem
													value={UserRole.Parent}
												>
													Parent
												</SelectItem>
												<SelectItem
													value={UserRole.Child}
												>
													Child
												</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								)}
							/>
							{errors.gender && (
								<span className='text-sm text-red-500'>
									This field is required
								</span>
							)}
							<div className='flex flex-col gap-3'>
								<Button type='submit' className='w-full'>
									Sign Up
								</Button>
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}

{
	/* <div className='relative grid gap-3'>
								<Label htmlFor='confirmPassword'>
									Confirm Password
								</Label>
								<Input
									id='confirmPassword'
									type={
										showConfirmPassword
											? 'text'
											: 'password'
									}
									required
									className='pr-10'
								/>
								<button
									type='button'
									aria-label={
										showConfirmPassword
											? 'Hide password'
											: 'Show password'
									}
									onClick={() =>
										setShowConfirmPassword(prev => !prev)
									}
									className='absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700'
								>
									{showConfirmPassword ? (
										<HiEyeOff size={20} />
									) : (
										<HiEye size={20} />
									)}
								</button>
							</div> */
}
