'use client'

import { Dashboard } from '@/components/home/Dashboard'
import MainLayout from '@/components/home/MainLayout'

export default function HomePage() {
	// const { data, loading, error } = useListAllBoostsQuery({
	// 	fetchPolicy: 'cache-and-network',
	// 	nextFetchPolicy: 'cache-first'
	// })
	return (
		<div>
			<MainLayout />
			<Dashboard />
		</div>
	)
}
