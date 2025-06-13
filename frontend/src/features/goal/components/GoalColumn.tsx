'use client'

import clsx from 'clsx'
import React, { useState } from 'react'

import { GoalType } from '../type'

import UpdateGoalDialog from './UpdateGoalDialog'
import { CreateGoalForm } from './create-goal.form'

interface GoalColumnProps {
	goals: GoalType[]
	refetchGoal: () => void
}

const gradientOptions = [
	'from-green-200 via-blue-100 to-purple-200',
	'from-yellow-200 via-orange-100 to-red-200',
	'from-teal-200 via-green-100 to-lime-200',
	'from-pink-200 via-purple-100 to-indigo-200',
	'from-blue-100 via-cyan-100 to-teal-100'
]

export function GoalColumn({ goals, refetchGoal }: GoalColumnProps) {
	const [selectedGoal, setSelectedGoal] = useState<GoalType | null>(null)
	const [isEditOpen, setIsEditOpen] = useState(false)

	return (
		<section className='flex flex-1 flex-col rounded-xl border border-gray-200 bg-white shadow-md'>
			{/* Градієнтний заголовок */}
			<header className='flex items-center justify-between rounded-t-xl bg-gradient-to-r from-green-200 via-lime-100 to-yellow-100 px-6 py-4 shadow-sm'>
				<div className='flex gap-1 text-2xl'>
					{' '}
					🎯{' '}
					<h2 className='bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text font-bold text-transparent drop-shadow'>
						Цілі
					</h2>
				</div>
				<CreateGoalForm onRefreshGoal={refetchGoal} />
			</header>

			{/* Список цілей */}
			<div className='grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-2'>
				{goals.length === 0 ? (
					<p className='text-muted-foreground'>
						Немає створених цілей
					</p>
				) : (
					goals.map((goal, index) => (
						<div
							key={goal.id}
							onClick={() => {
								setSelectedGoal(goal)
								setIsEditOpen(true)
							}}
							className={clsx(
								'cursor-pointer rounded-xl border p-5 shadow-md transition-all duration-200 hover:scale-[1.01] hover:shadow-xl',
								'bg-gradient-to-br',
								gradientOptions[index % gradientOptions.length],
								goal.completedAt
									? 'border-green-300'
									: 'border-yellow-300'
							)}
						>
							<div className='mb-2 flex items-center justify-between'>
								<h3 className='text-lg font-semibold text-gray-800'>
									{goal.title}
								</h3>
								<button
									onClick={e => {
										e.stopPropagation()
										setSelectedGoal(goal)
										setIsEditOpen(true)
									}}
									className='text-gray-600 transition hover:text-green-600'
									title='Редагувати ціль'
								>
									⚙️
								</button>
							</div>

							<p className='text-sm text-gray-700'>
								{goal.description ?? '— опис відсутній —'}
							</p>

							<div className='mt-4 flex items-center justify-between'>
								<span
									className={clsx(
										'rounded-full px-3 py-1 text-sm font-medium shadow-sm',
										goal.completedAt
											? 'border border-green-400 bg-white/70 text-green-800'
											: 'border border-yellow-300 bg-white/70 text-yellow-700'
									)}
								>
									{goal.completedAt
										? '✅ Завершено'
										: '⏳ В процесі'}
								</span>

								<span className='rounded-full border border-green-300 bg-white/80 px-3 py-1 text-sm font-medium text-green-700 shadow-sm'>
									★ {goal.starReward ?? 0}
								</span>
							</div>
						</div>
					))
				)}
			</div>

			{/* Модалка редагування */}
			{selectedGoal && (
				<UpdateGoalDialog
					isOpen={isEditOpen}
					onClose={() => setIsEditOpen(false)}
					goalId={selectedGoal.id}
					currentTitle={selectedGoal.title}
					currentDescription={selectedGoal.description}
					currentStarReward={selectedGoal.starReward ?? 0}
					onUpdated={refetchGoal}
				/>
			)}
		</section>
	)
}
