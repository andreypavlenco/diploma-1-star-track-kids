'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import { GoX } from 'react-icons/go'

import {
	useCompleteGoalMutation,
	useDeleteGoalMutation,
	useUncompleteGoalMutation,
	useUpdateGoalMutation
} from '@/graphql/generated/output'

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle
} from '@/shared/ui-kit/ui/alert-dialog'
import { Button } from '@/shared/ui-kit/ui/button'
import { Input } from '@/shared/ui-kit/ui/input'
import { Label } from '@/shared/ui-kit/ui/label'

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
	const [uncompleteGoal, { loading: uncompleting }] =
		useUncompleteGoalMutation()
	const [completeGoal, { loading: completing }] = useCompleteGoalMutation()

	const handleUpdate = async () => {
		const toastId = toast.loading('Оновлення цілі...')
		try {
			await updateGoal({
				variables: {
					goalId,
					data: { title, description, starReward }
				}
			})
			toast.success('✅ Ціль оновлено', { id: toastId })
			onUpdated()
			onClose()
		} catch (err) {
			console.error('Update goal error:', err)
			toast.error('❌ Помилка при оновленні цілі', { id: toastId })
		}
	}

	const handleDelete = async () => {
		if (!confirm('Ви впевнені, що хочете видалити ціль?')) return
		const toastId = toast.loading('Видалення цілі...')

		try {
			await deleteGoal({ variables: { goalId } })
			toast.success('🗑️ Ціль видалено', { id: toastId })
			onUpdated()
			onClose()
		} catch (err) {
			console.error('Delete goal error:', err)
			toast.error('❌ Помилка при видаленні цілі', { id: toastId })
		}
	}

	const handleUncomplete = async () => {
		const toastId = toast.loading('Скасування виконання цілі...')
		try {
			await uncompleteGoal({ variables: { goalId } })
			toast.success('↩️ Виконання цілі скасовано', { id: toastId })
			onUpdated()
			onClose()
		} catch (err) {
			console.error('Uncomplete goal error:', err)
			toast.error('❌ Помилка при скасуванні виконання', { id: toastId })
		}
	}

	const handleComplete = async () => {
		const toastId = toast.loading('Завершення цілі...')
		try {
			await completeGoal({ variables: { goalId } })
			toast.success('🏁 Ціль позначено як виконану', { id: toastId })
			onUpdated()
			onClose()
		} catch (err) {
			console.error('Complete goal error:', err)
			toast.error('❌ Помилка при завершенні цілі', { id: toastId })
		}
	}
	return (
		<AlertDialog open={isOpen} onOpenChange={open => !open && onClose()}>
  <AlertDialogContent className="animate-fadeInScale fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-gray-100 bg-white p-0 shadow-2xl">

    {/* Header */}
    <div className="relative rounded-t-2xl bg-gradient-to-r from-yellow-50 via-lime-50 to-white px-6 py-5 shadow-inner">
      <h3 className="text-center text-xl font-bold text-green-700 flex items-center justify-center gap-2">
        <span className="text-2xl">✏️</span> Редагування цілі
      </h3>
      <AlertDialogCancel
        className="absolute right-4 top-4 rounded-full p-1.5 text-gray-600 hover:bg-gray-200 hover:text-black focus-visible:ring-2 focus-visible:ring-green-300"
        aria-label="Закрити"
      >
        <GoX size={20} />
      </AlertDialogCancel>
    </div>

    {/* Форма */}
    <div className="space-y-5 px-6 py-6">
      <div>
        <Label htmlFor="title" className="text-sm text-gray-700">Назва</Label>
        <Input
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="mt-1 rounded-lg border-gray-300 px-3 py-2 shadow-sm focus:border-green-400 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <div>
        <Label htmlFor="description" className="text-sm text-gray-700">Опис</Label>
        <Input
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="mt-1 rounded-lg border-gray-300 px-3 py-2 shadow-sm focus:border-green-400 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <div>
        <Label htmlFor="starReward" className="text-sm text-gray-700">Вартість у зірках</Label>
        <Input
          id="starReward"
          type="number"
          min={1}
          value={starReward}
          onChange={e => setStarReward(Number(e.target.value))}
          className="mt-1 rounded-lg border-gray-300 px-3 py-2 shadow-sm focus:border-green-400 focus:ring-2 focus:ring-green-100"
        />
      </div>

      {/* Кнопки дій */}
      <div className="flex flex-col gap-3 pt-4">
        <Button
          onClick={handleUpdate}
          disabled={updating}
          className="w-full rounded-full bg-gradient-to-r from-green-400 to-lime-400 py-2 font-semibold text-white shadow-md hover:from-green-500 hover:to-lime-500 transition"
        >
          {updating ? 'Збереження…' : '💾 Зберегти зміни'}
        </Button>

     <Button
  onClick={handleComplete}
  disabled={completing}
  className="w-full rounded-full bg-yellow-300 text-gray-900 font-semibold shadow-sm hover:bg-yellow-400 transition"
>
  {completing ? 'Завершення…' : '✅ Позначити як виконану'}
</Button>

    <Button
  onClick={handleUncomplete}
  disabled={uncompleting}
  className="w-full rounded-full bg-orange-100 text-orange-800 font-medium shadow-sm hover:bg-orange-200 transition"
>
  {uncompleting ? 'Повернення…' : '🔄 Позначити як незавершену'}
</Button>


        <Button
          variant="destructive"
          onClick={handleDelete}
          disabled={deleting}
          className="w-full rounded-full bg-gradient-to-r from-red-500 to-pink-500 py-2 font-semibold text-white shadow-md hover:from-red-600 hover:to-pink-600 transition"
        >
          {deleting ? 'Видалення…' : '🗑️ Видалити ціль'}
        </Button>
      </div>

      {/* Скасувати */}
      <AlertDialogFooter className="pt-4">
        <AlertDialogCancel asChild>
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full rounded-full border border-gray-300 bg-white py-2 text-gray-700 hover:bg-gray-100"
          >
            Скасувати
          </Button>
        </AlertDialogCancel>
      </AlertDialogFooter>
    </div>
  </AlertDialogContent>
</AlertDialog>
	)
}
