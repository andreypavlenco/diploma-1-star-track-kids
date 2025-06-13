'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { GoX } from 'react-icons/go'

import {
  useDeleteRoomMutation,
  useUpdateRoomMutation,
} from '@/graphql/generated/output'

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

interface RoomSettingsDialogProps {
  isOpen: boolean
  onClose: () => void
  roomId: string
  currentName: string
}

export default function RoomSettingsDialog({
  isOpen,
  onClose,
  roomId,
  currentName,
}: RoomSettingsDialogProps) {
  const router = useRouter()
  const [newName, setNewName] = useState(currentName)

  const [renameRoom, { loading: renaming }] = useUpdateRoomMutation()
  const [deleteRoom, { loading: deleting }] = useDeleteRoomMutation()

  const handleRename = async () => {
    try {
      await renameRoom({
        variables: {
          roomId,
          data: { name: newName },
        },
      })
      toast.success(`Назву кімнати змінено на "${newName}"`)
      onClose()
      router.refresh()
    } catch (err) {
      console.error('Rename error:', err)
      toast.error('Помилка при перейменуванні кімнати')
    }
  }

  const handleDelete = async () => {
    if (confirm('Ви впевнені, що хочете видалити цю кімнату?')) {
      try {
        await deleteRoom({ variables: { roomId } })
        toast.success('Кімната успішно видалена')
        onClose()
        window.location.href = '/room'
      } catch (err) {
        console.error('Delete error:', err)
        toast.error('Помилка при видаленні кімнати')
      }
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AlertDialogTrigger asChild>
        <div />
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-xl rounded-3xl border border-gray-100 bg-white p-0 shadow-2xl">
        {/* Header */}
        <AlertDialogHeader className="relative -mx-0 -mt-0 rounded-t-3xl bg-gradient-to-r from-blue-100 via-sky-50 to-white px-8 py-6 shadow-inner">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 justify-center">
            <span className="text-3xl">⚙️</span> Налаштування кімнати
          </h2>
          <AlertDialogCancel
            className="absolute right-5 top-5 rounded-full p-1.5 text-gray-600 hover:bg-gray-200 hover:text-black focus-visible:ring-2 focus-visible:ring-blue-300"
            aria-label="Закрити"
          >
            <GoX size={20} />
          </AlertDialogCancel>
        </AlertDialogHeader>

        <div className="px-8 py-6 space-y-6">
          {/* Description */}
          <AlertDialogDescription className="text-base text-gray-600 text-center">
            Тут ви можете перейменувати кімнату, видалити її або додати нових учасників до команди.
          </AlertDialogDescription>

          {/* Назва кімнати */}
          <div>
            <label className="mb-2 block text-base font-medium text-gray-800">
              Нова назва кімнати
            </label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-5 py-3 text-base shadow-sm focus:border-green-400 focus:ring-2 focus:ring-green-200 focus:outline-none"
              placeholder="Введіть нову назву"
            />
            <Button
              onClick={handleRename}
              disabled={renaming}
              className="mt-4 w-full rounded-full bg-gradient-to-r from-green-400 to-lime-400 py-3 text-base font-semibold text-white shadow-md transition hover:from-green-500 hover:to-lime-500"
            >
              {renaming ? 'Збереження...' : 'Зберегти зміни'}
            </Button>
          </div>

          {/* Видалити кімнату */}
          <div>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={deleting}
              className="w-full rounded-full bg-gradient-to-r from-red-500 to-rose-500 py-3 text-base font-semibold text-white shadow-md transition hover:from-red-600 hover:to-rose-600"
            >
              {deleting ? 'Видалення...' : 'Видалити кімнату'}
            </Button>
          </div>

          {/* Закрити */}
          <AlertDialogFooter className="pt-2">
            <AlertDialogCancel asChild>
              <Button
                variant="secondary"
                onClick={onClose}
                className="w-full rounded-full bg-gray-100 py-3 text-base font-semibold text-gray-800 transition hover:bg-gray-200"
              >
                Закрити
              </Button>
            </AlertDialogCancel>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
