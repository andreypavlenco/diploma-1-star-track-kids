// src/shared/context/AuthContext.tsx
'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

import { useFindProfileQuery } from '@/shared/api'

// src/shared/context/AuthContext.tsx

// Типы профиля
type Profile = { email: string } | null

type AuthContextType = {
	profile: Profile
	loading: boolean
	refetch: () => Promise<any>
	setProfile: React.Dispatch<React.SetStateAction<Profile>>
}

// Создаём контекст
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Провайдер
export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [profile, setProfile] = useState<Profile>(null)

	const { data, loading } = useFindProfileQuery({
		fetchPolicy: 'network-only'
	})

	useEffect(() => {
		if (data?.findProfile) {
			setProfile(data.findProfile)
		} else {
			setProfile(null)
		}
	}, [data])

	return (
		<AuthContext.Provider
			value={{ profile, loading, refetch: async () => {}, setProfile }}
		>
			{children}
		</AuthContext.Provider>
	)
}

// Хук для использования контекста
export function useAuthContext() {
	const ctx = useContext(AuthContext)
	if (!ctx) throw new Error('useAuthContext must be inside AuthProvider')
	return ctx
}
