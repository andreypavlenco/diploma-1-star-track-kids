'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import {
  useAcceptInvitationMutation,
  useCheckUserExistsQuery,
  useGetInvitationInfoQuery
} from '@/graphql/generated/output'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '@/app/providers/AuthProvider'

export default function AcceptInvitationPage() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const router = useRouter()
  const { profile, isProfileReady } = useAuthContext()
  const [acceptInvitation] = useAcceptInvitationMutation()
  const [isTriggered, setIsTriggered] = useState(false)

  const { data: invitationData, loading: loadingInvitation } = useGetInvitationInfoQuery({
    variables: { token: token || '' },
    skip: !token
  })
  const invitedEmail = invitationData?.getInvitationInfo?.email || ''

  const { data: checkUserData, loading: loadingCheckUser } = useCheckUserExistsQuery({
    variables: { email: invitedEmail },
    skip: !invitedEmail
  })

  useEffect(() => {
    if (!token) {
      toast.error('Недійсне посилання на запрошення')
      router.replace('/')
      return
    }

    if (!isProfileReady || loadingInvitation || loadingCheckUser) return

    if (!profile?.id) {
      localStorage.setItem('pendingInvitationToken', token)
      toast('Увійдіть або зареєструйтесь, щоб прийняти запрошення')

      const encodedEmail = encodeURIComponent(invitedEmail)
      const encodedToken = encodeURIComponent(token)

      if (checkUserData?.checkUserExists) {
        router.push(`/sign-in?email=${encodedEmail}`)
      } else {
        router.push(`/sign-up?email=${encodedEmail}&token=${encodedToken}`)
      }
      return
    }

    if (isTriggered) return
    setIsTriggered(true)

    const run = async () => {
      const toastId = toast.loading('Приймаємо запрошення...')

      try {
        const result = await acceptInvitation({ variables: { token } })

        if (result.data?.acceptInvitation) {
          toast.success('Запрошення прийнято!', { id: toastId })
          router.push('/')
          router.refresh()
        } else {
          toast.error('Не вдалося прийняти запрошення', { id: toastId })
        }
      } catch (err) {
        console.error('❌ Помилка GraphQL:', err)
        toast.error('Помилка при прийомі запрошення')
      }
    }

    run()
  }, [token, profile, isProfileReady, isTriggered, invitedEmail, checkUserData?.checkUserExists, loadingInvitation, loadingCheckUser])

  return (
    <div className="flex min-h-[50vh] items-center justify-center p-4">
      <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
        <h1 className="mb-2 text-xl font-semibold text-gray-800">
          Прийом запрошення…
        </h1>
        <p className="text-sm text-gray-500">
          Будь ласка, зачекайте. Ми додаємо вас до кімнати.
        </p>
      </div>
    </div>
  )
}
