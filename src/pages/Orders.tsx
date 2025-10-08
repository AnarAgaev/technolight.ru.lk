
import { ContentLayout, CustomSelect } from "@/ui"
import { Badge, Box, Button, Field, Flex, Grid, GridItem, Heading, HStack, Icon, Input, InputGroup, Textarea, VStack, Text, Table, Image } from "@chakra-ui/react"
import { PageHeading } from "@/ui"
import { NavLink } from "react-router"
import { ChevronLeft, Search, Download, Save, Send, Copy, Trash2, PenLine, X, RefreshCcw } from "lucide-react"
import { formatPrice, getTimeAgo, formatDate } from '@/helpers'

const cardStyle = {
	w: "full",
	border: "none",
	borderRadius: "6px",
	boxShadow: "0 0 1px 0 rgba(24, 24, 27, 0.30), 0 4px 8px 0 rgba(24, 24, 27, 0.10)"
}

const selectors = [
	{
		id: 1,
		label: 'Выберите юр.лицо',
		placeholder: 'список ваших юр.лиц',
		options: [
			{ label: 'ООО "СВЕТ.РУ"', value: "svet" },
			{ label: 'ООО "ТОРГ ОПТ"', value: "opttorg" },
			{ label: 'ООО "Дом Света"', value: "domsveta" },
			{ label: 'ООО "ВАМ СВЕТ"', value: "vamsevt" },
			{ label: 'ООО "РумДекор"', value: "rumdecor" },
		]
	},
	{
		id: 2,
		label: 'Выберите договор',
		placeholder: 'номер договора',
		options: [
			{ label: 'ООО "СВЕТ.РУ"', value: "svet" },
			{ label: 'ООО "ТОРГ ОПТ"', value: "opttorg" },
			{ label: 'ООО "Дом Света"', value: "domsveta" },
			{ label: 'ООО "ВАМ СВЕТ"', value: "vamsevt" },
			{ label: 'ООО "РумДекор"', value: "rumdecor" },
		]
	},
	{
		id: 3,
		label: 'Выберите ТТ',
		placeholder: 'адрес ТТ',
		options: [
			{ label: "Магазин Центр света", info: "Гагарина,38 пр", value: "AFF0375" },
			{ label: "ЛАЙТ ДЕКОР", info: "ул. Машиностроительная 12А, ТЦ Регул, 2 этаж офис 7, салон SWG", value: "BFG7753" },
			{ label: 'Магазин "Алые Паруса"', info: "Рыбно-Слободский район ПГТ Рыбная Слобода, ул. З.Шаймарданова, 59", value: "CLR0087" },
			{ label: 'Магазин "Мультисвет"', info: "г. Южно-Сахалинск, ул. Комсомольская, 314 А", value: "PURE347" },
			{ label: 'Магазин люстр "Лидер света" ', info: "ул. Мусина, 29Б, корпус 2", value: "1324PURE347" },
		]
	},
]

const badges = [
	{ id: 1, label: 'Не оформлен', value: 'NEW', status: 'prev' },
	{ id: 2, label: 'В обработке', value: 'IN_PROGRESS', status: 'active' },
	{ id: 3, label: 'В резерве', value: 'RESERVED', status: 'next' },
	{ id: 4, label: 'Подтвержден', value: 'CONFIRMED', status: 'next' },
	{ id: 5, label: 'В сборке и доставке', value: 'IN_ASSEMBLY', status: 'next' },
	{ id: 6, label: 'Отгружен', value: 'SHIPPED', status: 'next' },
	{ id: 7, label: 'Отменен', value: 'CANCELED', status: 'next' },
]

const orderButtons = [
	{ id: 1, label: 'Скачать счет', icon: <Download /> },
	{ id: 2, label: 'Сохранить', icon: <Save /> },
	{ id: 3, label: 'Отправить заказ', icon: <Send /> },
	{ id: 5, label: 'Копировать заказ', icon: <Copy /> },
]

