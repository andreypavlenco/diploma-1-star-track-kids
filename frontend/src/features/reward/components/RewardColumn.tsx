'use client';

import React, { useState } from 'react';
import { RewardType } from '../type';
import { CreateRewardForm } from './create-reward.form';
import { Button } from '@/shared/ui-kit/ui/button';
import { useRouter } from 'next/navigation';
import UpdateRewardDialog from './UpdateRewardDialog';

type RewardColumnProps = {
  rewards?: RewardType[];
  onRefreshReward: () => void;
  boughtRewardIds?: string[];
};

export function RewardColumn({
  rewards = [],
  onRefreshReward,
  boughtRewardIds = [],
}: RewardColumnProps) {
  const router = useRouter();
  const [selectedReward, setSelectedReward] = useState<RewardType | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [minStarCost, setMinStarCost] = useState(0);
  const [showOnlyUnbought, setShowOnlyUnbought] = useState(false);

  const handleBuyReward = (rewardId: string) => {
    alert(`Buy Reward: ${rewardId}`);
  };

  const filteredRewards = rewards.filter((reward) => {
    const meetsStarCost = reward.starCost >= minStarCost;
    const isUnbought = showOnlyUnbought ? !boughtRewardIds.includes(reward.id) : true;
    return meetsStarCost && isUnbought;
  });

  return (
    <section className="border border-gray-300 bg-white flex flex-1 flex-col rounded-xl shadow-sm mx-auto max-w-4xl p-6">
      <header className="bg-gray-100 flex items-center justify-between rounded-t-xl px-6 py-4">
        <h2 className="text-lg font-semibold">Rewards</h2>
        <CreateRewardForm onRefreshReward={onRefreshReward} />
      </header>

      <div className="flex flex-wrap items-center justify-between px-6 py-4 gap-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center gap-4 flex-wrap">
          <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Min Star Cost</label>
  <div className="relative">
    <input
      type="number"
      value={minStarCost === 0 ? '' : minStarCost}
      onChange={(e) => setMinStarCost(Number(e.target.value))}
      className="w-32 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-800 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition appearance-none"
      min={0}
      placeholder="0"
    />
    <style jsx>{`
      input[type="number"]::-webkit-inner-spin-button,
      input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      input[type="number"] {
        -moz-appearance: textfield;
      }
    `}</style>
  </div>
  </div>
          <div className="flex items-center gap-2 mt-5">
            <input
              type="checkbox"
              checked={showOnlyUnbought}
              onChange={(e) => setShowOnlyUnbought(e.target.checked)}
              className="accent-primary-500"
            />
            <label className="block text-sm font-medium text-gray-700">Show only unbought</label>
          </div>
        </div>

      </div>


      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-6">
        {filteredRewards.length === 0 ? (
          <p className="text-muted-foreground">No rewards found</p>
        ) : (
          filteredRewards.map((reward) => (
            <div
              key={reward.id}
              className="border border-gray-200 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{reward.title}</h3>
                <button
                  onClick={() => {
                    setSelectedReward(reward);
                    setIsEditOpen(true);
                  }}
                  className="text-gray-500 hover:text-primary-500 transition"
                  title="Edit Reward"
                >
                  ⚙️
                </button>
              </div>
              <p className="text-sm text-gray-600">
                {reward.description ?? 'No description'}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="bg-primary/10 text-primary rounded-full px-3 py-0.5 text-sm font-medium">
                  ★ {reward.starCost}
                </span>
                <Button
                  size="sm"
                  onClick={() => handleBuyReward(reward.id)}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition"
                >
                  Buy
                </Button>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedReward && (
        <UpdateRewardDialog
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          rewardId={selectedReward.id}
          currentTitle={selectedReward.title}
          currentDescription={selectedReward.description}
          currentStarCost={selectedReward.starCost}
          onUpdated={() => onRefreshReward()}
        />
      )}
    </section>
  );
}
