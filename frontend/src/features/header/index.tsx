import Image from 'next/image'
import Link from 'next/link'

import { useLinksMenu } from '@/shared/hooks/useLinksMenu'

export function Header() {
	const links = useLinksMenu()
	return (
		<div>
			<header className='flex items-center justify-between bg-gray-800 p-4 text-white'>
				<Link href='/' className='flex items-center'>
					<Image
						src='/logo.png'
						alt='Logo'
						width={40}
						height={40}
						className='mr-2'
					/>
					<span className='text-xl font-bold'>MyApp</span>
				</Link>
				<nav className='flex space-x-4'>
					{links.map(link => (
						<Link
							key={link.href}
							href={link.href}
							className='hover:underline'
						>
							{link.title}
						</Link>
					))}
				</nav>
				<Link href='/sign-in' className='text-blue-400 hover:underline'>
					Login
				</Link>
				<Link href='/sign-up' className='text-blue-400 hover:underline'>
					Register
				</Link>
			</header>
		</div>
	)
}
