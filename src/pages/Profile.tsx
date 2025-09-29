import { ContentLayout } from "@/ui"
import { Box, Flex } from "@chakra-ui/react"
import { PageHeading } from "@/ui"

export const Profile = () => {
	return (
		<ContentLayout>
			<Flex direction={{ base: "column", md: "row" }} gap="4" justify="space-between">
				<PageHeading>Профиль и настройки</PageHeading>
			</Flex>
			<Box>
				Profile and settings
			</Box>
		</ContentLayout>
	)
}