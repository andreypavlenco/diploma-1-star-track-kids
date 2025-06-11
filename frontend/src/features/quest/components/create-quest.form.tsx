import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GoX } from 'react-icons/go'

import { CreateQuestInput } from '@/graphql/generated/output'

import { useCreateQuest } from '../hook'

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
	roomId: string
	onRefreshQuest: () => void
}

export const CreateQuestForm = ({ roomId, onRefreshQuest }: Props) => {
	const [isOpen, setIsOpen] = useState(false)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<CreateQuestInput>()

	const {
		createQuest,
		loading,
		error,
		reset: resetMutation
	} = useCreateQuest()

	const onSubmit: SubmitHandler<CreateQuestInput> = async values => {
		try {
			const { data } = await createQuest({
				variables: {
					roomId,
					data: {
						...values,
						difficulty: Number(values.difficulty)
					}
				}
			})

			if (data?.createQuest) {
				onRefreshQuest()
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
				<Button variant='outline'>Create Quest</Button>
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
						<CardContent>
							<form
								className='space-y-6'
								onSubmit={handleSubmit(onSubmit)}
								noValidate
							>
								<div className='grid gap-2'>
									<Label htmlFor='title'>Quest Title</Label>
									<Input
										id='title'
										placeholder='New quest...'
										{...register('title', {
											required: 'Title is required',
											minLength: {
												value: 2,
												message:
													'Must be at least 2 characters'
											}
										})}
									/>
									{errors.title && (
										<p className='text-red-500'>
											{errors.title.message}
										</p>
									)}
								</div>

								<div className='grid gap-2'>
									<Label htmlFor='description'>
										Description
									</Label>
									<Input
										id='description'
										placeholder='Describe the quest...'
										{...register('description')}
									/>
								</div>

								<div className='grid gap-2'>
									<Label htmlFor='deadline'>Deadline</Label>
									<Input
										id='deadline'
										type='date'
										{...register('deadline', {
											required: 'Deadline is required'
										})}
									/>
									{errors.deadline && (
										<p className='text-red-500'>
											{errors.deadline.message}
										</p>
									)}
								</div>

								<div className='grid gap-2'>
									<Label htmlFor='difficulty'>
										Difficulty
									</Label>
									<Input
										id='difficulty'
										type='number'
										min={1}
										max={5}
										{...register('difficulty', {
											required: 'Difficulty is required',
											min: 1,
											max: 5
										})}
									/>
									{errors.difficulty && (
										<p className='text-red-500'>
											{errors.difficulty.message}
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
