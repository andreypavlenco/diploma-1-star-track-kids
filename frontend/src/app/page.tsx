'use client'

import { useListAllBoostsQuery } from '@/graphql/generated/output'

export default function Home() {
	const { data, loading, error } = useListAllBoostsQuery({
		fetchPolicy: 'cache-and-network',
		nextFetchPolicy: 'cache-first'
	})
	return (
		<div>
			<h1>Boosts</h1>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{data && data.listAllBoosts && data.listAllBoosts.length > 0 ? (
				<ul>
					{data.listAllBoosts.map(boost => (
						<li key={boost.id}>
							<h2>{boost.name}</h2>
							<p>{boost.description}</p>
						</li>
					))}
				</ul>
			) : (
				<p>No boosts available.</p>
			)}
		</div>
	)
}
