'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

import { useAuthContext } from '@/app/providers/AuthProvider'

import { useLinksMenu } from '@/shared/hooks/useLinksMenu'

export default function Header() {
	const links = useLinksMenu()
	const { profile } = useAuthContext()
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<header className='from-primary to-secondary sticky top-0 z-30 h-20 bg-gradient-to-r shadow-lg'>
			<div className='mx-auto flex h-full max-w-7xl items-center justify-between px-6'>
				<Link
					href='/'
					className='text-primary-foreground text-2xl font-extrabold'
				>
					StarTaskKids
				</Link>

				{/* Desktop Navigation */}
				<nav className='hidden gap-6 md:flex'>
					{links.map(link => (
						<Link
							key={link.href}
							href={link.href}
							className='text-foreground text-md font-medium hover:opacity-80'
						>
							{link.title}
						</Link>
					))}
				</nav>

				{/* Mobile toggle button */}
				<button
					className='text-foreground text-2xl md:hidden'
					onClick={() => setMenuOpen(prev => !prev)}
				>
					{menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
				</button>

				<div className='hidden items-center gap-4 md:flex'>
					{profile ? (
						<>
							<span className='text-sm'>
								Hello, {profile.email}
							</span>
							<Link
								href='/sign-out'
								className='text-foreground rounded bg-white/20 px-4 py-1'
							>
								Вихід
							</Link>
						</>
					) : (
						<>
							<Link
								href='/sign-in'
								className='text-foreground rounded bg-white/20 px-4 py-1'
							>
								Логін
							</Link>
							<Link
								href='/sign-up'
								className='bg-primary-foreground text-primary rounded px-4 py-1'
							>
								Зареєструватись
							</Link>
						</>
					)}
				</div>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className='animate-slideDown space-y-4 rounded-b-xl border-t bg-white/90 p-6 shadow-inner backdrop-blur md:hidden'>
					{links.map(link => (
						<Link
							key={link.href}
							href={link.href}
							className='block text-lg font-semibold text-gray-800 transition hover:text-green-600'
							onClick={() => setMenuOpen(false)}
						>
							{link.title}
						</Link>
					))}

					<div className='mt-4 flex flex-col gap-2 border-t pt-3'>
						{profile ? (
							<>
								<span className='text-sm text-gray-700'>
									Hello, {profile.email}
								</span>
								<Link
									href='/sign-out'
									className='rounded bg-red-100 px-4 py-2 text-center font-medium text-red-600 hover:bg-red-200'
								>
									Вихід
								</Link>
							</>
						) : (
							<>
								<Link
									href='/sign-in'
									className='rounded bg-blue-100 px-4 py-2 text-center font-medium text-blue-700 hover:bg-blue-200'
								>
									Логін
								</Link>
								<Link
									href='/sign-up'
									className='rounded bg-green-100 px-4 py-2 text-center font-medium text-green-700 hover:bg-green-200'
								>
									Зареєструватись
								</Link>
							</>
						)}
					</div>
				</div>
			)}
		</header>
	)
}