const products = [
	{
		id: 1,
		scheme: 'https://aws.massive.ru/technolight/images/scheme-example.webp',
		img: 'https://aws.massive.ru/technolight/images/img-example.webp',
		label: 'Светодиодная лампа Navigator 2,5W 170Lm 3000K G4 80245',
		inStock: 87,
		count: 200,
		reserve: 37,
		salePrice: 7678,
		totalPrice: 16678
	},
	{
		id: 2,
		scheme: 'https://aws.massive.ru/technolight/images/scheme-example.webp',
		img: 'https://aws.massive.ru/technolight/images/img-example.webp',
		label: 'Светодиодный светильник Gauss 12W 1100Lm 4000K E27 80502',
		inStock: 24,
		count: 50,
		reserve: 12,
		salePrice: 1245,
		totalPrice: 2890
	},
	{
		id: 3,
		scheme: 'https://aws.massive.ru/technolight/images/scheme-example.webp',
		img: 'https://aws.massive.ru/technolight/images/img-example.webp',
		label: 'LED лента Arlight 14.4W/m 1200Lm 6500K IP20 5050',
		inStock: 156,
		count: 300,
		reserve: 44,
		salePrice: 567,
		totalPrice: 890
	},
	{
		id: 4,
		scheme: 'https://aws.massive.ru/technolight/images/scheme-example.webp',
		img: 'https://aws.massive.ru/technolight/images/img-example.webp',
		label: 'Прожектор Feron 30W 2700Lm 5000K IP65 LL-830',
		inStock: 8,
		count: 15,
		reserve: 3,
		salePrice: 2345,
		totalPrice: 3678
	},
	{
		id: 5,
		scheme: 'https://aws.massive.ru/technolight/images/scheme-example.webp',
		img: 'https://aws.massive.ru/technolight/images/img-example.webp',
		label: 'Люстра Citilux 6x40W 4800Lm 3000K CL-6042',
		inStock: 3,
		count: 5,
		reserve: 1,
		salePrice: 15670,
		totalPrice: 23450
	},
	{
		id: 6,
		scheme: 'https://aws.massive.ru/technolight/images/scheme-example.webp',
		img: 'https://aws.massive.ru/technolight/images/img-example.webp',
		label: 'Трековый светильник Globo 18W 1800Lm 4000K TR-1840',
		inStock: 42,
		count: 80,
		reserve: 18,
		salePrice: 3456,
		totalPrice: 4789
	},
]

const filters = [
	{
		id: 1,
		placeholder: 'Статус заказа',
		options: [
			{ label: 'Не оформлен', value: 'NEW' },
			{ label: 'В обработке', value: 'IN_PROGRESS' },
			{ label: 'В резерве', value: 'RESERVED' },
			{ label: 'Подтвержден', value: 'CONFIRMED' },
			{ label: 'В сборке и доставке', value: 'IN_ASSEMBLY' },
			{ label: 'Отгружен', value: 'SHIPPED' },
			{ label: 'Отменен', value: 'CANCELED' },
		]
	},
	{
		id: 2,
		placeholder: 'Контрагент',
		options: [
			{ label: 'ООО "СВЕТ.РУ"', value: "svet" },
			{ label: 'ООО "ТОРГ ОПТ"', value: "opttorg" },
			{ label: 'ООО "Дом Света"', value: "domsveta" },
			{ label: 'ООО "ВАМ СВЕТ"', value: "vamsevt" },
			{ label: 'ООО "РумДекор"', value: "rumdecor" },
		]
	},
]

