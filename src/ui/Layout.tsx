import { Grid, GridItem, Box } from '@chakra-ui/react'
import { FooterNavigation } from '@/ui'
interface Props {
	children: React.ReactNode
}

const Layout = ({ children }: Props) => (
	<Grid
		templateColumns={{
			base: "1fr",
			md: "70px 1fr",
			xl: "360px 1fr",
		}}
		gap={{ base: 0, md: 5 }}
		minH="100vh"
		position="relative"
	>

		{/* Sidebar */}
		<GridItem
			bg="gray.100"
			position={{ base: "fixed", md: "relative" }}
			top={{ base: 0, md: "auto" }}
			left={{ base: 0, md: "auto" }}
			w={{ base: "100%", md: "auto" }}
			h={{ base: "36px", md: "auto" }}
			zIndex={10}
		>
			Sidebar
		</GridItem>


		{/* Content */}
		<GridItem
			as={Box}
			pt={{ base: "36px", md: 0 }} // отступ, чтобы контент не залез под фиксированный sidebar
			pb={{ base: "46px", md: 0 }} // отступ, чтобы контент не залез под фиксированный footer
			overflowY="auto"
		>
			{children}
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

export { Layout }
