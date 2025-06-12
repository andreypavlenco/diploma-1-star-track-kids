'use client'

import React from 'react'


import { GoalColumn } from './GoalColumn'
import { useListGoal } from '../hook'
import { Loading } from '@/shared/components/loading/Loading'
import Error from '@/shared/components/error/Error'

export function GoalDashboard() {
	const { goals, loading, error,  refetch } = useListGoal()

		if (loading) return <Loading/>
		if (error) return <Error error={error}/>

	return (
		<div className='mx-auto max-w-7xl p-6 flex h-full w-full gap-4 px-4 py-6'>
			<GoalColumn goals={goals}  refetchGoal={()=>refetch()}/>
		</div>
	)
}
