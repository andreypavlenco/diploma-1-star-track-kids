'use client'

import Image from 'next/image'
import { PiStarFill } from 'react-icons/pi'

import { Progress } from '@/shared/ui-kit/ui/progress'

export default function MainLayout({ profile }) {
	return (
		<section className='animate-fadeIn delay-75'>
			<div className='mt-6 flex w-full items-center gap-6 rounded-xl bg-white/70 px-8 py-6 shadow-lg backdrop-blur'>
				<Image
					src='/avatar.png'
					alt='avatar'
					width={96}
					height={96}
					className='ring-border h-24 w-24 rounded-lg object-cover ring-2'
				/>

				{/* Info */}
				<div className='flex-1'>
					{/* email */}
					<p className='text-foreground/90 text-lg font-semibold'>
						{profile?.email}
					</p>

					{/* Stars */}
					<div className='mt-3 flex items-center gap-3'>
						<PiStarFill className='animate-bounce-slow h-6 w-6 shrink-0 text-yellow-400 drop-shadow-sm' />
						<Progress
							value={profile?.stars}
							className='h-2 flex-1'
							/* додає 1.2s анімації заповнення */
							style={{
								animation: 'grow 1.2s ease-out forwards'
							}}
						/>
						<p className='w-8 text-right tabular-nums'>
							{profile?.stars}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
