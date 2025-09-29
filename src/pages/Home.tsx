import { ContentLayout } from "@/ui"
import { Box, Flex } from "@chakra-ui/react"
import { PageHeading } from "@/ui"

export const Home = () => {
	return (
		<ContentLayout>
			<Flex direction={{ base: "column", md: "row" }} gap="4" justify="space-between">
				<PageHeading>Главная</PageHeading>
			</Flex>

			<Box>
				Home page
			</Box>
		</ContentLayout>
	)
}