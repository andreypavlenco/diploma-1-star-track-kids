'use client'

import React from 'react'

import { RoomColumnProps } from '../type'

import { CreateRoomForm } from './create-room.form'

export function RoomColumn({ rooms, onRefreshRoom }: RoomColumnProps) {
	return (
		<div className='flex flex-1 flex-col overflow-hidden rounded-lg border bg-white shadow-sm'>
			<div className='flex gap-10 border-b bg-gray-100 px-4 py-2'>
				<h2 className='text-lg font-semibold'>Rooms</h2>
				<CreateRoomForm onRefreshRoom={() => onRefreshRoom()} />
			</div>
			<div className='flex-1 space-y-3 overflow-y-auto p-4'>
				{rooms.length === 0 ? (
					<p className='text-gray-500'>No rooms</p>
				) : (
					rooms.map(rm => (
						<div
							key={rm.id}
							className='cursor-pointer rounded-md border px-3 py-2 transition hover:bg-gray-50'
						>
							<span className='text-sm font-medium'>
								{rm.room.name}
							</span>
						</div>
					))
				)}
			</div>
		</div>
	)
}
