'use client'

import { useParams } from 'next/navigation'

import { Dashboard } from '@/features/room/components/RoomDashboard'

export default function RoomIndexPage() {
	const params = useParams()
	const roomId = params?.id as string
	console.log(roomId)
	return (
		<div>
			<Dashboard />
		</div>
	)
}
