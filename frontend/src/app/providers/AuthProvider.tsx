'use client'

import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState
} from 'react'

import { useFindProfileQuery } from '@/graphql/generated/output'

type AuthContextType = {
	profile: any | null
	loading: boolean
	setProfile: (p: any | null) => void
	refetch: () => Promise<void>
	isProfileReady: boolean
}

const AuthContext = createContext<AuthContextType>({
	profile: null,
	loading: true,
	setProfile: () => {},
	refetch: async () => {}
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const {
		data,
		loading,
		refetch: rawRefetch
	} = useFindProfileQuery({
		fetchPolicy: 'network-only'
	})

	const [profile, setProfile] = useState<any | null>(null)
    const [isProfileReady, setIsProfileReady] = useState(false)
	// Оновлюємо profile, коли приходять нові дані
	useEffect(() => {
  setIsProfileReady(true)
  if (data?.findProfile) {
    setProfile(data.findProfile)
  }
}, [data])

	// Правильна реалізація refetch
	const refetch = async () => {
		const result = await rawRefetch()
		if (result?.data?.findProfile) {
			setProfile(result.data.findProfile)
		}
	}

	return (
		<AuthContext.Provider value={{ profile, loading, setProfile, refetch , isProfileReady }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuthContext = () => useContext(AuthContext)
