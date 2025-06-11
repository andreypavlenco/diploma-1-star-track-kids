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
	AlertDialogTrigger
} from '@/shared/ui-kit/ui/alert-dialog'
import { Button } from '@/shared/ui-kit/ui/button'

export default function SignOutDialog() {
	const router = useRouter()
	const client = useApolloClient()
	const { setProfile } = useAuthContext()
	const [logoutUser] = useLogoutUserMutation() //{
	//     refetchQueries: [FindProfileDocument],
	//     awaitRefetchQueries: true
	// })

	const handleLogout = async () => {
		try {
			const response = await logoutUser()
			console.log('Response:', response)
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
			<AlertDialogContent className='animate-fadeInZoom max-w-md'>
				<AlertDialogHeader className='relative mb-2'>
					{/* Добавь крестик если хочешь */}
				</AlertDialogHeader>
				<p className='px-4 py-2 text-center'>
					Вы действительно хотите выйти?
				</p>
				<AlertDialogFooter>
					<AlertDialogCancel asChild>
						<Button type='button' variant='secondary'>
							Відмінити
						</Button>
					</AlertDialogCancel>
					<AlertDialogAction asChild>
						<Button type='button' onClick={handleLogout}>
							Підтвердити вихід
						</Button>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
