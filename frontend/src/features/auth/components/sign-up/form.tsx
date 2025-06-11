'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { HiEye, HiEyeOff } from 'react-icons/hi'

import { useAuthContext } from '@/app/providers/AuthProvider'

import { UserRole } from '@/graphql/generated/output'

import { useSingUp } from '@/features/auth/hook'
import { Button } from '@/shared/ui-kit/ui/button'
import { Card, CardContent } from '@/shared/ui-kit/ui/card'
import { Input } from '@/shared/ui-kit/ui/input'
import { Label } from '@/shared/ui-kit/ui/label'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/shared/ui-kit/ui/select'

type IFormInput = {
	email: string
	password: string
	role: UserRole
}

export function SignUpForm() {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IFormInput>()
	const { createUser, loading, error } = useSingUp()
	const [showPassword, setShowPassword] = useState(false)
	const { setProfile } = useAuthContext()
	const router = useRouter()
	const onSubmit: SubmitHandler<IFormInput> = async values => {
		const result = await createUser({
			variables: {
				data: {
					email: values.email,
					password: values.password,
					role: values.role
				}
			}
		})
		if (result.data?.createUser) {
			setProfile(result.data?.createUser)
			router.push('/')
			router.refresh()
		}
	}

	return (
		<Card>
			<CardContent>
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
					<div className='grid gap-2'>
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
							<p className='text-sm text-red-500'>
								{errors.email.message}
							</p>
						)}
					</div>
					<div className='relative grid gap-2'>
						<Label htmlFor='password'>Password</Label>
						<Input
							id='password'
							type={showPassword ? 'text' : 'password'}
							{...register('password', {
								required: 'Password is required'
							})}
							className='pr-10'
						/>
						<button
							type='button'
							aria-label={
								showPassword ? 'Hide password' : 'Show password'
							}
							onClick={() => setShowPassword(p => !p)}
							className='focus-visible:ring-ring absolute inset-y-0 right-2 mt-5 flex items-center text-gray-500 hover:text-gray-700 focus-visible:ring-2'
						>
							{showPassword ? (
								<HiEyeOff size={20} />
							) : (
								<HiEye size={20} />
							)}
						</button>
						{errors.password && (
							<p className='text-sm text-red-500'>
								{errors.password.message}
							</p>
						)}
					</div>
					<div className='grid gap-2'>
						<Label htmlFor='role'>Role</Label>
						<Controller
							name='role'
							control={control}
							rules={{ required: 'Role is required' }}
							render={({ field }) => (
								<Select
									onValueChange={field.onChange}
									value={field.value}
								>
									<SelectTrigger
										id='role'
										className='w-full bg-white'
									>
										<SelectValue placeholder='Select a role' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup className='bg-white'>
											<SelectItem value={UserRole.Parent}>
												Parent
											</SelectItem>
											<SelectItem value={UserRole.Child}>
												Child
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							)}
						/>
						{errors.role && (
							<p className='text-sm text-red-500'>
								{errors.role.message}
							</p>
						)}
					</div>
					{error && (
						<p className='text-sm text-red-500'>{error.message}</p>
					)}
					<Button type='submit' disabled={loading} className='w-full'>
						{loading ? 'Signing up…' : 'Sign Up'}
					</Button>
				</form>
			</CardContent>
		</Card>
	)
}
