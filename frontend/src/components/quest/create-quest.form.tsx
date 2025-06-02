// src/components/quest/create-quest.form.tsx
'use client'

import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useCreateQuestMutation, Room } from '@/graphql/generated/output'

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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui-kit/ui/select'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui-kit/ui/card'
import { Input } from '@/shared/ui-kit/ui/input'
import { Label } from '@/shared/ui-kit/ui/label'
import { GoX } from 'react-icons/go'

type CreateQuestFormProps = {
  rooms: Room[]                      // Массив комнат, из которого будем строить селект
  onRefreshQuests: () => void        // Колбэк для перезагрузки списка квестов
}

type IFormInput = {
  title: string
  deadline: string
  difficulty: number
  roomId: string      // Здесь – строка (ID комнаты), а не весь объект Room
}

export function CreateQuestForm({
  rooms,
  onRefreshQuests,
}: CreateQuestFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      title: '',
      deadline: '',
      difficulty: 1,
      roomId: '',       // по умолчанию пустая строка
    },
  })

  const [createQuest, { loading, error }] = useCreateQuestMutation()
  console.log(rooms)
  const onSubmit: SubmitHandler<IFormInput> = async (values) => {
    try {
      const result = await createQuest({
        variables: {
			 roomId: values.roomId,
          data: {
            title: values.title,
            deadline: values.deadline,
            difficulty: values.difficulty,
          },
        },
      })

      if (result.data?.createQuest?.id) {
        onRefreshQuests()
      }
    } catch (e: any) {
      console.error(e.message)
    }
  }

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Create Quest</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex justify-end">
              <AlertDialogCancel>
                <GoX size="30px" />
              </AlertDialogCancel>
            </div>
          <AlertDialogDescription asChild>
              <Card variant={'destructive'}>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="title">Title</Label>
                        <Input
                          {...register('title', { required: 'Введите заголовок' })}
                          id="title"
                          type="text"
                          placeholder="Название квеста"
                          required
                        />
                        {errors.title && (
                          <span className="text-sm text-red-500">
                            {errors.title.message}
                          </span>
                        )}

                        <Label htmlFor="deadline">Deadline</Label>
                        <Input
                          {...register('deadline', { required: 'Укажите дедлайн' })}
                          id="deadline"
                          type="date"
                          required
                        />
                        {errors.deadline && (
                          <span className="text-sm text-red-500">
                            {errors.deadline.message}
                          </span>
                        )}

                        <Label htmlFor="difficulty">Difficulty</Label>
                        <Input
                          {...register('difficulty', {
                            required: 'Укажите сложность',
                            valueAsNumber: true,
                          })}
                          id="difficulty"
                          type="number"
                          min={1}
                          max={5}
                          placeholder="1–5"
                          required
                        />
                        {errors.difficulty && (
                          <span className="text-sm text-red-500">
                            {errors.difficulty.message}
                          </span>
                        )}
                      </div>

                      {/* Селект для выбора комнаты */}
                      <Controller
                        name="roomId"
                        control={control}
                        rules={{ required: 'Выберите комнату' }}
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-[200px]">
                              <SelectValue placeholder="Выберите комнату" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Комнаты</SelectLabel>
                                {rooms?.map((rm) => (
                                  <SelectItem key={rm.id} value={rm.id}>
                                    {rm.name}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.rooms && (
                        <span className="text-sm text-red-500">
                          {errors.rooms.message as string}
                        </span>
                      )}

                      {/* Кнопка отправки */}
                      <div className="flex flex-col gap-3">
                        <Button
                          type="submit"
                          disabled={loading}
                          className="w-full"
                        >
                          {loading ? 'Creating…' : 'Create'}
                        </Button>
                      </div>
                    </div>
                    {error && (
                      <p className="text-red-500">{error.message}</p>
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
