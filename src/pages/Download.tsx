import { ContentLayout, PageHeading, CustomMultipleSelect } from "@/ui"
import { Avatar, Card, Flex, Grid, GridItem, Heading, Icon, ScrollArea, VStack, Text, Link, Image } from "@chakra-ui/react"
import { Box as BoxIcon, Cone, Award, Sofa, Tv, Wrench, Video, FilePlay, FileWarning, Eye } from "lucide-react"

const selectors = [
	{
		id: 1,
		label: 'Бренд',
		options: [
			{ label: "Artelamp", value: "artelamp" },
			{ label: "Divinare", value: "divinare" },
			{ label: "Technolight", value: "technolight" },
		]
	},
	{
		id: 2,
		label: 'Коллекция',
		options: [
			{ label: "Saturn", value: "saturn" },
			{ label: "Priority", value: "priority" },
			{ label: "Savannah", value: "savannah" },
			{ label: "Grotesk", value: "grotesk" },
		]
	},
	{
		id: 3,
		label: 'Артикул',
		options: [
			{ label: "AFF0375", value: "AFF0375" },
			{ label: "BFG7753", value: "BFG7753" },
			{ label: "CLR0087", value: "CLR0087" },
			{ label: "PURE347", value: "PURE347" },
		]
	},
]

const selectCardsList = [
	{ id: 1, title: "3D модели", icon: BoxIcon, selected: false },
	{ id: 2, title: "Фотометрические данные", icon: Cone, selected: false },
	{ id: 3, title: "Сертификаты", icon: Award, selected: false },
	{ id: 4, title: "Интерьеры", icon: Sofa, selected: false },
	{ id: 5, title: "Презентационные материалы", icon: Tv, selected: false },
	{ id: 6, title: "Инструкции по сборке", icon: Wrench, selected: false },
	{ id: 7, title: "Видео о товаре", icon: Video, selected: true },
	{ id: 8, title: "Видеоинструкции", icon: FilePlay, selected: false },
	{ id: 9, title: "Руководство по эксплуатации", icon: FileWarning, selected: false },
]

const videoInstructionsList = [
	{ views: 2, title: "Видео инструкция Магнитной трековой системы и что-то там еще", link: "https://aws.technolight.ru/technolight/public/images/projects/2024-04-10/01HV47G90K4T9D5GYKF25KT5KZ.webp?v=1722520080" },
	{ views: 33, title: "Регулировка высоты светильника Глобо 135 подвесной", link: "https://aws.technolight.ru/technolight/public/images/projects/2024-01-31/01HNFXY86JEPZJ18MJJ1KNQG97.webp?v=1722520080" },
	{ views: 75, title: "Установка светильника Лайн", link: "https://aws.technolight.ru/technolight/public/images/projects/2024-04-10/01HV47SRSDRVSKCTQ619WYXSFZ.webp?v=1722520080" },
	{ views: 83, title: "Установка в ГКЛ монтажных комплектов Зеро и Фрейм Зеро", link: "https://aws.technolight.ru/technolight/public/images/projects/2024-04-10/01HV480SFQBX15F3PF50J0J2DZ.webp?v=1722520081" },
	{ views: 27, title: "Встраиваемый в гипсокартон шинопровод PROFI 48V от TECHNOLIGHT", link: "https://aws.technolight.ru/technolight/public/images/projects/2024-04-10/01HV47G90K4T9D5GYKF25KT5KZ.webp?v=1722520080" },
	{ views: 34, title: "Регулировка высоты светильника Глобо 135 подвесной", link: "https://aws.technolight.ru/technolight/public/images/projects/2024-01-31/01HNFXY86JEPZJ18MJJ1KNQG97.webp?v=1722520080" },
	{ views: 337, title: "Установка светильника Лайн", link: "https://aws.technolight.ru/technolight/public/images/projects/2024-04-10/01HV47SRSDRVSKCTQ619WYXSFZ.webp?v=1722520080" },
	{ views: 18, title: "Установка в ГКЛ монтажных комплектов Зеро и Фрейм Зеро", link: "https://aws.technolight.ru/technolight/public/images/projects/2024-04-10/01HV480SFQBX15F3PF50J0J2DZ.webp?v=1722520081" },
]

