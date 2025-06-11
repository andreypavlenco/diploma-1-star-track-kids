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
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui-kit/ui/card'

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
        <Button variant="outline">Create Goal</Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader className="flex justify-end">
          <AlertDialogCancel asChild >
            <Button variant="ghost" size="icon">
              <GoX size={20} />
            </Button>
          </AlertDialogCancel>
        </AlertDialogHeader>

        <AlertDialogDescription asChild>
          <Card>
          
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    {...register('title', { required: 'Title is required' })}
                    placeholder="e.g. Finish homework"
                  />
                  {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" {...register('description')} placeholder="Optional description" />
                </div>

                <div>
                  <Label htmlFor="starReward">Star Reward</Label>
                  <Input
                    id="starReward"
                    type="number"
                    min={1}
                    {...register('starReward', { required: 'Star reward is required', min: 1 })}
                    placeholder="e.g. 10"
                  />
                  {errors.starReward && <p className="text-red-500">{errors.starReward.message}</p>}
                </div>

                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? 'Creating...' : 'Create'}
                </Button>
                {error && <p className="text-red-500">{error.message}</p>}
              </form>
            </CardContent>
          </Card>
        </AlertDialogDescription>

        <AlertDialogFooter />
      </AlertDialogContent>
    </AlertDialog>
  )
}
