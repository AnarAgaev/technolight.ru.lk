import { ContentLayout, PageHeading } from "@/ui"
import { ChevronLeft } from "lucide-react"
import { Flex, Grid, GridItem, Icon, IconButton, VStack, Heading, Box, Image, Text, HStack, Badge } from "@chakra-ui/react"

const cardStyle = {
	w: "full",
	p: {base: '3', md: "4"},
	border: "none",
	borderRadius: "6px",
	boxShadow: "0 0 1px 0 rgba(24, 24, 27, 0.30), 0 4px 8px 0 rgba(24, 24, 27, 0.10)"
}


export const Contacts = () => {
	return (
		<ContentLayout>
			<Flex direction={{ base: "column", md: "row" }} gap="4" justify="space-between">
				<Flex align="center" gap="2">
					<IconButton
						aria-label="Назад"
						variant="ghost"
						borderRadius="2px"
						minW="initial"
						boxSize={{ base: "20px", md: "24px" }}
						_hover={{ bg: "gray.100" }}
					>
						<Icon as={ChevronLeft} boxSize={{ base: "20px", md: "24px" }} />
					</IconButton>
					<PageHeading>Контакты</PageHeading>
				</Flex>
			</Flex>

			<Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={{ base: '4', md: '6' }}>
				<GridItem {...cardStyle}>
					<VStack gap="4" align="stretch">
						<Heading size="md">Ваш менеджер</Heading>
						<Flex
							direction={{base: "column", sm: 'row', md: "column", lg: 'row'}}
							align="flex-start"
							w="full"
							gap="4"
							overflow="hidden"
							border="1px solid"
							borderColor="gray.200"
							borderRadius="6px"
						>
							<Box w={{base: "full", sm: "33.3%", md: "full", lg:"185px"}} aspectRatio={1} position="relative">
								<Image src="https://i.pravatar.cc/300" position="absolute" top="0" left="0" w="full" h="full" objectFit="cover" />
							</Box>
							<VStack gap="2" p="4" align="stretch">
								<Heading size={{base: "md", lg: 'lg'}}>Анжела Анжеловна</Heading>
								<Text color="gray.600" fontSize="sm">
									Персональный менеджер
								</Text>
								<HStack gap="2" flexWrap="wrap" mt={{lg: "2"}}>
									<Badge variant="solid" background="gray.100" color="gray.800" fontSize="sm" fontWeight="400" lineHeight="20px">+7(495)7654321</Badge>
									<Badge variant="solid" background="gray.100" color="gray.800" fontSize="sm" fontWeight="400" lineHeight="20px">доб. 107</Badge>
								</HStack>
							</VStack>
						</Flex>
					</VStack>
				</GridItem>
				<GridItem {...cardStyle}>Написать сообщение менеджеру</GridItem>
			</Grid>
		</ContentLayout>
	)
}