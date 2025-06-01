type LinksMenu = {
	title: string
	href: string
	current?: boolean
}

export const useLinksMenu = (): LinksMenu[] => {
	return [
		{
			title: 'Home',
			href: '/',
			current: true
		},
		{
			title: 'Rooms',
			href: '/room',
			current: false
		},
		{
			title: 'Rewards',
			href: '/reward',
			current: false
		},
		{
			title: 'Goal',
			href: '/goal',
			current: false
		},
		{
			title: 'Boost',
			href: '/boost',
			current: false
		},
		{
			title: 'Quests',
			href: '/quest',
			current: false
		}
	]
}
