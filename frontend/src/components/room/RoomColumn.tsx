// components/RewardColumn.tsx
'use client'

import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from '@/shared/ui-kit/ui/alert-dialog'
import { Button } from '@/shared/ui-kit/ui/button'
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog'
import React from 'react'
import { GoX } from 'react-icons/go'
import { CreateRoomForm } from './create-room.form'

// components/RewardColumn.tsx

// interface Reward {
// 	id: string | number
// 	title: string
// 	description: string
// 	starCost: number
// }

// interface RewardColumnProps {
// 	rewards: Reward[] | []
// }

type RoomType = {
	id: string
	name: string
}

type RoomMemberType = {
	id: string
	room: RoomType
}

interface RoomColumnProps {
	rooms: RoomMemberType[]
}

export function RoomColumn({ rooms }: RoomColumnProps[]) {
	return (
		<div className='flex flex-1 flex-col overflow-hidden rounded-lg border bg-white shadow-sm'>
			<div className='border-b bg-gray-100 px-4 py-2 flex gap-10'>
				<h2 className='text-lg font-semibold'>Rooms</h2>
                <AlertDialog>
			<AlertDialogTrigger asChild>
             <Button variant='outline'>Create Room</Button>
            </AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<div className='flex justify-end'>
						<AlertDialogCancel>
							<GoX size='30px' />
						</AlertDialogCancel>
					</div>
					<AlertDialogDescription>
					<CreateRoomForm/>
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter></AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
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
