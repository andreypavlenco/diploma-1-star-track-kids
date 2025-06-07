// components/CreateRoomForm.tsx
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

			if (data?.createRoom) {
				onRefreshRoom()
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
				<Button variant='outline'>Create room</Button>
			</AlertDialogTrigger>

			<AlertDialogContent>
				<AlertDialogHeader className='flex justify-end'>
					<AlertDialogCancel asChild>
						<Button variant='ghost' size='icon'>
							<GoX size={20} />
						</Button>
					</AlertDialogCancel>
				</AlertDialogHeader>

				<AlertDialogDescription asChild>
					<Card>
						<CardHeader>
							<CardTitle>Create room</CardTitle>
						</CardHeader>

						<CardContent>
							<form
								className='space-y-6'
								onSubmit={handleSubmit(onSubmit)}
								noValidate
							>
								<div className='grid gap-2'>
									<Label htmlFor='name'>Room name</Label>
									<Input
										id='name'
										placeholder='Study group…'
										{...register('name', {
											required: 'Name is required',
											minLength: {
												value: 2,
												message:
													'Must be at least 2 characters'
											}
										})}
									/>
									{errors.name && (
										<p className='text-red-500'>
											{errors.name.message}
										</p>
									)}
								</div>

								<Button
									type='submit'
									disabled={loading}
									className='w-full'
								>
									{loading ? 'Creating…' : 'Create'}
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
