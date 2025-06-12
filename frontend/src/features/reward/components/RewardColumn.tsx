'use client';

import React, { useState } from 'react';
import { RewardType } from '../type';
import { CreateRewardForm } from './create-reward.form';
import { Button } from '@/shared/ui-kit/ui/button';
import { useRouter } from 'next/navigation';
import UpdateRewardDialog from './UpdateRewardDialog';
import clsx from 'clsx';

type RewardColumnProps = {
  rewards?: RewardType[];
  onRefreshReward: () => void;
  boughtRewardIds?: string[];
};

const gradientOptions = [
  'from-green-200 via-blue-100 to-purple-200',
  'from-yellow-200 via-orange-100 to-red-200',
  'from-teal-200 via-green-100 to-lime-200',
  'from-pink-200 via-purple-100 to-indigo-200',
  'from-blue-100 via-cyan-100 to-teal-100',
];

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

  const handleBuyReward = (title: string) => {
    alert(`Купити винагороду: ${title}`);
  };

  const filteredRewards = rewards.filter((reward) => {
    const meetsStarCost = reward.starCost >= minStarCost;
    const isUnbought = showOnlyUnbought ? !boughtRewardIds.includes(reward.id) : true;
    return meetsStarCost && isUnbought;
  });

  return (
    <section className="border border-gray-300 bg-white flex flex-1 flex-col rounded-xl shadow-md mx-auto max-w-7xl">
      
      {/* Заголовок */}
      <header className="bg-gradient-to-r from-green-200 via-lime-100 to-yellow-100 flex items-center justify-between rounded-t-xl px-6 py-4 shadow-inner">
        <div className='flex text-2xl gap-1'>🎁
        <h2 className=" font-bold bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent drop-shadow">
          Винагороди
        </h2>
        </div>
        <CreateRewardForm onRefreshReward={onRefreshReward} />
      </header>

      {/* Фільтри */}
      <div className="flex flex-wrap items-center justify-between px-6 py-4 gap-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center gap-4 flex-wrap">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Мінімальна вартість ★</label>
            <input
              type="number"
              value={minStarCost === 0 ? '' : minStarCost}
              onChange={(e) => setMinStarCost(Number(e.target.value))}
              className="w-32 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-800 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
              min={0}
              placeholder="0"
            />
          </div>
          <div className="flex items-center gap-2 mt-6">
            <input
              type="checkbox"
              checked={showOnlyUnbought}
              onChange={(e) => setShowOnlyUnbought(e.target.checked)}
              className="accent-green-500"
            />
            <label className="text-sm text-gray-700">Показати лише некуплені</label>
          </div>
        </div>
      </div>

      {/* Список винагород */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
        {filteredRewards.length === 0 ? (
          <p className="text-muted-foreground">Немає доступних винагород</p>
        ) : (
          filteredRewards.map((reward, index) => (
            <div
              key={reward.id}
              className={clsx(
                "rounded-xl shadow-md p-5 hover:shadow-xl hover:scale-[1.01] transition cursor-pointer border border-gray-200",
                "bg-gradient-to-br",
                gradientOptions[index % gradientOptions.length]
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{reward.title}</h3>
                <button
                  onClick={() => {
                    setSelectedReward(reward);
                    setIsEditOpen(true);
                  }}
                  className="text-gray-600 hover:text-green-600 transition"
                  title="Редагувати винагороду"
                >
                  ⚙️
                </button>
              </div>

              <p className="text-sm text-gray-700">
                {reward.description ?? '— Опис відсутній —'}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="bg-white/70 text-green-800 border border-green-300 rounded-full px-3 py-1 text-sm font-medium shadow-sm">
                  ★ {reward.starCost}
                </span>
                <Button
                  size="sm"
                  onClick={() => handleBuyReward(reward.title)}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full px-4 py-1 shadow"
                >
                  Купити
                </Button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Модальне вікно редагування */}
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