const orders = [
	{
		id: 1,
		requestNumber: "TL67890987",
		orderNumber: "TL67890987",
		status: { label: "В обработке", value: "IN_PROGRESS" },
		pushDate: "2025-08-28",
		company: "ООО Меркурий",
		price: 53678,
		amount: 34,
	},
	{
		id: 2,
		requestNumber: "TL67890988",
		orderNumber: "TL67890988",
		status: { label: "Не оформлен", value: "NEW" },
		pushDate: "2025-08-29",
		company: 'ООО "СВЕТ.РУ"',
		price: 23450,
		amount: 12,
	},
	{
		id: 3,
		requestNumber: "TL67890989",
		orderNumber: "TL67890989",
		status: { label: "В резерве", value: "RESERVED" },
		pushDate: "2025-08-30",
		company: 'ООО "ТОРГ ОПТ"',
		price: 78900,
		amount: 45,
	},
	{
		id: 4,
		requestNumber: "TL67890990",
		orderNumber: "TL67890990",
		status: { label: "Подтвержден", value: "CONFIRMED" },
		pushDate: "2025-09-01",
		company: 'ООО "Дом Света"',
		price: 45670,
		amount: 23,
	},
	{
		id: 5,
		requestNumber: "TL67890991",
		orderNumber: "TL67890991",
		status: { label: "В сборке и доставке", value: "IN_ASSEMBLY" },
		pushDate: "2025-09-02",
		company: 'ООО "ВАМ СВЕТ"',
		price: 123400,
		amount: 67,
	},
	{
		id: 6,
		requestNumber: "TL67890992",
		orderNumber: "TL67890992",
		status: { label: "Отгружен", value: "SHIPPED" },
		pushDate: "2025-09-03",
		company: 'ООО "РумДекор"',
		price: 34560,
		amount: 18,
	},
	{
		id: 7,
		requestNumber: "TL67890993",
		orderNumber: "TL67890993",
		status: { label: "Отменен", value: "CANCELED" },
		pushDate: "2025-09-04",
		company: 'ООО "СВЕТ.РУ"',
		price: 8900,
		amount: 5,
	},
	{
		id: 8,
		requestNumber: "TL67890994",
		orderNumber: "TL67890994",
		status: { label: "В обработке", value: "IN_PROGRESS" },
		pushDate: "2025-09-05",
		company: 'ООО "ТОРГ ОПТ"',
		price: 67890,
		amount: 29,
	},
	{
		id: 9,
		requestNumber: "TL67890995",
		orderNumber: "TL67890995",
		status: { label: "Подтвержден", value: "CONFIRMED" },
		pushDate: "2025-09-06",
		company: 'ООО "Дом Света"',
		price: 112300,
		amount: 52,
	},
	{
		id: 10,
		requestNumber: "TL67890996",
		orderNumber: "TL67890996",
		status: { label: "В сборке и доставке", value: "IN_ASSEMBLY" },
		pushDate: "2025-09-07",
		company: 'ООО "ВАМ СВЕТ"',
		price: 45600,
		amount: 21,
	},
	{
		id: 11,
		requestNumber: "TL67890997",
		orderNumber: "TL67890997",
		status: { label: "Отгружен", value: "SHIPPED" },
		pushDate: "2025-09-08",
		company: 'ООО "РумДекор"',
		price: 78100,
		amount: 38,
	},
	{
		id: 12,
		requestNumber: "TL67890998",
		orderNumber: "TL67890998",
		status: { label: "Не оформлен", value: "NEW" },
		pushDate: "2025-09-09",
		company: 'ООО "СВЕТ.РУ"',
		price: 23400,
		amount: 14,
	},
	{
		id: 13,
		requestNumber: "TL67890999",
		orderNumber: "TL67890999",
		status: { label: "В резерве", value: "RESERVED" },
		pushDate: "2025-09-10",
		company: 'ООО "ТОРГ ОПТ"',
		price: 56700,
		amount: 26,
	},
	{
		id: 14,
		requestNumber: "TL67891000",
		orderNumber: "TL67891000",
		status: { label: "Отменен", value: "CANCELED" },
		pushDate: "2025-09-11",
		company: 'ООО "Дом Света"',
		price: 12800,
		amount: 8,
	},
	{
		id: 15,
		requestNumber: "TL67891001",
		orderNumber: "TL67891001",
		status: { label: "В обработке", value: "IN_PROGRESS" },
		pushDate: "2025-09-12",
		company: 'ООО "ВАМ СВЕТ"',
		price: 89300,
		amount: 41,
	},
]


