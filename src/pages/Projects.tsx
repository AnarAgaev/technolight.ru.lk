import {Box, Flex} from '@chakra-ui/react'
import {ContentLayout, PageHeading} from '@/ui'

const Projects = () => {
	return (
		<ContentLayout>
			<Flex
				direction={{base: 'column', md: 'row'}}
				gap="4"
				justify="space-between"
			>
				<PageHeading>Мои проекты</PageHeading>
			</Flex>
			<Box>Projects</Box>
		</ContentLayout>
	)
}

export default Projects
