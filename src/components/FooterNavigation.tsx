import {Grid, GridItem, Icon, Text} from '@chakra-ui/react'
import {Bell, File, House, Settings} from 'lucide-react'
import {Link, NavLink} from 'react-router'

const navLinkTextStyles = {
	as: 'span' as const,
	color: 'black',
	textAlign: 'center' as const,
	fontSize: 'xs',
	fontWeight: 'normal',
	lineHeight: '16px',
}

const navLinkItemStyles = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	w: '100%',
	h: '100%',
	py: 1,
}

const navLinkIconStyles = {
	boxSize: 4,
	color: 'black',
}

const pages = [
	{label: 'Главная', value: '', icon: House},
	{label: 'Заказы', value: 'orders', icon: File},
	{label: 'Сообщения', value: 'messages', icon: Bell},
	{label: 'Профиль', value: 'profile', icon: Settings},
]

export const FooterNavigation = () => {
	return (
		<Grid templateColumns="repeat(4, 1fr)" h="100%" px="4">
			{pages.map((page) =>
				// ! Валидность URL адреса проверяем просто через наличие точки,
				// ! так как каждый URL содержит точку, а роут нет
				page.value.includes('.') ? (
					<Link
						key={page.value}
						to={page.value}
						target="_blank"
						rel="noopener noreferrer"
						style={{textDecoration: 'none'}}
					>
						<GridItem {...navLinkItemStyles}>
							<Icon as={page.icon} {...navLinkIconStyles} />
							<Text {...navLinkTextStyles}>{page.label}</Text>
						</GridItem>
					</Link>
				) : (
					<NavLink
						key={page.value}
						to={`/${page.value}`}
						style={{textDecoration: 'none', width: '100%'}}
					>
						{({isActive}) => (
							<GridItem
								{...navLinkItemStyles}
								bg={isActive ? 'gray.100' : 'transparent'}
							>
								<Icon as={page.icon} {...navLinkIconStyles} />
								<Text {...navLinkTextStyles}>{page.label}</Text>
							</GridItem>
						)}
					</NavLink>
				),
			)}
		</Grid>
	)
}
