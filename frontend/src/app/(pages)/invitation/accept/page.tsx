'use client'

import { useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useAcceptInvitationMutation,  } from '@/graphql/generated/output'
import { useProfile } from '@/shared/hooks/useProfile'

export default function AcceptInvitationPage() {
	const searchParams = useSearchParams()
	const router = useRouter()
	const token = searchParams.get('token')
  
	const { profile, loading: authLoading } = useProfile()
	const [acceptInvitation] = useAcceptInvitationMutation()
    console.log(profile)
	useEffect(() => {
		if (!token || authLoading) return

		if (!profile?.id) {
			router.push(`/sign-up?token=${token}`)
			return
		}
		const handleAccept = async () => {
			try {
				await acceptInvitation({ variables: { token } })
				router.push('/')
			} catch (error) {
				console.error('Помилка при прийнятті запрошення:', error)
				alert('Запрошення недійсне або прострочене.')
				router.push('/')
			}
		}

		handleAccept()
	}, [token, authLoading, router, acceptInvitation])

	return (
		<div className='p-6 text-center text-gray-600'>
			{authLoading ? 'Перевірка авторизації...' : 'Обробка запрошення...'}
		</div>
	)
}
