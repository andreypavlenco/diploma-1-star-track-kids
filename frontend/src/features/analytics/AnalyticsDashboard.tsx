import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts'

import { useGetAnalyticsDataQuery } from '@/graphql/generated/output'

import Error from '@/shared/components/error/Error'
import { Loading } from '@/shared/components/loading/Loading'
import { Card, CardContent } from '@/shared/ui-kit/ui/card'

const pastelGradients = [
	'bg-gradient-to-br from-lime-100 via-green-50 to-yellow-50',
	'bg-gradient-to-br from-orange-100 via-pink-50 to-red-50',
	'bg-gradient-to-br from-blue-100 via-sky-50 to-cyan-50',
	'bg-gradient-to-br from-fuchsia-100 via-purple-50 to-indigo-50',
	'bg-gradient-to-br from-rose-100 via-pink-50 to-orange-50'
]

export default function AnalyticsDashboard() {
	const { data, loading, error } = useGetAnalyticsDataQuery()
	if (loading) return <Loading />
	if (error) return <Error error={error} />

	const {
		userCountByRole,
		topUsersByStars,
		questCompletionsByDay,
		totalRewardsPurchased,
		topBoosts,
		roomUserCounts
	} = data

	return (
		<div className='mx-auto flex min-h-screen flex-1 flex-col gap-5 overflow-hidden rounded-xl border bg-[#f7fbe9] shadow-md'>
			<div className='border-b bg-gradient-to-r from-green-100 via-lime-50 to-yellow-100 px-6 py-4 shadow-sm'>
				<h1 className='bg-gradient-to-r from-green-700 to-lime-500 bg-clip-text text-2xl font-bold text-transparent drop-shadow'>
					🌿 Аналітика
				</h1>
			</div>
			<div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
				<div
					className={`rounded-xl p-4 text-gray-800 shadow-md ${pastelGradients[0]}`}
				>
					<h2 className='mb-2 text-lg font-semibold'>
						Користувачі за ролями
					</h2>
					<ul className='space-y-1 text-sm'>
						{userCountByRole.map((role: any) => (
							<li key={role.role}>
								<span className='font-bold'>{role.role}</span>:{' '}
								{role.count}
							</li>
						))}
					</ul>
				</div>

				<div
					className={`rounded-xl p-4 text-center text-gray-800 shadow-md ${pastelGradients[1]}`}
				>
					<h2 className='mb-2 text-lg font-semibold'>
						Всього придбано нагород
					</h2>
					<p className='text-5xl font-bold text-green-700'>
						{totalRewardsPurchased}
					</p>
				</div>

				<div
					className={`rounded-xl p-4 text-gray-800 shadow-md ${pastelGradients[2]}`}
				>
					<h2 className='mb-2 text-lg font-semibold'>ТОП бусти</h2>
					<ul className='space-y-1 text-sm'>
						{topBoosts.map((boost: any) => (
							<li key={boost.name}>
								<span className='font-medium'>
									{boost.name}
								</span>
								: {boost.activationCount}
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className='mb-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
				<div
					className={`rounded-xl p-4 text-gray-800 shadow-md ${pastelGradients[3]}`}
				>
					<h2 className='mb-3 text-lg font-semibold'>
						ТОП користувачі за зірками
					</h2>
					<table className='w-full rounded border border-gray-200 text-sm'>
						<thead className='bg-white'>
							<tr>
								<th className='p-2 text-left'>Email</th>
								<th className='p-2 text-right'>Зірки</th>
							</tr>
						</thead>
						<tbody>
							{topUsersByStars.map((user: any) => (
								<tr
									key={user.id}
									className='border-t hover:bg-white/40'
								>
									<td className='p-2'>{user.email}</td>
									<td className='p-2 text-right'>
										{user.stars}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div
					className={`rounded-xl p-4 text-gray-800 shadow-md ${pastelGradients[4]}`}
				>
					<h2 className='mb-3 text-lg font-semibold'>
						Кількість виконаних квестів
					</h2>
					<ResponsiveContainer width='100%' height={200}>
						<BarChart data={questCompletionsByDay}>
							<CartesianGrid strokeDasharray='3 3' />
							<XAxis dataKey='date' fontSize={12} />
							<YAxis allowDecimals={false} />
							<Tooltip />
							<Bar
								dataKey='count'
								fill='#4ade80'
								radius={[4, 4, 0, 0]}
							/>
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>

			<div
				className={`rounded-xl p-4 text-gray-800 shadow-md ${pastelGradients[0]}`}
			>
				<h2 className='mb-3 text-lg font-semibold'>
					Кількість учасників у кімнатах
				</h2>
				<ul className='grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3'>
					{roomUserCounts.map((room: any, index: number) => (
						<li
							key={room.roomName}
							className={`rounded-lg px-3 py-2 break-words shadow-sm ${pastelGradients[index % pastelGradients.length]}`}
						>
							<span className='font-medium'>{room.roomName}</span>
							: {room.userCount}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
