'use client'

import { useApolloClient } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/shared/ui-kit/ui/alert-dialog'
import { Button } from '@/shared/ui-kit/ui/button'
import {
	useDeleteQuestMutation,
	useUpdateQuestMutation,
} from '@/graphql/generated/output'

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
	refetch,
}: Props) {
	const router = useRouter()
	const client = useApolloClient()

	const [title, setTitle] = useState(currentTitle)
	const [description, setDescription] = useState(currentDescription ?? '')
	const [date, setDate] = useState(currentDeadline?.split('T')[0] ?? '')
	const [time, setTime] = useState(currentDeadline?.split('T')[1]?.slice(0, 5) ?? '00:00')
	const [difficulty, setDifficulty] = useState(currentDifficulty ?? 1)

	const [updateQuest, { loading: saving }] = useUpdateQuestMutation()
	const [deleteQuest, { loading: deleting }] = useDeleteQuestMutation()

	const combineISO = (date: string, time: string) => {
		const [y, m, d] = date.split('-')
		const [h, min] = time.split(':')
		return new Date(+y, +m - 1, +d, +h, +min).toISOString()
	}

	const handleSave = async () => {
		try {
			await updateQuest({
				variables: {
					questId,
					data: {
						title,
						description,
						deadline: combineISO(date, time),
						difficulty,
					},
				},
			})
			onClose()
			router.refresh()
		} catch (err) {
			console.error('Save error:', err)
		}
	}

	const handleDelete = async () => {
		if (!confirm('Ви впевнені, що хочете видалити цей квест?')) return
		try {
			const { data } = await deleteQuest({ variables: { questId } })
			if (data?.deleteQuest) {
				refetch()
				onClose()
			}
		} catch (err) {
			console.error('Delete error:', err)
		}
	}

	return (
		<AlertDialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<AlertDialogTrigger asChild><div /></AlertDialogTrigger>
			<AlertDialogContent className="max-w-lg animate-fadeInScale rounded-xl border border-green-100 bg-gradient-to-br from-white via-green-50 to-lime-50 p-6 shadow-xl transition-all">
				<AlertDialogHeader className="mb-4">
					<AlertDialogTitle className="text-2xl font-bold text-green-800">⚙️ Налаштування квесту</AlertDialogTitle>
					<AlertDialogDescription className="text-gray-600 text-sm">
						Ви можете змінити назву, опис, дедлайн, складність або видалити квест.
					</AlertDialogDescription>
				</AlertDialogHeader>

				<div className="space-y-5">
					{/* Назва */}
					<div>
						<label className="mb-1 block text-sm font-medium text-gray-700">Назва</label>
						<input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
							className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-300" />
					</div>

					{/* Опис */}
					<div>
						<label className="mb-1 block text-sm font-medium text-gray-700">Опис</label>
						<textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3}
							className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-300" />
					</div>

					{/* Дедлайн */}
					<div>
						<label className="mb-1 block text-sm font-medium text-gray-700">Дедлайн</label>
						<div className="flex gap-2">
							<input type="date" value={date} onChange={(e) => setDate(e.target.value)}
								className="flex-1 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-green-300 focus:outline-none" />
							<input type="time" value={time} onChange={(e) => setTime(e.target.value)}
								className="w-32 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-green-300 focus:outline-none" />
						</div>
					</div>

					{/* Складність */}
					<div>
						<label className="mb-1 block text-sm font-medium text-gray-700">Складність (1–5)</label>
						<input type="number" min={1} max={5} value={difficulty} onChange={(e) => setDifficulty(parseInt(e.target.value))}
							className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-green-300 focus:outline-none" />
					</div>

					{/* Кнопки */}
					<Button onClick={handleSave} disabled={saving}
						className="w-full rounded-full bg-gradient-to-r from-green-400 to-lime-400 py-2 font-semibold text-white shadow-md transition hover:scale-[1.01] hover:from-green-500 hover:to-lime-500">
						{saving ? 'Збереження...' : '💾 Зберегти зміни'}
					</Button>

					<Button onClick={handleDelete} variant="destructive" disabled={deleting}
						className="w-full rounded-full bg-gradient-to-r from-red-500 to-pink-500 py-2 font-semibold text-white shadow-md transition hover:scale-[1.01] hover:from-red-600 hover:to-pink-600">
						{deleting ? 'Видалення...' : '🗑️ Видалити квест'}
					</Button>
				</div>

				<AlertDialogFooter className="mt-6">
					<AlertDialogCancel asChild>
						<Button variant="outline" onClick={onClose}
							className="w-full rounded-full border border-gray-300 bg-white py-2 text-gray-700 transition hover:bg-gray-100">
							⤶ Повернутись
						</Button>
					</AlertDialogCancel>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
