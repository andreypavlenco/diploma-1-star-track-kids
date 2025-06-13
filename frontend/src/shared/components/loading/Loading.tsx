import React from 'react'

export function Loading({ text = 'Завантаження...' }: { text?: string }) {
	return (
		<div className='absolute inset-0 z-30 flex flex-col items-center justify-center gap-6 bg-white/80 backdrop-blur-sm'>
			{/* Хвильова анімація */}
			<div className='flex gap-2'>
				<span
					className='h-4 w-4 animate-bounce rounded-full bg-green-500'
					style={{ animationDelay: '0s' }}
				></span>
				<span
					className='h-4 w-4 animate-bounce rounded-full bg-green-500'
					style={{ animationDelay: '0.2s' }}
				></span>
				<span
					className='h-4 w-4 animate-bounce rounded-full bg-green-500'
					style={{ animationDelay: '0.4s' }}
				></span>
			</div>

			<p className='text-xl font-bold text-green-800 drop-shadow-sm'>
				{text}
			</p>
		</div>
	)
}
