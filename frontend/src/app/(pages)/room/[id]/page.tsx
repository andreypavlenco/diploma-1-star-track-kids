'use client'

import { useParams } from 'next/navigation'

import RoomDetailsPage from '@/features/room/components/RoomDetailsPage'

export default function RoomIndexPage() {
	const params = useParams()
	const roomId = params?.id as string
	return (
		<div className='p-4'>
			<RoomDetailsPage roomId={roomId} />
		</div>
	)
}
