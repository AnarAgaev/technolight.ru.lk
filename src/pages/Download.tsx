import { ContentLayout } from "@/ui"
import { Box, Flex } from "@chakra-ui/react"
import { PageHeading } from "@/ui"

export const Download = () => {
	return (
		<ContentLayout>
			<Flex direction={{ base: "column", md: "row" }} gap="4" justify="space-between">
				<PageHeading>Скачать</PageHeading>
			</Flex>

			<Box>
				Download
			</Box>
		</ContentLayout>
	)
}