'use client'

import * as React from 'react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { GoX } from 'react-icons/go'
import { ChevronDownIcon } from 'lucide-react'

import { CreateQuestInput } from '@/graphql/generated/output'
import { useCreateQuest } from '../hook'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/shared/ui-kit/ui/popover'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from '@/shared/ui-kit/ui/alert-dialog'
import { Button } from '@/shared/ui-kit/ui/button'
import { Label } from '@/shared/ui-kit/ui/label'
import { Input } from '@/shared/ui-kit/ui/input'
import { Calendar } from '@/shared/ui-kit/ui/calendar'

type Props = {
  roomId: string
  onRefreshQuest: () => void
}

export const CreateQuestForm = ({ roomId, onRefreshQuest }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState('10:00')
  const [dateOpen, setDateOpen] = useState(false)
  const [deadlineError, setDeadlineError] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateQuestInput>()

  const { createQuest, loading, error, reset: resetMutation } = useCreateQuest()

  const onSubmit: SubmitHandler<CreateQuestInput> = async (values) => {
    const toastId = toast.loading('Створення квесту...')

    if (!date || !time) {
      setDeadlineError(true)
      toast.dismiss(toastId)
      return
    }
    setDeadlineError(false)

    const deadlineDateTime = new Date(date)
    const [hours, minutes] = time.split(':').map(Number)
    deadlineDateTime.setHours(hours)
    deadlineDateTime.setMinutes(minutes)

    try {
      const { data } = await createQuest({
        variables: {
          roomId,
          data: {
            ...values,
            deadline: deadlineDateTime.toISOString(),
            difficulty: Number(values.difficulty),
          },
        },
      })

      if (data?.createQuest) {
        toast.success(`Квест "${data.createQuest.title}" створено`, { id: toastId })
        onRefreshQuest()
        reset()
        resetMutation()
        setDate(undefined)
        setTime('10:00')
        setIsOpen(false)
      } else {
        toast.error('Квест не створено', { id: toastId })
      }
    } catch (e) {
      toast.error('Помилка при створенні', { id: toastId })
      console.error(e)
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button className='rounded-full border border-green-500 bg-gradient-to-r from-green-100 to-lime-100 px-4 py-2 font-semibold text-green-800 shadow-sm transition hover:from-green-200 hover:to-lime-200'>
          + Створити квест
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className='animate-fadeInScale fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl'>
     <AlertDialogHeader className="relative -mx-8 -mt-8 rounded-t-2xl bg-gradient-to-r from-green-100 via-lime-50 to-white px-8 py-6 shadow-inner">
  <h3 className="text-center text-xl font-bold text-green-800 flex items-center justify-center gap-2">
    <span className="text-2xl">🧩</span> Новий квест
  </h3>
  <AlertDialogCancel
    className="absolute right-6 top-6 rounded-full p-1.5 text-gray-600 transition hover:bg-gray-200 hover:text-black focus-visible:ring-2 focus-visible:ring-green-400"
    aria-label="Закрити"
  >
    <GoX size={18} />
  </AlertDialogCancel>
</AlertDialogHeader>

        <AlertDialogDescription asChild>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6' noValidate>
            {/* Назва */}
            <div className='space-y-2'>
              <Label htmlFor='title'>Назва квесту</Label>
              <Input
                id='title'
                placeholder='Наприклад: Прибрати кімнату'
                className='rounded-lg border-gray-300 px-4 py-2 shadow-sm'
                {...register('title', {
                  required: 'Обовʼязкове поле',
                  minLength: { value: 2, message: 'Мінімум 2 символи' },
                })}
              />
              {errors.title && <p className='text-sm text-red-500'>{errors.title.message}</p>}
            </div>

            {/* Опис */}
            <div className='space-y-2'>
              <Label htmlFor='description'>Опис</Label>
              <Input
                id='description'
                placeholder='Що потрібно зробити…'
                className='rounded-lg border-gray-300 px-4 py-2 shadow-sm'
                {...register('description')}
              />
            </div>

            {/* Дата + Час */}
            <div className='space-y-2'>
              <Label>Дедлайн</Label>
              <div className='flex gap-4'>
                {/* Date */}
                <Popover open={dateOpen} onOpenChange={setDateOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant='outline'
                      className='w-36 justify-between font-normal rounded-lg border-gray-300 shadow-sm'
                    >
                      {date ? date.toLocaleDateString('uk-UA') : 'Оберіть дату'}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
  className='w-auto bg-white rounded-xl shadow-xl border z-[50] p-2'
  sideOffset={8}
  align='start'
>
  <Calendar
    mode='single'
    selected={date}
    captionLayout='dropdown'
    onSelect={(selected) => {
      setDate(selected)
      setDateOpen(false)
    }}
  />
</PopoverContent>
                </Popover>

                {/* Time */}
                <Input
                  type='time'
                  step='60'
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className='w-28 rounded-lg border-gray-300 shadow-sm'
                />
              </div>
              {deadlineError && (
                <p className='text-sm text-red-500'>Оберіть дату та час дедлайну</p>
              )}
            </div>

            {/* Складність */}
            <div className='space-y-2'>
              <Label htmlFor='difficulty'>Складність (1–5)</Label>
              <Input
                id='difficulty'
                type='number'
                min={1}
                max={5}
                className='rounded-lg border-gray-300 px-4 py-2 shadow-sm'
                {...register('difficulty', {
                  required: 'Вкажіть складність',
                  min: 1,
                  max: 5,
                })}
              />
              {errors.difficulty && (
                <p className='text-sm text-red-500'>{errors.difficulty.message}</p>
              )}
            </div>

            {/* Кнопка */}
            <Button
              type='submit'
              disabled={loading}
              className='w-full rounded-full bg-gradient-to-r from-green-400 to-lime-400 px-4 py-2 text-white font-semibold shadow-md transition hover:from-green-500 hover:to-lime-500 hover:shadow-lg'
            >
              {loading ? 'Створення…' : 'Створити'}
            </Button>

            {error && <p className='text-center text-sm text-red-500'>{error.message}</p>}
          </form>
        </AlertDialogDescription>

        <AlertDialogFooter />
      </AlertDialogContent>
    </AlertDialog>
  )
}
