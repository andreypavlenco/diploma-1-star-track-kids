'use client'

import React from 'react'

import { useListGoal } from '../hook'

import { GoalColumn } from './GoalColumn'
import Error from '@/shared/components/error/Error'
import { Loading } from '@/shared/components/loading/Loading'

export function GoalDashboard() {
	const { goals, loading, error, refetch } = useListGoal()

	if (loading) return <Loading />
	if (error) return <Error error={error} />

	return (
		<div className='mx-auto flex h-full w-full max-w-7xl gap-4 p-6 px-4 py-6'>
			<GoalColumn goals={goals} refetchGoal={() => refetch()} />
		</div>
	)
}
