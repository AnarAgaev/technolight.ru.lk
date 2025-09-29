
import { ContentLayout } from "@/ui"
import { Box, Flex } from "@chakra-ui/react"
import { PageHeading } from "@/ui"

export const Orders = () => {
	return (
		<ContentLayout>
			<Flex direction={{ base: "column", md: "row" }} gap="4" justify="space-between">
				<PageHeading>Заказы</PageHeading>
			</Flex>
			<Box>
				Orders
			</Box>
		</ContentLayout>
	)
}