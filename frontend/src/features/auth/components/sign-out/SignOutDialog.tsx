'use client'

import { useApolloClient } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { GoX } from 'react-icons/go'

import { useAuthContext } from '@/app/providers/AuthProvider'

import { useLogoutUserMutation } from '@/graphql/generated/output'

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle
} from '@/shared/ui-kit/ui/alert-dialog'
import { Button } from '@/shared/ui-kit/ui/button'

export default function SignOutDialog() {
	const router = useRouter()
	const client = useApolloClient()
	const { setProfile } = useAuthContext()
	const [logoutUser] = useLogoutUserMutation()

	const handleLogout = async () => {
		try {
			const response = await logoutUser()
			if (response?.data?.logoutUser) {
				await client.clearStore()
				setProfile(null)
				router.push('/')
			} else {
				console.error('Logout did not return expected data')
			}
		} catch (error) {
			console.error('Logout error:', error)
		}
	}

	return (
		<AlertDialog
			defaultOpen
			onOpenChange={open => {
				if (!open) router.back()
			}}
		>
			<AlertDialogContent className='animate-fadeInZoom max-w-md rounded-2xl border bg-white p-6 shadow-xl'>
				<AlertDialogHeader className='relative mb-5'>
					<AlertDialogTitle className='flex items-center gap-2 text-2xl font-bold text-gray-900 sm:text-xl'>
						🚪 Вихід з акаунту
					</AlertDialogTitle>
					<AlertDialogCancel
						className='absolute right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-800 shadow-sm transition hover:bg-gray-300 hover:text-black focus-visible:ring-2 focus-visible:ring-red-400'
						aria-label='Закрити'
					>
						<GoX size={18} />
					</AlertDialogCancel>
				</AlertDialogHeader>

				<p className='px-4 text-center text-xl text-gray-700'>
					Ви впевнені, що хочете вийти зі свого акаунту?
				</p>

				<AlertDialogFooter className='mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end'>
					<AlertDialogCancel asChild>
						<Button
							type='button'
							variant='secondary'
							className='w-full rounded-md border bg-gray-100 px-6 text-gray-800 transition hover:bg-gray-200 sm:w-auto'
						>
							Відмінити
						</Button>
					</AlertDialogCancel>

					<AlertDialogAction asChild>
						<Button
							type='button'
							onClick={handleLogout}
							className='w-full rounded-md bg-red-500 px-6 font-semibold text-white transition hover:bg-red-600 sm:w-auto'
						>
							Підтвердити вихід
						</Button>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
