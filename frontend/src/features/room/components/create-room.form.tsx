'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
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
	const router = useRouter()
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

			if (data?.createRoom.name) {
				toast.success(`🎉 Кімната "${data.createRoom.name}" створена!`)
				onRefreshRoom()
				reset()
				setIsOpen(false)
			}
		} catch (e) {
			const errorMessage =
				(e as Error).message || 'Сталася помилка при створенні кімнати'
			toast.error(`🚫 ${errorMessage}`)
			console.error(errorMessage)
		}
	}

	return (
		<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialogTrigger asChild>
				<Button className='rounded-full border border-green-400 bg-white/90 px-4 py-2 text-sm font-semibold text-green-700 shadow-sm transition duration-200 hover:bg-green-100 hover:shadow-md'>
					+ Створити кімнату
				</Button>
			</AlertDialogTrigger>

	<AlertDialogContent className="animate-fadeInScale fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
  <AlertDialogHeader className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-bold text-gray-800 text-center w-full">Нова кімната</h2>
    <AlertDialogCancel
      className="absolute right-6 top-6 rounded-full p-1 text-gray-500 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
      aria-label="Закрити"
    >
      <GoX size={20} />
    </AlertDialogCancel>
  </AlertDialogHeader>

  <AlertDialogDescription asChild>
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
          Назва кімнати
        </Label>
        <Input
          id="name"
          placeholder="Наприклад, Навчальна кімната"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-green-400 focus:ring-2 focus:ring-green-300"
          {...register('name', {
            required: 'Назва обовʼязкова',
            minLength: {
              value: 2,
              message: 'Мінімум 2 символи',
            },
          })}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-gradient-to-r from-green-400 to-lime-400 py-2 text-white font-semibold shadow-md transition-all duration-300 hover:from-green-500 hover:to-lime-500 hover:shadow-lg"
      >
        {loading ? 'Створення…' : 'Створити кімнату'}
      </Button>

      {error && (
        <p className="text-sm text-red-500 text-center">{error.message}</p>
      )}
    </form>
  </AlertDialogDescription>

  <AlertDialogFooter />
</AlertDialogContent>
		</AlertDialog>
	)
}
