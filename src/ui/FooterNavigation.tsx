import {  Grid, GridItem, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { HomeIcon, OrderIcon, BellIcon, SettingsIcon } from "@/ui/icons"

const FooterNavigation = () => {
	return (
		<Grid
			templateColumns="repeat(4, 1fr)"
			h="100%"
			px="4"
		>
			<GridItem h="100%">
				<LinkBox
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					w="100%"
					h="100%"
					py={1}
				>
					<HomeIcon size="sm" viewBox="0 0 16 16"/>
					<LinkOverlay href="#!">Главная</LinkOverlay>
				</LinkBox>
			</GridItem>

			<GridItem h="100%">
				<LinkBox
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					w="100%"
					h="100%"
					py={1}
				>
					<OrderIcon size="sm" viewBox="0 0 16 16"/>
					<LinkOverlay href="#!">Заказы</LinkOverlay>
				</LinkBox>
			</GridItem>

			<GridItem h="100%">
				<LinkBox
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					w="100%"
					h="100%"
					py={1}
				>
					<BellIcon size="sm" viewBox="0 0 16 16"/>
					<LinkOverlay href="#!">Сообщения</LinkOverlay>
				</LinkBox>
			</GridItem>

			<GridItem h="100%">
				<LinkBox
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					w="100%"
					h="100%"
					py={1}
				>
					<SettingsIcon size="sm" viewBox="0 0 16 16"/>
					<LinkOverlay href="#!">Профиль</LinkOverlay>
				</LinkBox>
			</GridItem>
		</Grid>
	)
}

export { FooterNavigation }