'use client'

import { useState } from 'react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogDescription
} from '@/shared/ui-kit/ui/alert-dialog'
import { Input } from '@/shared/ui-kit/ui/input'
import { Label } from '@/shared/ui-kit/ui/label'
import { Button } from '@/shared/ui-kit/ui/button'
import {
  useDeleteGoalMutation,
  useUpdateGoalMutation,
  useUncompleteGoalMutation,
  useCompleteGoalMutation
} from '@/graphql/generated/output'

type Props = {
  isOpen: boolean
  onClose: () => void
  goalId: string
  currentTitle: string
  currentDescription?: string | null
  currentStarReward: number
  onUpdated: () => void
}

export default function UpdateGoalDialog({
  isOpen,
  onClose,
  goalId,
  currentTitle,
  currentDescription,
  currentStarReward,
  onUpdated
}: Props) {
  const [title, setTitle] = useState(currentTitle)
  const [description, setDescription] = useState(currentDescription ?? '')
  const [starReward, setStarReward] = useState(currentStarReward)

  const [updateGoal, { loading: updating }] = useUpdateGoalMutation()
  const [deleteGoal, { loading: deleting }] = useDeleteGoalMutation()
  const [uncompleteGoal, { loading: uncompleting }] = useUncompleteGoalMutation()
  const [completeGoal, { loading: completing }] = useCompleteGoalMutation()

  const handleUpdate = async () => {
    await updateGoal({
      variables: {
        goalId,
        data: { title, description, starReward }
      }
    })
    onUpdated()
    onClose()
  }

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this goal?')) {
      await deleteGoal({ variables: { goalId } })
      onUpdated()
      onClose()
    }
  }

  const handleUncomplete = async () => {
    await uncompleteGoal({ variables: { goalId } })
    onUpdated()
    onClose()
  }

  const handleComplete = async () => {
    await completeGoal({ variables: { goalId } })
    onUpdated()
    onClose()
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
  <AlertDialogContent className="fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 animate-fadeInScale rounded-xl border bg-white shadow-2xl p-0 overflow-hidden">

    {/* Заголовок з градієнтом */}
    <div className="bg-gradient-to-r from-green-200 via-lime-100 to-white px-6 py-4 border-b flex items-center justify-between">
      <h3 className="text-lg font-semibold text-gray-800">✏️ Редагування цілі</h3>
      <AlertDialogCancel asChild>
        <button
          className="text-gray-500 hover:text-red-500 transition p-1"
          title="Закрити"
        >
          ✖️
        </button>
      </AlertDialogCancel>
    </div>

    {/* Контент */}
    <div className="px-6 py-5 space-y-5">
      <div>
        <Label htmlFor="title" className="text-sm text-gray-700">Назва</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 border-gray-300 rounded-md focus:ring-green-100 focus:border-green-500"
        />
      </div>

      <div>
        <Label htmlFor="description" className="text-sm text-gray-700">Опис</Label>
        <Input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 border-gray-300 rounded-md focus:ring-green-100 focus:border-green-500"
        />
      </div>

      <div>
        <Label htmlFor="starReward" className="text-sm text-gray-700">Вартість у зірках</Label>
        <Input
          id="starReward"
          type="number"
          min={1}
          value={starReward}
          onChange={(e) => setStarReward(Number(e.target.value))}
          className="mt-1 border-gray-300 rounded-md focus:ring-green-100 focus:border-green-500"
        />
      </div>
    </div>

    {/* Дії */}
    <div className="px-6 pb-6 flex flex-col gap-3">
      <Button onClick={handleUpdate} disabled={updating} className="w-full">
        {updating ? 'Збереження…' : '💾 Зберегти зміни'}
      </Button>

      <Button
        variant="secondary"
        onClick={handleComplete}
        disabled={completing}
        className="w-full"
      >
        {completing ? 'Завершення…' : '✅ Позначити як виконану'}
      </Button>

      <Button
        variant="secondary"
        onClick={handleUncomplete}
        disabled={uncompleting}
        className="w-full"
      >
        {uncompleting ? 'Повернення…' : '🔄 Позначити як незавершену'}
      </Button>

      <Button
        variant="destructive"
        onClick={handleDelete}
        disabled={deleting}
        className="w-full"
      >
        {deleting ? 'Видалення…' : '🗑️ Видалити ціль'}
      </Button>

      <AlertDialogFooter className="pt-4">
        <AlertDialogCancel asChild>
          <Button variant="outline" onClick={onClose} className="w-full">
            Скасувати
          </Button>
        </AlertDialogCancel>
      </AlertDialogFooter>
    </div>
  </AlertDialogContent>
</AlertDialog>

  )
}