const cardStyle = {
	w: "full",
	border: "none",
	borderRadius: "6px",
	boxShadow: "0 0 1px 0 rgba(24, 24, 27, 0.30), 0 4px 8px 0 rgba(24, 24, 27, 0.10)"
}

const catalogs = [
	{
		id: 1,
		label: 'Каталог TECHNOLIGHT 2025',
		title: 'Каталог',
		type: 'pdf',
		size: '34.83 MB',
		image: 'https://storage.yandexcloud.net/s3files/previews/2025/01JQEJ926274DB68T4CQ7X1BVT.jpg'
	},
	{
		id: 2,
		label: 'Брошюра ICONIC',
		title: 'Каталог',
		type: 'pdf',
		size: '9.5 MB',
		image: 'https://storage.yandexcloud.net/s3files/previews/2024/01J7ZGJ60VD9YSWD6ACTS1FCMA.jpg'
	},
	{
		id: 3,
		label: 'Брошюра HALO',
		title: 'Каталог',
		type: 'pdf',
		size: '6.67 MB',
		image: 'https://storage.yandexcloud.net/s3files/previews/2024/01J7ZGNZ6GTN6384R2ZJEFDXRT.jpg'
	},
	{
		id: 4,
		label: 'БРОШЮРА APEX48V',
		title: 'Каталог',
		type: 'pdf',
		size: '1.2 MB',
		image: 'https://storage.yandexcloud.net/s3files/previews/2024/01JBH2G8E7PX3KHP22NGVG0YF2.jpg'
	},
	{
		id: 5,
		label: 'БРОШЮРА PRISM',
		title: 'Каталог',
		type: 'pdf',
		size: '2.7 MB',
		image: 'https://storage.yandexcloud.net/s3files/previews/2025/01JQ4A5PBG326R13GQ1JZ56RE2.jpg'
	},
	{
		id: 6,
		label: 'БРОШЮРА ЗЕРО ЛОК',
		title: 'Каталог',
		type: 'pdf',
		size: '1.86 MB',
		image: 'https://storage.yandexcloud.net/s3files/previews/2025/01JVCGYFAF52K8GWPT4RYWMVSM.jpg'
	},
	{
		id: 7,
		label: 'TECHNOLIGHT НОВИНКИ 2025',
		title: 'Каталог',
		type: 'pdf',
		size: '6.49 MB',
		image: 'https://storage.yandexcloud.net/s3files/previews/2025/01K30NMZF5BFCAKJCCA6KXV11F.jpg'
	},
]



