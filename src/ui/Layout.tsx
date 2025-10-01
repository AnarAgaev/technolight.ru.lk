import { Grid, GridItem, Box, Container } from '@chakra-ui/react'
import { Sidebar, FooterNavigation } from '@/components'
import { Outlet } from 'react-router'

export const Layout = () => (
	<Grid
		templateColumns={{ base: "1fr", md: "70px 1fr", xl: "360px 1fr" }}
		minH="100vh"
		position="relative"
	>
		{/* Sidebar */}
		<GridItem
			position={{ base: "fixed", md: "sticky" }}
			top={{ base: 0 }}
			left={{ base: 0, md: "auto" }}
			w={{ base: "100%", md: "auto" }}
			h={{ base: "36px", md: "auto" }}
			zIndex={10}
			bg="white"
			boxShadow={{
				base: "none",
				md: "0 0 1px 0 rgba(24, 24, 27, 0.30), 0 4px 8px 0 rgba(24, 24, 27, 0.10)"
			}}
		>
			<Sidebar />
		</GridItem>

		{/* Content */}
		<GridItem
			as={Box}
			pt={{ base: "36px", md: 0 }} // отступ, чтобы контент не залез под фиксированный sidebar
			pb={{ base: "46px", md: 0 }} // отступ, чтобы контент не залез под фиксированный footer
			overflowY="auto"
		>
			<Container as="section">
				<Outlet />
			</Container>
		</GridItem>

		{/* Footer Navigation */}
		<GridItem
			display={{ md: "none" }}
			position="fixed"
			bottom="0"
			left="0"
			w="100%"
			h="46px"
			zIndex={10}
			bg="white"
			borderTop="1px solid"
			borderColor="gray.200"
		>
			<FooterNavigation />
		</GridItem>
	</Grid>
)