import {
	Badge,
	Box,
	Button,
	Field,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	Icon,
	Image,
	Input,
	InputGroup,
	Link,
	List,
	Text,
	Textarea,
	VStack,
} from '@chakra-ui/react'
import {
	CalendarClock,
	ChevronLeft,
	Mail,
	MessageCircle,
	Phone,
} from 'lucide-react'
import {NavLink} from 'react-router'
import {ContentLayout, PageHeading} from '@/ui'

const cardStyle = {
	w: 'full',
	p: {base: '3', md: '4'},
	border: 'none',
	borderRadius: '6px',
	boxShadow:
		'0 0 1px 0 rgba(24, 24, 27, 0.30), 0 4px 8px 0 rgba(24, 24, 27, 0.10)',
}

const inputStyle = {
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	_placeholder: {
		color: 'fg.subtle',
		fontSize: 'sm',
		fontWeight: 'light',
	},
}

const textareaStyle = {
	minHeight: '140px',
	_placeholder: {
		color: 'fg.subtle',
		fontSize: 'sm',
		fontWeight: 'light',
	},
}

const Contacts = () => {
	return (
		<ContentLayout>
			<Flex
				direction={{base: 'column', md: 'row'}}
				gap="4"
				justify="space-between"
			>
				<Flex align="center" gap="2">
					<NavLink to="/">
						<Icon
							as={ChevronLeft}
							boxSize={6}
							color="black"
							_hover={{color: 'gray.400'}}
						/>
					</NavLink>
					<PageHeading>Контакты</PageHeading>
				</Flex>
			</Flex>

			<Grid
				templateColumns={{base: '1fr', md: 'repeat(2, 1fr)'}}
				gap={{base: '4', md: '6'}}
			>
				<GridItem {...cardStyle}>
					<VStack gap="4" align="stretch">
						<Heading size="md">Ваш менеджер</Heading>

						<Flex
							direction={{base: 'column', sm: 'row', md: 'column', lg: 'row'}}
							align="flex-start"
							w="full"
							gap="4"
							overflow="hidden"
							border="1px solid"
							borderColor="gray.200"
							borderRadius="6px"
						>
							<Box
								background="gray.100"
								w={{base: 'full', sm: '33.3%', md: 'full', lg: '185px'}}
								aspectRatio={1}
								position="relative"
							>
								<Image
									loading="lazy"
									src="https://i.pravatar.cc/300"
									position="absolute"
									top="0"
									left="0"
									w="full"
									h="full"
									objectFit="cover"
								/>
							</Box>
							<VStack gap="2" p="4" align="stretch">
								<Heading size={{base: 'md', lg: 'lg'}}>
									Анжела Анжеловна
								</Heading>
								<Text color="gray.600" fontSize="sm">
									Персональный менеджер
								</Text>
								<HStack gap="2" flexWrap="wrap" mt={{lg: '2'}}>
									<Badge
										variant="solid"
										background="gray.100"
										color="gray.800"
										fontSize="sm"
										fontWeight="400"
										lineHeight="20px"
									>
										+7(495)7654321
									</Badge>
									<Badge
										variant="solid"
										background="gray.100"
										color="gray.800"
										fontSize="sm"
										fontWeight="400"
										lineHeight="20px"
									>
										доб. 107
									</Badge>
								</HStack>
							</VStack>
						</Flex>

						<VStack align="stretch" gap="1">
							<Heading size="sm">Центральный шоурум в г.Москва:</Heading>
							<VStack align="stretch" gap="3" maxW={{xl: '70%'}}>
								<Text color="gray.600" fontSize="sm" lineHeight="20px">
									ARTPLAY центр дизайна, Москва, 105120, Нижняя Сыромятническая,
									д. 10 стр. 2
								</Text>
								<List.Root
									display="flex"
									flexDirection="column"
									gap="3"
									listStyle="none"
									color="gray.400"
									fontSize="sm"
									fontStyle="normal"
									fontWeight="normal"
									lineHeight="20px"
								>
									<List.Item display="flex" alignItems="center" gap="1.5">
										<Icon as={CalendarClock} boxSize="16px" />
										ПН-ПТ 10:00-18:00
									</List.Item>
									<List.Item display="flex" alignItems="center" gap="1.5">
										<Icon as={Phone} boxSize="16px" />
										<Link color="inherit" href="tel:+74957977251">
											+7 495 797-72-51
										</Link>
									</List.Item>
									<List.Item display="flex" alignItems="center" gap="1.5">
										<Icon as={MessageCircle} boxSize="16px" />
										<Link color="inherit" href="tel:+74957470564">
											+7 495 747-05-64
										</Link>
									</List.Item>
									<List.Item display="flex" alignItems="center" gap="1.5">
										<Icon as={Mail} boxSize="16px" />
										<Link color="inherit" href="mailto:order@technolight.ru">
											order@technolight.ru
										</Link>
									</List.Item>
								</List.Root>
							</VStack>
						</VStack>
					</VStack>
				</GridItem>

				<GridItem {...cardStyle}>
					<VStack gap="4" align="flex-start">
						<Heading size="md">Написать сообщение менеджеру</Heading>

						{/* Для того чтобы показать ошибку, добавляем аттрибут invalid к узлу <Field.Root/> */}
						<Field.Root>
							<Field.Label
								fontWeight="semibold"
								fontSize={{base: '12px', lg: '14px'}}
							>
								Email
							</Field.Label>
							<InputGroup>
								<Input
									name="email"
									placeholder="username@username.com"
									{...inputStyle}
								/>
							</InputGroup>
							<Field.ErrorText>Сообщение об ошибке</Field.ErrorText>
						</Field.Root>

						{/* Для того чтобы показать ошибку, добавляем аттрибут invalid к узлу <Field.Root/> */}
						<Field.Root>
							<Field.Label
								fontWeight="semibold"
								fontSize={{base: '12px', lg: '14px'}}
							>
								Текст сообщения
							</Field.Label>
							<Textarea {...textareaStyle} placeholder="Добрый день! ..." />
							<Field.HelperText>
								Коротко опишите ваш вопрос или проблему
							</Field.HelperText>
							<Field.ErrorText>Сообщение об ошибке</Field.ErrorText>
						</Field.Root>

						<Button size="sm">Отправить</Button>
					</VStack>
				</GridItem>
			</Grid>
		</ContentLayout>
	)
}

export default Contacts