export const Download = () => {
	return (
		<ContentLayout>
			<Flex direction={{ base: "column", md: "row" }} gap="4" justify="space-between">
				<PageHeading>Скачать</PageHeading>
			</Flex>

			<VStack align="stretch" gap="6">

				<VStack gap="1.5" align="stretch" p={{ base: '3', md: '4' }} {...cardStyle}>
					<Heading size={{ base: "sm", md: "md" }}>Выберите нужные параметры</Heading>
					<Grid gap={{ base: '3', md: '6' }}
						templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
					>
						{selectors.map(selector => (
							<GridItem key={selector.id}>
								<CustomMultipleSelect
									label={selector.label}
									optionsList={selector.options}
								/>
							</GridItem>
						))}
					</Grid>
				</VStack>

				<Grid gap={{ base: '3', md: '6' }}
					templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
				>
					{selectCardsList.map(card => (
						<GridItem key={card.id}>
							<Card.Root
								{...cardStyle}
								background={card.selected ? 'gray.100' : 'transparent'}
								cursor='pointer'
								pointerEvents={card.selected ? 'none' : 'auto'}
								_hover={{ background: "gray.100" }}
							>
								<Card.Body p='4'>
									<Avatar.Root mb="2" background="black" size="xs">
										<Icon as={card.icon} color="white" w="16px" />
									</Avatar.Root>
									<Card.Description>{card.title}</Card.Description>
								</Card.Body>
							</Card.Root>
						</GridItem>
					))}
				</Grid>

				{/* Видео о товаре + Shorts */}
				<VStack gap={{ base: '4', md: '6' }} align="stretch">
					<Heading size="sm">Видео о товаре</Heading>

					<ScrollArea.Root width="full" size="xs">
						<ScrollArea.Viewport  >
							<ScrollArea.Content pb="4">
								<Flex gap="4" flexWrap="nowrap">
									{videoInstructionsList.map(instruction => (
										<Card.Root key={instruction.views} w="308px" h="auto" borderRadius="1.5" overflow="hidden">
											<Card.Body p='0'>
												<Card.Title
													w='full'
													aspectRatio="308/175"
													background="gray.100"
													position='relative'
													backgroundImage={`url('${instruction.link}')`}
													backgroundSize="cover"
													backgroundPosition="center" />
												<Card.Description p='4'>{instruction.title}</Card.Description>
											</Card.Body>
										</Card.Root>
									))}
								</Flex>
							</ScrollArea.Content>
						</ScrollArea.Viewport>
						<ScrollArea.Scrollbar orientation="horizontal" />
					</ScrollArea.Root>

					<Heading size="sm">Shorts</Heading>

					<ScrollArea.Root width="full" size="xs">
						<ScrollArea.Viewport  >
							<ScrollArea.Content pb="4">
								<Flex gap="5" flexWrap="nowrap">
									{videoInstructionsList.map(instruction => (
										<Card.Root key={instruction.views} w="216px" h="auto" border="none">
											<Card.Body p='0' gap='2.5'>
												<Card.Title
													w='full'
													aspectRatio="216/386"
													background="gray.100"
													position='relative'
													backgroundImage={`url('${instruction.link}')`}
													backgroundSize="cover"
													backgroundPosition="center"
													overflow='hidden'
													borderRadius='6px' />
												<Card.Description as="div">
													<VStack gap='4.5' align='stretch'>
														<Text
															color="black"
															fontSize="17px"
															fontStyle="normal"
															fontWeight="400"
															lineHeight="130%"

															display="-webkit-box"
															overflow="hidden"
															textOverflow="ellipsis"
															style={{
																WebkitLineClamp: "2",
																WebkitBoxOrient: "vertical",
															}}
														>{instruction.title}</Text>
														<VStack align="stretch" gap="0" fontSize="14px" fontWeight="light" opacity="0.7">
															<Text>ARTE Lamp</Text>
															<Flex align="center" gap="5px">
																<Icon as={Eye} color="black" w="20px" />
																<Text>{instruction.views}</Text>
															</Flex>
														</VStack>
													</VStack>
												</Card.Description>
											</Card.Body>
										</Card.Root>
									))}
								</Flex>
							</ScrollArea.Content>
						</ScrollArea.Viewport>
						<ScrollArea.Scrollbar orientation="horizontal" />
					</ScrollArea.Root>

				</VStack>

				{/* Каталоги */}
				<Grid
					gap={{ base: '3', md: '6' }}
					templateColumns={{
						base: "1fr",
						sm: "repeat(2, 1fr)",
						md: "repeat(3, 1fr)",
						lg: "repeat(4, 1fr)"
					}}
				>
					<GridItem gridColumnStart={1} gridColumnEnd={-1}>
						<Heading size="sm">Каталоги</Heading>
					</GridItem>
					{catalogs.map(catalog => (
						<GridItem key={catalog.id} overflow="hidden" border="1px solid" borderColor="gray.200" borderRadius="6px">
							<Link
								href="#"
								display="flex"
								alignItems="stretch"
								justifyContent="flex-end"
								position="relative"
								w="full"
								h="auto"
								aspectRatio="4/2.5"
								borderBottom="1px solid"
								borderColor="gray.200"
								download
							>
								<Image
									src={catalog.image}
									alt="Подсказка для картинки"
									display="block"
									loading="lazy"
								/>
							</Link>
							<VStack align="stretch" gap={{ base: '1', md: '2' }} p="3">
								<Text
									display="-webkit-box"
									overflow="hidden"
									textOverflow="ellipsis"
									style={{
										WebkitLineClamp: "2",
										WebkitBoxOrient: "vertical",
									}}
								>{catalog.label}</Text>
								<Text as="span" fontSize="14px" color="gray.500" fontWeight="light">
									{catalog.title}
								</Text>
								<Link href="#" fontSize="14px" fontWeight="light">{catalog.type} - {catalog.size}</Link>
							</VStack>
						</GridItem>
					))}
				</Grid>
			</VStack>
		</ContentLayout>
	)
}