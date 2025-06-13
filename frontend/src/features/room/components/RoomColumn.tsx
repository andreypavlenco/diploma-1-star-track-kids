'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { RoomColumnProps } from '../type'

import RoomSettingsDialog from './RoomSettingsDialog'
import { CreateRoomForm } from './create-room.form'

const gradientClasses = [
	'from-green-200 via-blue-200 to-purple-200',
	'from-yellow-200 via-orange-200 to-red-200',
	'from-teal-200 via-green-100 to-lime-200',
	'from-pink-200 via-purple-100 to-indigo-200',
	'from-blue-100 via-cyan-100 to-teal-100'
]

export function RoomColumn({ rooms, onRefreshRoom }: RoomColumnProps) {
	const router = useRouter()

	return (
		<div className='flex flex-1 flex-col overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-[#f8fff4] via-[#fffde0] to-[#ffffff] shadow-md'>
			<div className='flex items-center justify-between rounded-t-xl border-b bg-gradient-to-r from-green-100 via-yellow-50 to-orange-100 px-6 py-4 shadow-sm backdrop-blur'>
				<h2 className='bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-2xl font-bold text-transparent drop-shadow'>
					🌿 Кімнати
				</h2>
				<CreateRoomForm onRefreshRoom={onRefreshRoom} />
			</div>

			<div className='flex-1 overflow-y-auto p-6'>
				{rooms.length === 0 ? (
					<p className='text-center text-gray-500'>
						Немає доступних кімнат.
					</p>
				) : (
					<div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2'>
						{rooms.map((room, index) => (
							<div
								key={room.id}
								className={clsx(
									'relative cursor-pointer rounded-xl p-5 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl',
									'text-black',
									'bg-gradient-to-br',
									gradientClasses[
										index % gradientClasses.length
									]
								)}
							>
								{/* Main Card */}
								<div
									onClick={() =>
										router.push(`/room/${room.id}`)
									}
								>
									<h3 className='mb-1 text-xl font-semibold drop-shadow-sm'>
										{room.name ?? 'Без назви'}
									</h3>
									<p className='text-sm text-black'>
										Створено:{' '}
										<span className='font-medium'>
											{room.createUser?.email ??
												'Невідомо'}
										</span>
									</p>
									<p className='text-sm text-black'>
										Квестів: {room.quests?.length ?? 0}
									</p>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
