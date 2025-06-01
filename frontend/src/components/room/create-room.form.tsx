import { redirect } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import { CreateRoomInput, LoginInput, useCreateRoomMutation, useLoginUserMutation } from '@/graphql/generated/output'

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
import { useRouter } from 'next/router'

interface CreateRoomFormProps {
    /** Колбэк вызывается после успешного создания комнаты */
    onSuccess: () => void
  }
  

export function CreateRoomForm({onSuccess}: CreateRoomFormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<CreateRoomInput>()

	const [createRoom, {  loaging, error }] = useCreateRoomMutation()

	const onSubmit: SubmitHandler<CreateRoomInput> = async (values) => {
        try {
            const result = await createRoom({
              variables: {
                data: { name: values.name }
              }
            })
            if (result.data?.createRoom?.name) {
              onSuccess()
            
            }
          } catch (e) {
            console.error(e.message)
          }

	}

	return (
		<>
			<Card variant={'destructive'}>
				<CardHeader>
					<CardTitle>Create Room</CardTitle>
					<CardDescription>
						
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='flex flex-col gap-6'>
							<div className='grid gap-3'>
								<Label htmlFor='name'>Name Room</Label>
								<Input
									{...register('name', { required: true })}
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
									className='w-full'
								>
									{loaging ? 'Create to...' : 'Create'}
								</Button>
							</div>
						</div>
						{error && (
							<p className='text-red-500'>{error.message}</p>
						)}
					</form>
				</CardContent>
			</Card>
		</>
	)
}
