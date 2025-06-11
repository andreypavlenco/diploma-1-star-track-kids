'use client'

import Link from 'next/link'

// import { useProfile } from '@/shared/hooks/useProfile'
import { useAuthContext } from '@/app/providers/AuthProvider'

import { useLinksMenu } from '@/shared/hooks/useLinksMenu'

export default function Header() {
	const links = useLinksMenu()
	const { profile } = useAuthContext()
	return (
		<header className='from-primary to-secondary sticky top-0 z-30 h-20 bg-gradient-to-r shadow-lg'>
			<div className='mx-auto flex h-full max-w-7xl items-center justify-between px-6'>
				<Link
					href='/'
					className='text-primary-foreground text-2xl font-extrabold'
				>
					StarTaskKids
				</Link>

				<nav className='hidden gap-6 md:flex'>
					{links.map(link => (
						<Link
							key={link.href}
							href={link.href}
							className='text-foreground text-sm font-medium hover:opacity-80'
						>
							{link.title}
						</Link>
					))}
				</nav>

				<div className='flex items-center gap-4'>
					{profile ? (
						<>
							<span className='text-sm'>
								Hello, {profile.email}
							</span>
							<Link
								href='/sign-out'
								className='text-foreground rounded bg-white/20 px-4 py-1'
							>
								Logout
							</Link>
						</>
					) : (
						<>
							<Link
								href='/sign-in'
								className='text-foreground rounded bg-white/20 px-4 py-1'
							>
								Login
							</Link>
							<Link
								href='/sign-up'
								className='bg-primary-foreground text-primary rounded px-4 py-1'
							>
								Register
							</Link>
						</>
					)}
				</div>
			</div>
		</header>
	)
}
