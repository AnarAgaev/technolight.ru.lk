import { ContentLayout } from "@/ui"
import { Box, Flex } from "@chakra-ui/react"
import { PageHeading } from "@/ui"

export const Messages = () => {
	return (
		<ContentLayout>
			<Flex direction={{ base: "column", md: "row" }} gap="4" justify="space-between">
				<PageHeading>Сообщения</PageHeading>
			</Flex>

			<Box>
				Messages
			</Box>
		</ContentLayout>
	)
}