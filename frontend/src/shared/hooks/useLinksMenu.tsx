type LinksMenu = {
	title: string
	href: string
	current?: boolean
}

export const useLinksMenu = (): LinksMenu[] => {
	return [
		{
			title: 'Головна',
			href: '/',
			current: true
		},
		{
			title: 'Кімнати',
			href: '/room',
			current: false
		},
		{
			title: 'Винагороди',
			href: '/reward',
			current: false
		},
		{
			title: 'Цілі',
			href: '/goal',
			current: false
		},
		{
			title: 'Буст',
			href: '/boost',
			current: false
		},
		{
			title: 'Квести',
			href: '/quest',
			current: false
		},
		{
			title: 'Аналітика',
			href: '/analytics',
			current: false
		}
	]
}
