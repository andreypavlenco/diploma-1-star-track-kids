'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FiAlertTriangle, FiLock } from 'react-icons/fi'

interface ErrorProps {
	error: Error
	reset?: () => void
}

function getFriendlyMessage(error: Error): string {
	const message = error.message
	console.log('[ERROR MESSAGE]:', message)

	if (message.includes('UserRole')) {
		return 'Обрана роль недійсна. Будь ласка, оберіть правильну роль зі списку.'
	}

	if (message.includes('NetworkError')) {
		return 'Проблема з підключенням до сервера. Перевірте інтернет або спробуйте пізніше.'
	}

	if (message.includes('UNAUTHENTICATED')) {
		return 'Сеанс завершено або ви не увійшли до системи. Будь ласка, авторизуйтесь для продовження.'
	}

	if (message.includes('roles')) {
		return 'У вас немає прав доступу для виконання цієї дії. Можливо, ваш обліковий запис не має необхідної ролі. Зверніться до адміністратора.'
	}

	if (message.includes('FORBIDDEN')) {
		return 'У вас немає прав для виконання цієї дії.'
	}

	if (message.includes('https://go.apollo.dev')) {
		return 'Виникла помилка на сервері. Спробуйте пізніше.'
	}

	return 'Сталася невідома помилка. Спробуйте ще раз або зверніться до підтримки.'
}

export default function Error({ error, reset }: ErrorProps) {
	const router = useRouter()

	useEffect(() => {
		console.error('[APP ERROR]:', error)
	}, [error])

	const message = error.message
	const isForbidden = message.includes('FORBIDDEN') || message.includes('roles')
	const isUnauthenticated = message.includes('User not authenticated')

	const backgroundClass = isForbidden
		? 'bg-yellow-50 border-yellow-200 text-yellow-800'
		: isUnauthenticated
		? 'bg-blue-50 border-blue-200 text-blue-800'
		: 'bg-red-50 border-red-200 text-red-700'

	const icon = isForbidden ? (
		<FiLock size={44} className="text-yellow-500" />
	) : isUnauthenticated ? (
		<FiLock size={44} className="text-blue-500" />
	) : (
		<FiAlertTriangle size={44} className="text-red-500" />
	)

	const title = isForbidden
		? 'Обмежений доступ'
		: isUnauthenticated
		? 'Необхідна авторизація'
		: 'Щось пішло не так'

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center px-4">
  <div className="w-full max-w-lg rounded-3xl border border-green-200 bg-gradient-to-br from-green-50 via-white to-lime-50 px-8 py-10 shadow-2xl animate-fadeInZoom">
    
    {/* Icon */}
    <div className="mb-4 flex justify-center">
      <FiLock size={48} className="text-green-500" />
    </div>

    {/* Title */}
    <h2 className="text-center text-2xl font-bold text-green-700 mb-2">
      Необхідна авторизація
    </h2>

    {/* Message */}
    <p className="text-center text-base text-green-800 mb-6">
      Щоб продовжити, будь ласка, увійдіть у свій обліковий запис або зареєструйтесь.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button
        onClick={() => router.push('/sign-in')}
        className="rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-600"
      >
        🔐 Увійти
      </button>
      <button
        onClick={() => router.push('/sign-up')}
        className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-green-700 border border-green-300 shadow-sm transition hover:bg-green-50"
      >
        📝 Зареєструватися
      </button>
    </div>
  </div>
</div>


	)
}
