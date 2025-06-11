'use client'

interface ErrorProps {
	error: Error
	reset?: () => void
}

export default function Error({ error, reset }: ErrorProps) {
	return (
		<div className='flex flex-col items-center justify-center p-8'>
			<div className='animate-fadeInShake bg-destructive/10 border-destructive w-full max-w-md rounded-lg border p-6'>
				<h3 className='text-destructive mb-2 text-center text-lg font-semibold'>
					Oops!
				</h3>
				<p className='text-destructive/90 text-center text-sm'>
					{error.message}
				</p>
			</div>
		</div>
	)
}
