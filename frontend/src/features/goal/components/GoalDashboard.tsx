'use client'

import React from 'react'


import { GoalColumn } from './GoalColumn'
import { useListGoal } from '../hook'
import { Loading } from '@/shared/components/loading/Loading'
import Error from '@/shared/components/error/Error'
import { GoalType } from '../type'

export function GoalDashboard() {
	const { data, loading, error,  refetch } = useListGoal({
		  fetchPolicy: 'network-only',
	})

		const goals: GoalType[] = data?.findGoal || []
		if (loading) return <Loading/>
		if (error) return <Error error={error}/>

	return (
		<div className='flex h-full w-full gap-4 px-4 py-6'>
			<GoalColumn goals={goals}  refetchGoal={()=>refetch()}/>
		</div>
	)
}
