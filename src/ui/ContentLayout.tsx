import { Box, Flex } from "@chakra-ui/react"

interface Props {
	children: [ React.ReactNode, React.ReactNode ] // ровно два элемента - заголовок и контент
}

export const ContentLayout = ({ children }: Props) => {
	if (children.length !== 2) {
		console.error('Компонент ContentLayout ожидает ровно ДВА дочерних узла! Заголовок и Контент.')
		return null
	}

	return (
		<Flex
			direction="column"
			align="stretch"
			justify="start"
			gap="6"
			h="100%"
			py="5"
			minH={{md: "100vh"}}
		>
			<Box flexShrink="0">
				{ children[0] }
			</Box>
			<Box flex="1" minH="0">
				{ children[1] }
			</Box>
		</Flex>
	)
}
