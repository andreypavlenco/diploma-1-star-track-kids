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
      <AlertDialogContent className="max-w-md bg-white p-6 rounded-lg shadow-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Goal</AlertDialogTitle>
          <AlertDialogDescription>Modify the goal’s details below:</AlertDialogDescription>
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

        <div className="flex flex-col gap-2 mt-6">
          <Button onClick={handleUpdate} disabled={updating}>
            {updating ? 'Saving...' : 'Save Changes'}
          </Button>

          <Button variant="secondary" onClick={handleComplete} disabled={completing}>
            {completing ? 'Completing...' : 'Mark as Complete'}
          </Button>

          <Button variant="secondary" onClick={handleUncomplete} disabled={uncompleting}>
            {uncompleting ? 'Uncompleting...' : 'Mark as Incomplete'}
          </Button>

          <Button variant="destructive" onClick={handleDelete} disabled={deleting}>
            {deleting ? 'Deleting...' : 'Delete Goal'}
          </Button>

          <AlertDialogFooter>
            <AlertDialogCancel>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </AlertDialogCancel>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
