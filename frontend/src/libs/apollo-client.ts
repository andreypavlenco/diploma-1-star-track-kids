import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const httpLink = createHttpLink({
	uri: process.env.NEXT_PUBLIC_SERVER_URL,
	credentials: 'include'
})

export const client = new ApolloClient({
	link: httpLink,
	// headers: {
	// 	cookies
	// },
	cache: new InMemoryCache()
})
