'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

import { RoomColumnProps } from '../type'

import { CreateRoomForm } from './create-room.form'

export function RoomColumn({ rooms, onRefreshRoom }: RoomColumnProps) {
	const router = useRouter()

	return (
		<div className='flex flex-1 flex-col overflow-hidden rounded-lg border bg-white shadow-sm'>
			<div className='flex gap-10 border-b bg-gray-100 px-4 py-2'>
				<h2 className='text-lg font-semibold'>Rooms</h2>
				<CreateRoomForm onRefreshRoom={onRefreshRoom} />
			</div>
			<div className='flex-1 overflow-y-auto p-4'>
				{rooms.length === 0 ? (
					<p className='text-gray-500'>No rooms</p>
				) : (
					<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
						{rooms.map(roomItem => (
							<div
								key={roomItem.id}
								onClick={() =>
									router.push(`/room/${roomItem.id}`)
								}
								className='cursor-pointer rounded-lg border p-4 shadow transition hover:bg-gray-50'
							>
								<h3 className='mb-2 text-lg font-semibold'>
									{roomItem.name ?? 'No name'}
								</h3>
								<p className='text-sm text-gray-600'>
									Created by:{' '}
									{roomItem.createUser?.email ?? 'Unknown'}
								</p>
								<p className='text-sm text-gray-600'>
									Quests: {roomItem.quests?.length ?? 0}
								</p>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
