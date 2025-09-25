import {  Grid, GridItem, Text, Icon } from "@chakra-ui/react"
import { House, File, Bell, Settings } from "lucide-react"

const navLinkTextStyles = {
	as: "span" as const,
	color: "black",
	textAlign: "center" as const,
	fontSize: "xs",
	fontWeight: "normal",
	lineHeight: "16px"
}

const navLinkItemStyles = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	w: "100%",
	h: "100%",
	py: 1
}

const navLinkIconStyles = {
	boxSize: 4,
	color: "black"
}

const FooterNavigation = () => {
	return (
		<Grid templateColumns="repeat(4, 1fr)" h="100%" px="4">
			<GridItem {...navLinkItemStyles}>
				<Icon {...navLinkIconStyles}>
					<House/>
				</Icon>
				<Text {...navLinkTextStyles}>Главная</Text>
			</GridItem>

			<GridItem {...navLinkItemStyles}>
				<Icon {...navLinkIconStyles}>
					<File/>
				</Icon>
				<Text {...navLinkTextStyles}>Заказы</Text>
			</GridItem>

			<GridItem {...navLinkItemStyles}>
				<Icon {...navLinkIconStyles}>
					<Bell/>
				</Icon>
				<Text {...navLinkTextStyles}>Сообщения</Text>
			</GridItem>

			<GridItem {...navLinkItemStyles}>
				<Icon {...navLinkIconStyles}>
					<Settings/>
				</Icon>
				<Text {...navLinkTextStyles}>Профиль</Text>
			</GridItem>
		</Grid>
	)
}

export { FooterNavigation }