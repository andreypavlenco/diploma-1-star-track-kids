

import Link from 'next/link'




import { useLinksMenu } from '@/shared/hooks/useLinksMenu'
import { getProfileOnServer } from '@/app/providers/auth.server';


export async function Header  ()  {
	const links = useLinksMenu()
	 const profile = await getProfileOnServer();
	return (
		   <header  className="from-primary to-secondary sticky top-0 z-30 h-20 bg-gradient-to-r shadow-lg" >
			<div className='mx-auto flex h-full max-w-7xl items-center justify-between px-6'>
				<Link
					href='/'
					className='text-primary-foreground animate-fadeIn text-2xl font-extrabold tracking-tight drop-shadow-sm'
				>
					StarTaskKids
				</Link>

				<nav className='animate-fadeIn hidden gap-6 delay-75 md:flex'>
					{links.map(link => (
						<Link
							key={link.href}
							href={link.href}
							className='text-foreground focus-visible:ring-ring text-sm font-medium transition hover:opacity-80 focus-visible:ring-2 focus-visible:ring-offset-2'
						>
							{link.title}
						</Link>
					))}
				</nav>

				<div className='animate-fadeIn flex items-center gap-4 delay-100'>
					{loading ? null : profile ? (
						<>
							<span className='text-foreground text-sm font-medium'>
								Hello, {profile.email}
							</span>
							<button
								onClick={() => handleLogout()}
								className='bg-destructive/20 text-destructive hover:bg-destructive/30 focus-visible:ring-destructive rounded-lg px-4 py-1.5 text-sm font-medium transition focus-visible:ring-2 focus-visible:ring-offset-2'
							>
								Logout
							</button>
						</>
					) : (
						<>
							<Link
								href='/sign-in'
								className='text-foreground rounded-lg bg-white/20 px-4 py-1.5 text-sm font-medium transition hover:bg-white/30'
							>
								Login
							</Link>
							<Link
								href='/sign-up'
								className='bg-primary-foreground text-primary hover:bg-primary-foreground/90 focus-visible:ring-ring rounded-lg px-4 py-1.5 text-sm font-medium transition focus-visible:ring-2 focus-visible:ring-offset-2'
							>
								Register
							</Link>
						</>
					)}
				</div>

				<button
					aria-label='Menu'
					className='text-primary-foreground hover:bg-primary/10 focus-visible:ring-ring inline-flex h-10 w-10 items-center justify-center rounded-md focus-visible:ring-2 md:hidden'
				>
					<svg
						className='h-6 w-6'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</button>
			</div>
		</header>
	)
}
