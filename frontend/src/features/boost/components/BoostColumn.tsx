'use client'

import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { useListBoost } from '../hook'
import { BoostType } from '../type'

import { Button } from '@/shared/ui-kit/ui/button'
import {
	useActivateBoostMutation,
	useGetActiveBoostsQuery,
} from '@/graphql/generated/output'
import { Loading } from '@/shared/components/loading/Loading'
import Error from '@/shared/components/error/Error'

const gradientOptions = [
	'from-green-200 via-blue-100 to-purple-200',
	'from-yellow-200 via-orange-100 to-red-200',
	'from-pink-200 via-purple-100 to-indigo-200',
	'from-teal-200 via-green-100 to-lime-200',
	'from-blue-100 via-cyan-100 to-teal-100',
]

export function BoostColumn() {
	const { data, loading, error } = useListBoost()
	const boosts: BoostType[] = data?.listAllBoosts || []

	const [activateBoost, { loading: activating }] = useActivateBoostMutation()
	const {
		data: activeData,
		refetch: refetchActive,
	} = useGetActiveBoostsQuery({ fetchPolicy: 'no-cache' })

	const [activeBoostIds, setActiveBoostIds] = useState<Set<string>>(new Set())
	const [boostMap, setBoostMap] = useState<Record<string, string>>({})

	useEffect(() => {
		if (activeData?.getActiveBoosts) {
			const ids = new Set<string>()
			const map: Record<string, string> = {}
			activeData.getActiveBoosts.forEach((boost) => {
				ids.add(boost.boostId)
				map[boost.boostId] = boost.expiresAt
			})
			setActiveBoostIds(ids)
			setBoostMap(map)
		}
	}, [activeData])

	const handleActivate = async (boostId: string) => {
		try {
			await activateBoost({ variables: { boostId } })
			const { data: updated } = await refetchActive()
			if (updated?.getActiveBoosts) {
				const ids = new Set<string>()
				const map: Record<string, string> = {}
				updated.getActiveBoosts.forEach((b) => {
					ids.add(b.boostId)
					map[b.boostId] = b.expiresAt
				})
				setActiveBoostIds(ids)
				setBoostMap(map)
			}
		} catch (err) {
			console.error('Activation error:', err)
		}
	}

	if (loading) return <Loading />
	if (error) return <Error error={error} />

	return (
		<div className="flex flex-1 flex-col overflow-hidden rounded-xl border bg-white shadow-md">
			{/* Заголовок з градієнтом */}
			<div className="bg-gradient-to-r from-green-100 via-lime-50 to-yellow-100 px-6 py-4 border-b shadow-sm">
				<h2 className="text-xl font-bold bg-gradient-to-r from-green-700 to-lime-500 bg-clip-text text-transparent drop-shadow">
					⚡ Бустери
				</h2>
			</div>

			<div className="flex-1 space-y-4 overflow-y-auto p-6">
				{boosts.length === 0 ? (
					<p className="text-gray-500">Немає доступних бустів</p>
				) : (
					boosts.map((boost, index) => {
						const isActive = activeBoostIds.has(boost.id)
						const expiresAt = boostMap[boost.id]
						const gradient = gradientOptions[index % gradientOptions.length]

						return (
							<div
								key={boost.id}
								className={clsx(
									'rounded-xl p-5 border shadow-md hover:shadow-xl transition-all duration-200 transform hover:scale-[1.01] animate-fadeIn',
									'bg-gradient-to-br',
									gradient,
									isActive
										? 'border-green-400'
										: 'border-yellow-300'
								)}
							>
								<div className="flex items-center justify-between">
									<div className="space-y-1">
										<p className="text-base font-semibold text-gray-800">{boost.name}</p>
										<p className="text-sm text-gray-700">{boost.description}</p>
										<p className="text-sm text-gray-600">
											⏳ Тривалість: {boost.durationHours} год
										</p>
										{isActive && expiresAt && (
											<p className="text-xs text-gray-500">
												Діє до:{' '}
												{new Date(expiresAt).toLocaleTimeString([], {
													hour: '2-digit',
													minute: '2-digit',
												})}
											</p>
										)}
									</div>
									<Button
										variant={isActive ? 'secondary' : 'default'}
										size="sm"
										disabled={isActive || activating}
										onClick={() => handleActivate(boost.id)}
										className={clsx(
											'transition',
											isActive && 'bg-green-500 text-white hover:bg-green-600'
										)}
									>
										{activating && !isActive
											? 'Активація...'
											: isActive
											? 'Активний'
											: 'Активувати'}
									</Button>
								</div>
							</div>
						)
					})
				)}
			</div>
		</div>
	)
}
