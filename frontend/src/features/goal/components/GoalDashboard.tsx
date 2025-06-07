'use client'

import React from 'react'

import { RewardColumn } from '../../reward/components/RewardColumn'

import { GoalColumn } from './GoalColumn'

export function GoalDashboard() {
	return (
		<div className='flex h-full w-full gap-4 px-4 py-6'>
			<GoalColumn />
			<RewardColumn />
		</div>
	)
}
