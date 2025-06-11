'use client';

import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from '@/shared/ui-kit/ui/alert-dialog';
import { Button } from '@/shared/ui-kit/ui/button';
import { useRouter } from 'next/navigation';
import {
  useDeleteRewardMutation,
  useUpdateRewardMutation,
} from '@/graphql/generated/output';

type RewardSettingsDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  rewardId: string;
  currentTitle: string;
  currentDescription?: string;
  currentStarCost: number;
  onUpdated: () => void;
};

export default function UpdateRewardDialog({
  isOpen,
  onClose,
  rewardId,
  currentTitle,
  currentDescription,
  currentStarCost,
  onUpdated,
}: RewardSettingsDialogProps) {

  const [newTitle, setNewTitle] = useState(currentTitle);
  const [newDescription, setNewDescription] = useState(currentDescription ?? '');
  const [newStarCost, setNewStarCost] = useState(currentStarCost);

  const [updateReward, { loading: updating }] = useUpdateRewardMutation();
  const [deleteReward, { loading: deleting }] = useDeleteRewardMutation();

  const handleUpdate = async () => {
    try {
      await updateReward({
        variables: {
          rewardId,
          data: {
            title: newTitle,
            description: newDescription,
            starCost: newStarCost,
          },
        },
      });
      onClose();
      onUpdated();
    } catch (err) {
      console.error('Update error:', err);
    }
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this reward?')) {
      try {
        await deleteReward({ variables: { rewardId } });
        onClose();
        onUpdated()
      } catch (err) {
        console.error('Delete error:', err);
      }
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AlertDialogTrigger asChild>
        <div />
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-md rounded-lg bg-white p-6 shadow-lg">
        <AlertDialogHeader className="mb-4">
          <AlertDialogTitle className="text-2xl font-bold text-gray-800">
            Reward Settings
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-500">
            Manage this reward: update its details or delete it.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
              placeholder="Enter new reward title"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
              placeholder="Enter reward description"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Star Cost
            </label>
            <input
              type="number"
              min={1}
              max={1000}
              value={newStarCost}
              onChange={(e) => setNewStarCost(Number(e.target.value))}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
            />
          </div>

          <Button
            onClick={handleUpdate}
            disabled={updating}
            className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md py-2 transition"
          >
            {updating ? 'Saving...' : 'Save Changes'}
          </Button>

          {/* Delete button */}
          <div>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={deleting}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md py-2 transition"
            >
              Delete Reward
            </Button>
          </div>
        </div>

        <AlertDialogFooter className="mt-6">
          <AlertDialogCancel asChild>
            <Button
              variant="secondary"
              onClick={onClose}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-md py-2 transition"
            >
              Close
            </Button>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
