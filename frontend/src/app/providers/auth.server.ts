// app/providers/auth.server.ts
import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { cookies } from 'next/headers'

import { FindProfileDocument } from '@/graphql/generated/output'

export async function getProfileOnServer() {
	// собираем заголовок cookie из входящего запроса
	const cookieStore = await cookies()
	const cookieHeader = cookieStore
		.getAll()
		.map(c => `${c.name}=${c.value}`)
		.join('; ')

	// SSR-link, пробрасывающий куки
	const ssrLink = new HttpLink({
		uri: process.env.NEXT_PUBLIC_SERVER_URL,
		credentials: 'include',
		fetch: (url, init) =>
			fetch(url, {
				...init,
				headers: {
					...init?.headers,
					cookie: cookieHeader
				}
			})
	})

	const errorLink = onError(({ graphQLErrors }) => {
		// точно так же поглощаем неавторизацию
	})

	const apollo = new ApolloClient({
		ssrMode: true,
		link: from([errorLink, ssrLink]),
		cache: new InMemoryCache()
	})

	try {
		const { data } = await apollo.query({ query: FindProfileDocument })
		return data.findProfile
	} catch (err: any) {
		const code = err?.graphQLErrors?.[0]?.extensions?.code
		if (code === 'UNAUTHENTICATED') return null
		throw err
	}
}
