import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GoX } from 'react-icons/go'

import {
	CreateRoomInput,
	LoginInput,
	useCreateRoomMutation,
	useLoginUserMutation
} from '@/graphql/generated/output'

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
	CardDescription,
	CardHeader,
	CardTitle
} from '@/shared/ui-kit/ui/card'
import { Input } from '@/shared/ui-kit/ui/input'
import { Label } from '@/shared/ui-kit/ui/label'

type CreateRoomFormProps = {
	onRefreshProfile: () => void
}

export function CreateRoomForm({ onRefreshProfile }: CreateRoomFormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<CreateRoomInput>()

	const [createRoom, { loaging, error }] = useCreateRoomMutation()
	const router = useRouter()
	const onSubmit: SubmitHandler<CreateRoomInput> = async values => {
		try {
			const result = await createRoom({
				variables: {
					data: { name: values.name }
				}
			})
			if (result.data?.createRoom?.name) {
				onRefreshProfile()
			}
		} catch (error) {
			console.error(error.message)
		}
	}

	return (
		<div>
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button variant='outline'>Create Room</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<div className='flex justify-end'>
							<AlertDialogCancel>
								<GoX size='30px' />
							</AlertDialogCancel>
						</div>
						<AlertDialogDescription>
							<Card variant={'destructive'}>
								<CardHeader>
									<CardTitle>Create Room</CardTitle>
									<CardDescription></CardDescription>
								</CardHeader>
								<CardContent>
									<form onSubmit={handleSubmit(onSubmit)}>
										<div className='flex flex-col gap-6'>
											<div className='grid gap-3'>
												<Label htmlFor='name'>
													Name Room
												</Label>
												<Input
													{...register('name', {
														required: true
													})}
													id='name'
													type='name'
													placeholder='name room'
													required
												/>
											</div>
												<div className='flex flex-col gap-3'>
													<Button
														type='submit'
														disabled={loaging}
														className='w-ful'
													>
														{loaging
															? 'Create to...'
															: 'Create'}
													</Button>
												</div>
										</div>
										{error && (
											<p className='text-red-500'>
												{error.message}
											</p>
										)}
									</form>
								</CardContent>
							</Card>
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter></AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	)
}
