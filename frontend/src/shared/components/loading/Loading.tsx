import React from 'react'

export function Loading({ text = 'Loading...' }: { text?: string }) {
	return (
		<div className='flex h-full w-full items-center justify-center p-8'>
			<div className='flex flex-col items-center gap-4'>
				<div className='border-t-primary h-12 w-12 animate-spin rounded-full border-4 border-gray-300'></div>
				<p className='text-foreground text-lg font-medium'>{text}</p>
			</div>
		</div>
	)
}
