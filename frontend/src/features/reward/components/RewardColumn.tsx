'use client'

import clsx from 'clsx'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

import {
	FindRewardsForUserDocument,
	useCreateRewardPurchaseMutation
} from '@/graphql/generated/output'

import { RewardType } from '../type'

import UpdateRewardDialog from './UpdateRewardDialog'
import { CreateRewardForm } from './create-reward.form'
import { Button } from '@/shared/ui-kit/ui/button'
import { useAuthContext } from '@/app/providers/AuthProvider'

type RewardColumnProps = {
	rewards: RewardType[]
	boughtRewardIds: string[]
	onRefreshReward: () => void
	onRefreshProfile: () => void
}

const gradientOptions = [
	'from-green-200 via-blue-100 to-purple-200',
	'from-yellow-200 via-orange-100 to-red-200',
	'from-teal-200 via-green-100 to-lime-200',
	'from-pink-200 via-purple-100 to-indigo-200',
	'from-blue-100 via-cyan-100 to-teal-100'
]

export function RewardColumn({
	rewards,
	boughtRewardIds,
	onRefreshReward,
	onRefreshProfile
}: RewardColumnProps) {
	const [selectedReward, setSelectedReward] = useState<RewardType | null>(
		null
	)
	const [isEditOpen, setIsEditOpen] = useState(false)
	const [minStarCost, setMinStarCost] = useState(0)
	const [showOnlyUnbought, setShowOnlyUnbought] = useState(false)
	const [justBoughtId, setJustBoughtId] = useState<string | null>(null)

	const [buyReward] = useCreateRewardPurchaseMutation({
		refetchQueries: [{ query: FindRewardsForUserDocument }],
		awaitRefetchQueries: true
	})

	const { profile } = useAuthContext()

	const handleBuyReward = async (rewardId: string, title: string) => {
		try {
			const { data } = await buyReward({ variables: { rewardId } })

			if (data?.createRewardPurchase.success) {
				toast.success(`Винагороду "${title}" куплено!`)
				setJustBoughtId(rewardId)
				setTimeout(() => setJustBoughtId(null), 2000)
				await onRefreshReward()
				await onRefreshProfile()
			} else {
				const errorMessage =
					data?.createRewardPurchase.message ||
					`Не вдалося купити "${title}"`
				toast.error(errorMessage)
			}
		} catch {
			toast.error(` Помилка при покупці "${title}"`)
		}
	}

	const filteredRewards = rewards.filter(reward => {
		const meetsStarCost = reward.starCost >= minStarCost
		const isUnbought = showOnlyUnbought
			? !boughtRewardIds.includes(reward.id)
			: true
		return meetsStarCost && isUnbought
	})

	return (
		<section className='mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-hidden rounded-xl border border-gray-300 bg-white shadow-md'>
			<header className='flex flex-wrap items-center justify-between gap-4 rounded-t-xl bg-gradient-to-r from-green-200 via-lime-100 to-yellow-100 px-6 py-4 shadow-inner'>
				<div className='flex items-center gap-1 text-2xl'>
					🎁
					<h2 className='bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text font-bold text-transparent drop-shadow'>
						Винагороди
					</h2>
				</div>
				<div className='w-full sm:w-auto'>
					<CreateRewardForm onRefreshReward={onRefreshReward} />
				</div>
			</header>

			<div className='flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 bg-gray-50 px-6 py-4'>
				<div className='flex flex-wrap items-center gap-4'>
					<div>
						<label className='mb-1 block text-sm font-medium text-gray-700'>
							Мінімальна вартість ★
						</label>
						<input
							type='number'
							value={minStarCost === 0 ? '' : minStarCost}
							onChange={e => setMinStarCost(Number(e.target.value))}
							className='w-32 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-800 shadow-sm transition focus:border-green-500 focus:ring-2 focus:ring-green-200'
							min={0}
							placeholder='0'
						/>
					</div>
					<div className='mt-6 flex items-center gap-2'>
						<input
							type='checkbox'
							checked={showOnlyUnbought}
							onChange={e => setShowOnlyUnbought(e.target.checked)}
							className='accent-green-500'
						/>
						<label className='text-sm text-gray-700'>
							Показати лише некуплені
						</label>
					</div>
				</div>
			</div>

			<div className='grid grid-cols-1 gap-6 p-6 sm:grid-cols-2'>
				{filteredRewards.length === 0 ? (
					<p className='text-muted-foreground'>Немає доступних винагород</p>
				) : (
					filteredRewards.map((reward, index) => {
						const isBought = boughtRewardIds.includes(reward.id)
						const isJustBought = reward.id === justBoughtId

						return (
							<div
								key={reward.id}
								className={clsx(
									'relative cursor-pointer overflow-hidden rounded-xl border p-5 transition',
									isBought
										? 'border-gray-300 bg-gray-100 text-gray-700'
										: clsx(
											'hover:scale-[1.01] hover:shadow-xl',
											'bg-gradient-to-br',
											gradientOptions[index % gradientOptions.length],
											'border-gray-200 shadow-md'
										)
								)}
							>
								{isJustBought && (
									<div className='animate-fadeIn absolute inset-0 flex items-center justify-center bg-green-500/70 backdrop-blur-sm'>
										<span className='animate-bounce text-4xl text-white'>✅</span>
									</div>
								)}

								<div className='mb-2 flex items-center justify-between'>
									<h3 className='flex items-center gap-2 text-lg font-semibold'>
										{isBought && (
											<span className='text-xl text-green-600'>✅</span>
										)}
										{reward.title}
									</h3>
									<button
										onClick={() => {
											setSelectedReward(reward)
											setIsEditOpen(true)
										}}
										className='text-2xl text-gray-600 transition hover:text-green-600'
										title='Редагувати винагороду'
									>
										⚙️
									</button>
								</div>

								<p className='text-sm text-gray-700'>
									{reward.description ?? '— Опис відсутній —'}
								</p>

								<div className='mt-4 flex items-center justify-between'>
									<span className='rounded-full border border-green-300 bg-white/70 px-3 py-1 text-sm font-medium text-green-800 shadow-sm'>
										★ {reward.starCost}
									</span>
									<Button
										size='sm'
										disabled={isBought}
										onClick={() => handleBuyReward(reward.id, reward.title)}
										className={clsx(
											'rounded-full px-4 py-1 font-semibold shadow transition',
											isBought
												? 'cursor-not-allowed bg-gray-400 text-white'
												: 'bg-green-500 text-white hover:bg-green-600'
										)}
									>
										{isBought ? 'Куплено' : 'Купити'}
									</Button>
								</div>

								{profile?.role === 'PARENT' && reward.purchases.length > 0 && (
									<div className='mt-3 text-sm text-gray-700'>
										Куплено дітьми:
										<ul className='ml-4 list-disc'>
											{reward.purchases.map(p => (
												<li key={p.id}>👧 {p.child.email}</li>
											))}
										</ul>
									</div>
								)}
							</div>
						)
					})
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
	)
}
