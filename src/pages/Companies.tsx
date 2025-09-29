import { ContentLayout } from "@/ui"
import { Box, Button, Flex } from "@chakra-ui/react"
import { PageHeading } from "@/ui"
import { Plus } from 'lucide-react'

export const Companies = () => {
	return (
		<ContentLayout>
			<Flex direction={{base: "column", md: "row"}} gap="4" justify="space-between">
				<PageHeading>Мои юр.лица</PageHeading>
				<Button size="sm">
					<Plus />
					Добавить юр.лицо
				</Button>
			</Flex>

			<Box>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, officia?
			</Box>
		</ContentLayout>
	)
}