const Orders = () => {
	return (
		<ContentLayout>
			{/* Заголовок и кнопка назад */}
			<Flex direction={{ base: "column", md: "row" }} gap="4" justify="space-between">
				<Flex align="center" gap="2">
					<NavLink to="/">
						<Icon as={ChevronLeft} boxSize={6} color="black" _hover={{ color: "gray.400" }} />
					</NavLink>
					<PageHeading>Заказ 987612345 от 24.02.25</PageHeading>
				</Flex>
			</Flex>

			<VStack align="stretch" gap="6">

				{/* Бэйджики */}
				<Flex wrap="wrap" columnGap="2" rowGap="1">
					{badges.map(badge => (
						<Badge variant={badge.status === 'prev' ? "surface" : badge.status === 'active' ? "solid" : "outline"} size="lg" key={badge.id}>{badge.label}</Badge>
					))}
				</Flex>

				{/* Селекты */}
				<VStack gap="1.5" align="stretch" p={{ base: '3', md: '4' }} {...cardStyle}>
					<Grid gap={{ base: '3', xl: '6' }}
						templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
						alignItems="end"
					>
						{selectors.map(selector => (
							<GridItem key={selector.id}>
								<Heading fontSize="sm" fontWeight={600} mb="1.5" lineHeight="20px">{selector.label}</Heading>
								<CustomSelect
									label={selector.placeholder}
									optionsList={selector.options}
									isMultiple={false}
								/>
							</GridItem>
						))}
						<GridItem>
							<Button w="full">Создать заказ</Button>
						</GridItem>
					</Grid>
				</VStack>

				{/* Сообщение - нет заказов */}
				<Heading size="sm" maxW="400px" margin="0 auto" textAlign="center">
					У вас еще нет ни одного заказа.
					Нажмите на кнопку «Создать заказ»,
					что бы создать ваш первый заказ,
					выбрав предварительно юр.лицо,
					договор и адрес ТТ
				</Heading>

				{/* Комментарий к заказу */}
				<Box {...cardStyle} p="4">
					{/* Для отображения ошибки, добавляем аттрибут invalid в Field.Root */}
					<Field.Root gap={1.5}>
						<Field.Label fontSize="sm" fontWeight={600}>
							Комментарий
						</Field.Label>
						<Textarea autoresize variant="outline" placeholder="Напишите комментарий к заказу" minH={{ base: "100px", lg: "62px" }} />
						<Field.ErrorText>Field is required</Field.ErrorText>
					</Field.Root>
				</Box>

				{/* Добавляем новый заказ */}
				<VStack {...cardStyle} p="4" gap="40px">
					<Grid w="full" gap={{ base: '3', xl: '6' }}
						templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
					>
						<GridItem>
							<Field.Root>
								<Field.Label fontSize="sm" fontWeight={600} lineHeight="20px">Поиск по артикулу</Field.Label>
								<InputGroup endElement={<Search />}>
									<Input placeholder="Введите артикул" />
								</InputGroup>
							</Field.Root>
						</GridItem>
					</Grid>

					<Heading size="sm" maxW="400px" margin="0 auto" textAlign="center">
						Добавьте товар в заказ удобным для вас способом
					</Heading>

					<Grid w="full" gap={{ base: '3', xl: '6' }}
						templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
					>
						{['По артикулу', 'Из каталога', 'Из списка', 'Из файла'].map(item => (
							<GridItem key={item}>
								<Button w="full">{item}</Button>
							</GridItem>
						))}
					</Grid>
				</VStack>

				{/* Номер заказа и контроллеры */}
				<Flex direction={{ base: "column", lg: "row" }} align={{ lg: "center" }} justify={{ lg: "space-between" }} gap="3">
					<Heading size="sm" fontWeight={600}>№ заказа: 987612345 от 24.02.25</Heading>
					<Flex wrap="wrap" columnGap="2" rowGap="1.5">
						{orderButtons.map(button => (
							<Button key={button.id} variant="solid" size="xs">
								{button.icon} {button.label}
							</Button>
						))}
						<Button variant="solid" size="xs" aspectRatio={1}>
							<Trash2 />
						</Button>
					</Flex>
				</Flex>

				{/* Товары в заказе */}
				<Table.ScrollArea>
					<Table.Root size="sm" borderWidth="1px" minW="900px" >
						<Table.Header>
							<Table.Row>
								<Table.ColumnHeader w="76px" pl="4" fontWeight="semibold" bgColor="gray.100">Фото</Table.ColumnHeader>
								<Table.ColumnHeader w="76px" pl="4" fontWeight="semibold" bgColor="gray.100">Чертеж</Table.ColumnHeader>
								<Table.ColumnHeader w="40%" fontWeight="semibold" bgColor="gray.100">Номенклатура</Table.ColumnHeader>
								<Table.ColumnHeader w="10%" fontWeight="semibold" bgColor="gray.100">Количество</Table.ColumnHeader>
								<Table.ColumnHeader w="10%" fontWeight="semibold" bgColor="gray.100">В резерве</Table.ColumnHeader>
								<Table.ColumnHeader w="10%" fontWeight="semibold" bgColor="gray.100">Цена</Table.ColumnHeader>
								<Table.ColumnHeader w="10%" fontWeight="semibold" bgColor="gray.100">Цена</Table.ColumnHeader>
								<Table.ColumnHeader pr="4" fontWeight="semibold" bgColor="gray.100" textAlign="right">Действие</Table.ColumnHeader>
							</Table.Row>
						</Table.Header>
						<Table.Body fontSize="sm">
							{products.map((product) => (
								<Table.Row key={product.id}>
									<Table.Cell w="76px" pl="4" py="4" verticalAlign="top">
										<Box w="44px" aspectRatio="1" position="relative" background="gray.100">
											<Image src={product.img} alt={product.label} loading="lazy" top="0" left="0" w="full" h="full" objectFit="cover" />
										</Box>
									</Table.Cell>
									<Table.Cell w="76px" pl="4" py="4" verticalAlign="top">
										<Box w="44px" aspectRatio="1" position="relative" background="gray.100">
											<Image src={product.scheme} alt={product.label} loading="lazy" top="0" left="0" w="full" h="full" objectFit="cover" />
										</Box>
									</Table.Cell>
									<Table.Cell w="40%" py="4" verticalAlign="top">
										<VStack gap="2.5" align="stretch">
											<Text wordBreak="break-word" whiteSpace="normal">{product.label}</Text>
											<Text color="gray.600">В наличии: {product.inStock} шт.</Text>
										</VStack>
									</Table.Cell>
									<Table.Cell w="10%" py="4" verticalAlign="top">{product.count}</Table.Cell>
									<Table.Cell w="10%" py="4" verticalAlign="top">{product.inStock}</Table.Cell>
									<Table.Cell w="10%" py="4" verticalAlign="top">
										<VStack gap="2" align="stretch">
											<Text>{formatPrice(product.salePrice)} ₽</Text>
											<Text color="gray.600" fontSize="10px">{formatPrice(product.totalPrice)} ₽</Text>
										</VStack>
									</Table.Cell>
									<Table.Cell w="10%" py="4" verticalAlign="top">{formatPrice(product.salePrice)} ₽</Table.Cell>
									<Table.Cell py="4" pr="4" verticalAlign="top">
										<HStack gap="2" justify="flex-end">
											<Button variant="outline" size="xs" aspectRatio="1">
												<PenLine />
											</Button>
											<Button variant="outline" size="xs" aspectRatio="1">
												<Trash2 />
											</Button>
										</HStack>
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table.Root>
				</Table.ScrollArea>

				{/* Список заказов */}
				<VStack gap="4" align="stretch" {...cardStyle} overflow="hidden">
					<VStack gap="1.5" align="stretch" p={{ base: '3', md: '4' }} w="full">
						<Heading fontSize="sm" fontWeight={600} lineHeight="20px">Фильтры</Heading>
						<Grid gap={{ base: '3', xl: '6' }}
							templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
						>
							{filters.map(filter => (
								<GridItem key={filter.id}>
									<CustomSelect
										label={filter.placeholder}
										optionsList={filter.options}
										isMultiple={true}
									/>
								</GridItem>
							))}

							<GridItem>
								<Field.Root>
									<InputGroup endElement={<Search height="20px" />}>
										<Input truncate h="9" placeholder="Поиск" />
									</InputGroup>
								</Field.Root>
							</GridItem>

							<GridItem>
								<Button w="full" variant="outline" position="relative">
									<Text as="div" w="full">Сбросить фильтры</Text>
									<X />
								</Button>
							</GridItem>
						</Grid>
					</VStack>
					<Table.ScrollArea>
						<Table.Root size="sm" borderTopWidth="1px" minW="900px" background="transparent">
							<Table.Header>
								<Table.Row background="transparent">
									<Table.ColumnHeader pl="4" fontWeight="semibold" bgColor="gray.100">Номер заявки</Table.ColumnHeader>
									<Table.ColumnHeader fontWeight="semibold" bgColor="gray.100">Номер заказа</Table.ColumnHeader>
									<Table.ColumnHeader fontWeight="semibold" bgColor="gray.100">Статус заказа</Table.ColumnHeader>
									<Table.ColumnHeader fontWeight="semibold" bgColor="gray.100">Дата отправки в 1С</Table.ColumnHeader>
									<Table.ColumnHeader fontWeight="semibold" bgColor="gray.100">Контрагент</Table.ColumnHeader>
									<Table.ColumnHeader fontWeight="semibold" bgColor="gray.100">Сумма заказа</Table.ColumnHeader>
									<Table.ColumnHeader fontWeight="semibold" bgColor="gray.100">Всего товара</Table.ColumnHeader>
									<Table.ColumnHeader pr="4" fontWeight="semibold" bgColor="gray.100" textAlign="right">Действие</Table.ColumnHeader>
								</Table.Row>
							</Table.Header>

							<Table.Body fontSize="sm">
								{orders.map(order => (
									<Table.Row key={order.id} background="transparent">
										<Table.Cell pl="4">{order.requestNumber}</Table.Cell>
										<Table.Cell>{order.orderNumber}</Table.Cell>
										<Table.Cell>
											<Badge
												fontWeight="300"
												variant="solid"
												colorPalette={
													order.status.value === 'CANCELED'
														? 'red'
														: order.status.value === 'SHIPPED'
															? 'green'
															: 'gray'
												}
											>
												{order.status.label}
											</Badge>
										</Table.Cell>
										<Table.Cell>
											{formatDate(order.pushDate)
												? (
													<VStack gap="0" align="stretch">
														<Text>{formatDate(order.pushDate)}</Text>
														<Text color="gray.600" fontSize="10px">{getTimeAgo(order.pushDate)}</Text>
													</VStack>
												)
												: null
											}
										</Table.Cell>
										<Table.Cell>{order.company}</Table.Cell>
										<Table.Cell>{formatPrice(order.price)} ₽</Table.Cell>
										<Table.Cell>{order.amount} шт.</Table.Cell>
										<Table.Cell pr="4">
											<HStack gap="2" justify="flex-end">
												<Button variant="outline" size="xs" aspectRatio="1">
													<RefreshCcw />
												</Button>
												<Button variant="outline" size="xs" aspectRatio="1">
													<Trash2 />
												</Button>
											</HStack>
										</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table.Root>
					</Table.ScrollArea>
				</VStack>

				{/* Итого */}
				<VStack align="flex-end" gap="2" fontSize="sm" fontWeight={600} lineHeight="20px">
					<HStack>
						<Text>Итого:</Text>
						<Text>25 шт.</Text>
						<Text>425 678 ₽</Text>
					</HStack>
					<HStack>
						<Text>Из них в резерве:</Text>
						<Text>8 шт.</Text>
						<Text>25 678 ₽</Text>
					</HStack>
					<Button mt="4" size="sm">Отправить менеджеру</Button>
				</VStack>

			</VStack>

		</ContentLayout>
	)
}

export default Orders