'use client'

import Image from 'next/image'
import { PiStarFill } from 'react-icons/pi'

import { useFindProfileQuery } from '@/graphql/generated/output'

import { Progress } from '@/shared/ui-kit/ui/progress'

export default function MainLayout() {
	const { data, loading, error } = useFindProfileQuery()
	console.log(data)

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div className='flex max-w-full gap-5 bg-emerald-400 pt-5 pl-5'>
			<Image
				src='/avatar.png'
				alt='avatar'
				className='pb-4'
				width={100}
				height={100}
			/>
			<div className=''>
				<div>
					<p>{data?.findProfile?.email}</p>
				</div>
				<div className='flex gap-2'>
					<span className='text-2xl text-yellow-400'>
						<PiStarFill />
					</span>
					<Progress
						value={data?.findProfile?.stars}
						className='h-3 w-[100%] content-center'
					/>
					<p>{data?.findProfile?.stars}</p>
				</div>
			</div>
		</div>
	)
}
