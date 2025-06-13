'use client'

import { useApolloClient } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

import {
	useDeleteQuestMutation,
	useUpdateQuestMutation
} from '@/graphql/generated/output'

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/shared/ui-kit/ui/alert-dialog'
import { Button } from '@/shared/ui-kit/ui/button'
import { GoX } from 'react-icons/go'

interface Props {
	isOpen: boolean
	onClose: () => void
	questId: string
	currentTitle: string
	currentDescription?: string
	currentDeadline?: string
	currentDifficulty?: number
	refetch: () => void
}

export default function QuestSettingsDialog({
	isOpen,
	onClose,
	questId,
	currentTitle,
	currentDescription,
	currentDeadline,
	currentDifficulty,
	refetch
}: Props) {
	const router = useRouter()
	const client = useApolloClient()

	const [title, setTitle] = useState(currentTitle)
	const [description, setDescription] = useState(currentDescription ?? '')
	const [date, setDate] = useState(currentDeadline?.split('T')[0] ?? '')
	const [time, setTime] = useState(
		currentDeadline?.split('T')[1]?.slice(0, 5) ?? '00:00'
	)
	const [difficulty, setDifficulty] = useState(currentDifficulty ?? 1)

	const [updateQuest, { loading: saving }] = useUpdateQuestMutation()
	const [deleteQuest, { loading: deleting }] = useDeleteQuestMutation()

	const combineISO = (date: string, time: string) => {
		const [y, m, d] = date.split('-')
		const [h, min] = time.split(':')
		return new Date(+y, +m - 1, +d, +h, +min).toISOString()
	}

	const handleSave = async () => {
		const toastId = toast.loading('Збереження квесту...')
		try {
			await updateQuest({
				variables: {
					questId,
					data: {
						title,
						description,
						deadline: combineISO(date, time),
						difficulty
					}
				}
			})
			toast.success(' Квест успішно оновлено', { id: toastId })
			onClose()
			router.refresh()
		} catch (err) {
			console.error('Save error:', err)
			toast.error(' Помилка при збереженні квесту', { id: toastId })
		}
	}

	const handleDelete = async () => {
		if (!confirm('Ви впевнені, що хочете видалити цей квест?')) return

		const toastId = toast.loading('Видалення квесту...')

		try {
			const { data } = await deleteQuest({ variables: { questId } })
			if (data?.deleteQuest) {
				toast.success(' Квест видалено', { id: toastId })
				refetch()
				onClose()
			} else {
				toast.error(' Квест не вдалося видалити', { id: toastId })
			}
		} catch (err) {
			console.error('Delete error:', err)
			toast.error(' Помилка при видаленні квесту', { id: toastId })
		}
	}

	return (
		<AlertDialog open={isOpen} onOpenChange={open => !open && onClose()}>
			<AlertDialogTrigger asChild>
				<div />
			</AlertDialogTrigger>
		<AlertDialogContent className="animate-fadeInScale max-w-lg rounded-3xl border border-green-100 bg-gradient-to-br from-white via-green-50 to-lime-50 p-0 shadow-2xl">
  {/* Header */}
  <AlertDialogHeader className="relative rounded-t-3xl bg-gradient-to-r from-lime-100 via-green-50 to-white px-6 py-6 shadow-inner">
    <h2 className="text-center text-2xl font-extrabold text-green-800 flex items-center justify-center gap-2 tracking-tight">
      <span className="text-3xl">🎯</span> Налаштування квесту
    </h2>
    <AlertDialogCancel
      className="absolute right-4 top-4 rounded-full p-1.5 text-gray-600 hover:bg-gray-200 hover:text-black focus-visible:ring-2 focus-visible:ring-green-300"
      aria-label="Закрити"
    >
      <GoX size={20} />
    </AlertDialogCancel>
  </AlertDialogHeader>

  {/* Body */}
  <div className="px-6 py-6 space-y-5">
    <AlertDialogDescription className="text-center text-sm text-gray-600 mb-4">
      Ви можете змінити назву, опис, дедлайн, складність або видалити квест.
    </AlertDialogDescription>

    {/* Назва */}
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">Назва</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-green-400 focus:ring-2 focus:ring-green-200 focus:outline-none"
        placeholder="Назва квесту"
      />
    </div>

    {/* Опис */}
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">Опис</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-green-400 focus:ring-2 focus:ring-green-200 focus:outline-none"
        placeholder="Опис завдання..."
      />
    </div>

    {/* Дедлайн */}
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">Дедлайн</label>
      <div className="flex gap-3">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="flex-1 rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-200 focus:outline-none"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-32 rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-200 focus:outline-none"
        />
      </div>
    </div>

    {/* Складність */}
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">Складність (1–5)</label>
      <input
        type="number"
        min={1}
        max={5}
        value={difficulty}
        onChange={(e) => setDifficulty(parseInt(e.target.value))}
        className="w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-200 focus:outline-none"
      />
    </div>

    {/* Зберегти */}
    <Button
      onClick={handleSave}
      disabled={saving}
      className="w-full rounded-full bg-gradient-to-r from-green-400 to-lime-400 py-3 font-semibold text-white shadow-md transition hover:scale-[1.02] hover:from-green-500 hover:to-lime-500"
    >
      {saving ? 'Збереження…' : '💾 Зберегти зміни'}
    </Button>

    {/* Видалити */}
    <Button
      onClick={handleDelete}
      variant="destructive"
      disabled={deleting}
      className="w-full rounded-full bg-gradient-to-r from-red-500 to-pink-500 py-3 font-semibold text-white shadow-md transition hover:scale-[1.02] hover:from-red-600 hover:to-pink-600"
    >
      {deleting ? 'Видалення…' : '🗑️ Видалити квест'}
    </Button>
  </div>

  {/* Footer */}
  <AlertDialogFooter className="px-6 pb-6 pt-4">
    <AlertDialogCancel asChild>
      <Button
        variant="outline"
        onClick={onClose}
        className="w-full rounded-full border border-gray-300 bg-white py-3 text-gray-700 transition hover:bg-gray-100"
      >
        ⤶ Повернутись
      </Button>
    </AlertDialogCancel>
  </AlertDialogFooter>
</AlertDialogContent>

		</AlertDialog>
	)
}
