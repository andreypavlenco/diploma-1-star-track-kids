'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { GoX } from 'react-icons/go'

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter
} from '@/shared/ui-kit/ui/alert-dialog'
import { Button } from '@/shared/ui-kit/ui/button'
import { Input } from '@/shared/ui-kit/ui/input'
import { Label } from '@/shared/ui-kit/ui/label'
import { Card, CardContent, CardHeader } from '@/shared/ui-kit/ui/card'

import { useCreateGoalMutation, CreateGoalInput } from '@/graphql/generated/output'

type Props = {
  onRefreshGoal: () => void
}

export const CreateGoalForm = ({ onRefreshGoal }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<CreateGoalInput>()

  const [createGoal, { loading, error }] = useCreateGoalMutation()

  const onSubmit: SubmitHandler<CreateGoalInput> = async values => {
    values.starReward = Number(values.starReward)
    const { data } = await createGoal({ variables: { data: values } })
    if (data?.createGoal) {
      onRefreshGoal()
      reset()
      setIsOpen(false)
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button className="rounded-full bg-gradient-to-r from-green-200 to-lime-300 text-green-900 font-semibold shadow hover:from-green-300 hover:to-lime-400 transition px-4 py-2">
          + Створити ціль
        </Button>
      </AlertDialogTrigger>

    <AlertDialogContent className="fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-white p-0 shadow-2xl overflow-hidden animate-fadeInScale">

  {/* Верхній блок з заголовком */}
  <div className="bg-gradient-to-r from-green-100 via-lime-50 to-white px-6 py-4 border-b flex items-center justify-between">
    <h3 className="text-lg font-semibold text-gray-800">🎯 Нова ціль</h3>
    <AlertDialogCancel asChild>
     <button
          className="text-gray-500 hover:text-red-500 transition p-1"
          title="Закрити"
        >
          ✖️
        </button>
    </AlertDialogCancel>
  </div>

  {/* Контент форми */}
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 px-6 py-6">
    <div className="grid gap-1">
      <Label htmlFor="title" className="text-sm text-gray-700">Назва</Label>
      <Input
        id="title"
        placeholder="Наприклад: Завершити проєкт"
        {...register('title', { required: 'Введіть назву' })}
        className="border-gray-300 rounded-md focus:ring-green-100 focus:border-green-500"
      />
      {errors.title && <p className="text-xs text-red-500">{errors.title.message}</p>}
    </div>

    <div className="grid gap-1">
      <Label htmlFor="description" className="text-sm text-gray-700">Опис (необовʼязково)</Label>
      <Input
        id="description"
        placeholder="Короткий опис або кроки"
        {...register('description')}
        className="border-gray-300 rounded-md focus:ring-green-100 focus:border-green-500"
      />
    </div>

    <div className="grid gap-1">
      <Label htmlFor="starReward" className="text-sm text-gray-700">Вартість у зірках</Label>
      <Input
        id="starReward"
        type="number"
        min={1}
        placeholder="Наприклад: 10"
        {...register('starReward', {
          required: 'Вкажіть винагороду',
          min: { value: 1, message: 'Мінімум 1 зірка' }
        })}
        className="border-gray-300 rounded-md focus:ring-green-100 focus:border-green-500"
      />
      {errors.starReward && <p className="text-xs text-red-500">{errors.starReward.message}</p>}
    </div>

    <Button
      type="submit"
      disabled={loading}
      className="w-full rounded-md bg-gradient-to-r from-green-400 to-lime-400 text-white font-semibold hover:from-green-500 hover:to-lime-500 transition"
    >
      {loading ? 'Створення…' : 'Створити'}
    </Button>

    {error && <p className="text-sm text-red-500 text-center mt-2">{error.message}</p>}
  </form>

</AlertDialogContent>

    </AlertDialog>
  )
}
