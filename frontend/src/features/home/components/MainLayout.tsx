'use client'

import Image from 'next/image'
import { PiStarFill } from 'react-icons/pi'

import { Progress } from '@/shared/ui-kit/ui/progress'

export default function MainLayout({ profile }) {
	return (
		<section className='animate-fadeIn delay-75'>
			<div className='relative mt-6 flex w-full items-center gap-6 overflow-hidden rounded-xl border border-green-100 bg-gradient-to-br from-green-50 via-lime-50 to-yellow-50 px-8 py-6 shadow-xl backdrop-blur-lg'>
				{/* Decorative background glow */}
				<div className='pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-green-300/20 blur-3xl' />
				<div className='pointer-events-none absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-yellow-300/20 blur-2xl' />

				{/* Avatar */}
				<Image
					src='/avatar.png'
					alt='avatar'
					width={96}
					height={96}
					className='ring-border z-10 h-24 w-24 rounded-lg object-cover ring-2'
				/>

				{/* User info */}
				<div className='z-10 flex-1'>
					<p className='text-lg font-semibold text-gray-800'>
						{profile?.email}
					</p>

					{/* Stars */}
					<div className='mt-3 flex items-center gap-3'>
						<PiStarFill className='h-6 w-6 shrink-0 animate-pulse text-yellow-400 drop-shadow' />

						<Progress
							value={profile?.stars}
							className='h-2 flex-1 bg-green-100'
							style={{
								animation: 'grow 1.2s ease-out forwards'
							}}
						/>

						<p className='w-8 text-right font-mono text-gray-800'>
							{profile?.stars}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
