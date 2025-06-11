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
import { useDeleteGoalMutation, useUpdateGoalMutation } from '@/graphql/generated/output'

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

  const [updateGoal, { loading }] = useUpdateGoalMutation()
  const [deleteReward, { loading: deleting }] = useDeleteGoalMutation();

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
    if (confirm('Are you sure you want to delete this reward?')) {
      try {
        await deleteReward({ variables: { goalId } });
        onClose();
        onUpdated()
      } catch (err) {
        console.error('Delete error:', err);
      }
    }
  };


  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AlertDialogContent className="max-w-md bg-white p-6 rounded-lg shadow-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Goal</AlertDialogTitle>
          <AlertDialogDescription>
            Modify the goal’s details below:
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-4 mt-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          <div>
            <Label htmlFor="starReward">Star Reward</Label>
            <Input
              id="starReward"
              type="number"
              min={1}
              value={starReward}
              onChange={(e) => setStarReward(Number(e.target.value))}
            />
          </div>
        </div>

        <AlertDialogFooter className="mt-6">
          <AlertDialogCancel>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </AlertDialogCancel>
          <Button onClick={handleUpdate} disabled={loading}>
            {loading ? 'Saving...' : 'Save Changes'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
