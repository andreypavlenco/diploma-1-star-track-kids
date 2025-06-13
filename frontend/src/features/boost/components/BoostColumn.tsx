'use client'

import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import {
	useActivateBoostMutation,
	useGetActiveBoostsQuery
} from '@/graphql/generated/output'

import { useListBoost } from '../hook'
import { BoostType } from '../type'

import Error from '@/shared/components/error/Error'
import { Loading } from '@/shared/components/loading/Loading'
import { Button } from '@/shared/ui-kit/ui/button'

const gradientOptions = [
	'from-green-200 via-blue-100 to-purple-200',
	'from-yellow-200 via-orange-100 to-red-200',
	'from-pink-200 via-purple-100 to-indigo-200',
	'from-teal-200 via-green-100 to-lime-200',
	'from-blue-100 via-cyan-100 to-teal-100'
]

export function BoostColumn() {
	const { data, loading, error } = useListBoost()
	const boosts: BoostType[] = data?.listAllBoosts || []

	const [activateBoost, { loading: activating }] = useActivateBoostMutation()
	const { data: activeData, refetch: refetchActive } =
		useGetActiveBoostsQuery({ fetchPolicy: 'no-cache' })

	const [boostMap, setBoostMap] = useState<Record<string, string>>({})

	useEffect(() => {
		if (activeData?.getActiveBoosts) {
			const map: Record<string, string> = {}
			activeData.getActiveBoosts.forEach(boost => {
				map[boost.boost.id] = boost.expiresAt
			})
			setBoostMap(map)
		}
	}, [activeData])

	const handleActivate = async (boostId: string) => {
		const toastId = toast.loading('Активація бусту...')

		try {
			await activateBoost({ variables: { boostId } })

			const { data: updated } = await refetchActive()

			if (updated?.getActiveBoosts) {
				const map: Record<string, string> = {}
				updated.getActiveBoosts.forEach(b => {
					map[b.boost.id] = b.expiresAt
				})
				setBoostMap(map)

				toast.success('Буст активовано!', { id: toastId })
			} else {
				toast.error('Не вдалося активувати буст', { id: toastId })
			}
		} catch (err) {
			console.error('Activation error:', err)
			toast.error('Помилка при активації бусту', { id: toastId })
		}
	}

	if (loading) return <Loading />
	if (error) return <Error error={error} />

	return (
		<div className='flex flex-1 flex-col overflow-hidden rounded-xl border bg-white shadow-md'>
			<div className='border-b bg-gradient-to-r from-green-100 via-lime-50 to-yellow-100 px-6 py-4 shadow-sm'>
				<h2 className='bg-gradient-to-r from-green-700 to-lime-500 bg-clip-text text-2xl font-bold text-transparent drop-shadow'>
					⚡ Бустери
				</h2>
			</div>

			<div className='flex-1 space-y-4 overflow-y-auto p-6'>
				{boosts.length === 0 ? (
					<p className='text-gray-500'>Немає доступних бустів</p>
				) : (
					boosts.map((boost, index) => {
						const expiresAt = boostMap[boost.id]
						const isCurrentlyActive =
							expiresAt &&
							new Date(expiresAt).getTime() > Date.now()

						const gradient =
							gradientOptions[index % gradientOptions.length]
						const nextAvailableTime = expiresAt
							? new Date(
									new Date(expiresAt).getTime() + 1000
								).toLocaleTimeString([], {
									hour: '2-digit',
									minute: '2-digit'
								})
							: null

						return (
							<div
								key={boost.id}
								className={clsx(
									'animate-fadeIn transform rounded-xl border p-5 shadow-md transition-all duration-200',
									isCurrentlyActive
										? 'cursor-not-allowed border-gray-300 bg-gray-100 text-gray-600'
										: clsx(
												'cursor-pointer hover:scale-[1.01] hover:shadow-xl',
												'bg-gradient-to-br',
												gradient,
												'border-yellow-300'
											)
								)}
							>
								<div className='flex items-center justify-between'>
									<div className='space-y-1'>
										<p className='text-base font-semibold'>
											{boost.name}
										</p>
										<p className='text-sm'>
											{boost.description}
										</p>
										<p className='text-sm'>
											⏳ Тривалість: {boost.durationHours}{' '}
											год
										</p>
										{isCurrentlyActive && expiresAt && (
											<p className='text-xs'>
												✅ Активний до:{' '}
												{new Date(
													expiresAt
												).toLocaleTimeString([], {
													hour: '2-digit',
													minute: '2-digit'
												})}
											</p>
										)}
									</div>
									<Button
										variant='secondary'
										size='sm'
										disabled={
											isCurrentlyActive || activating
										}
										onClick={() => handleActivate(boost.id)}
										className={clsx(
											'transition',
											isCurrentlyActive
												? 'bg-gray-400 text-white hover:bg-gray-500'
												: 'bg-green-500 text-white hover:bg-green-600'
										)}
									>
										{activating && !isCurrentlyActive
											? 'Активація...'
											: isCurrentlyActive
												? 'Активний'
												: 'Активувати'}
									</Button>
								</div>

								{isCurrentlyActive && expiresAt && (
									<div className='mt-3 text-right text-xs text-gray-500'>
										🔄 Повторна активація можлива з{' '}
										{nextAvailableTime}
									</div>
								)}
							</div>
						)
					})
				)}
			</div>
		</div>
	)
}
