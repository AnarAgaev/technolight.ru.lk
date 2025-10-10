import {
	Avatar,
	Box,
	Button,
	Card,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	Icon,
	Link,
	Text,
	VStack,
} from '@chakra-ui/react'
import {Bell, ChevronDown, FileDown, PencilLine} from 'lucide-react'
import {NavLink} from 'react-router'
import {ContentLayout, PageHeading} from '@/ui'

const ordersAndProjects = [
	{count: 23, label: 'Не оформлены'},
	{count: 87, label: 'В резерве'},
	{count: 45, label: 'Подтвержден'},
	{count: 76, label: 'На сборке'},
	{count: 12, label: 'Доставка'},
	{count: 59, label: 'Отгружены'},
]

const Home = () => {
	return (
		<ContentLayout>
			<Flex
				direction={{base: 'column', md: 'row'}}
				gap="4"
				justify="space-between"
			>
				<PageHeading>Главная</PageHeading>
			</Flex>

			<VStack gap="6" align="stretch">
				<Card.Root variant="elevated">
					<Card.Body
						display="flex"
						flexDirection={{base: 'column', md: 'row'}}
						alignItems={{base: 'flex-start', md: 'center'}}
						gap={{base: '4', md: '2'}}
						p="4"
					>
						<Avatar.Root variant="solid">
							<Avatar.Fallback name="Пупкин Виталий Витальевич " />
						</Avatar.Root>
						<VStack align="stretch" mr="4" gap="0">
							<Text fontSize="lg" fontWeight="medium">
								Пупкин Виталий Витальевич
							</Text>
							<Text color="gray.600">
								<Link color="inherit" href="tel:+79297654321">
									+7 929 765 43 21
								</Link>
								,{' '}
								<Link color="inherit" href="mailto:melissajones@example.com">
									melissajones@example.com
								</Link>
								,{' '}
								<Text color="inherit" as="span">
									Тула
								</Text>
							</Text>
						</VStack>
						<HStack gap="4" align="center">
							<NavLink to={`/contacts`}>
								<Icon
									as={PencilLine}
									boxSize={6}
									color="black"
									_hover={{color: 'gray.400'}}
								/>
							</NavLink>
							<Box w="1px" h="5" background="gray.200" />
							{/* Не понял, что именно делает этот элемент. Его нужно будет обернуть в зависимости от его предназначения */}
							<Icon as={Bell} boxSize={6} color="black" />
						</HStack>
					</Card.Body>
				</Card.Root>

				<Grid
					templateColumns={{
						base: '1fr',
						md: 'repeat(2, 1fr)',
						lg: 'repeat(3, 1fr)',
					}}
					gap={{base: '4', lg: '6'}}
				>
					<GridItem
						colStart={{base: 1, lg: -2}}
						colSpan={{base: 1, md: 2, lg: 1}}
					>
						<Button variant="solid" float={{lg: 'right'}}>
							<FileDown /> скачать прайс-лист <ChevronDown />
						</Button>
					</GridItem>

					<GridItem rowStart={{lg: 1}}>
						<Card.Root variant="elevated" p="4">
							<Card.Body p="0" gap="4">
								<Card.Title>Мой менеджер</Card.Title>
								<Card.Description
									as="div"
									display="flex"
									alignItems="center"
									gap="2"
								>
									<Avatar.Root size="xl">
										<Avatar.Fallback name="Бацанова Ольга" />
										<Avatar.Image src="https://i.pravatar.cc/300" />
									</Avatar.Root>
									<VStack gap="0" align="stretch">
										<Heading size="md" color="black">
											Бацанова Ольга
										</Heading>
										<Link
											color="gray.600"
											href="mailto:melissajones@example.com"
										>
											melissajones@example.com
										</Link>
									</VStack>
								</Card.Description>
							</Card.Body>
							<Card.Footer justifyContent="flex-end" mt="4" p="0">
								<NavLink to={`/contacts`}>
									<Button size="sm">Написать менеджеру</Button>
								</NavLink>
							</Card.Footer>
						</Card.Root>
					</GridItem>

					<GridItem rowStart={{lg: 1}}>
						<Card.Root variant="elevated" p="4">
							<Card.Body p="0" gap="4">
								<Card.Title>Мои юр.лица</Card.Title>
								<Card.Description
									as="div"
									display="flex"
									alignItems="center"
									gap="2"
								>
									<Avatar.Root variant="solid" size="xl">
										<Avatar.Fallback name="3" />
									</Avatar.Root>
									<VStack gap="0" align="stretch">
										<Text color="gray.600">
											юр. лица зарегистрировано в ЛК{' '}
										</Text>
									</VStack>
								</Card.Description>
							</Card.Body>
							<Card.Footer
								flexDirection={{base: 'column', sm: 'row'}}
								alignItems="flex-end"
								justifyContent="flex-end"
								mt="4"
								p="0"
							>
								<NavLink to={`/companies`}>
									<Button variant="outline" size="sm">
										Смотреть все
									</Button>
								</NavLink>
								<Button size="sm">Добавить юр.лицо</Button>
							</Card.Footer>
						</Card.Root>
					</GridItem>
				</Grid>

				<Grid
					templateColumns={{
						base: '1fr',
						md: 'repeat(2, 1fr)',
						lg: 'repeat(3, 1fr)',
					}}
					gap={{base: '4', lg: '6'}}
				>
					<GridItem>
						<Card.Root variant="elevated">
							<Card.Body display="flex" flexDirection="column" gap="4" p="4">
								<Heading size="lg">Мои заказы</Heading>
								<Grid
									templateColumns={{base: '1fr', sm: 'repeat(2, 1fr)'}}
									gap={{base: '2', md: '4'}}
								>
									{ordersAndProjects.map((item) => (
										<GridItem key={item.label}>
											<Card.Root variant="elevated" h="full">
												<Card.Body p="4" gap="2">
													<Avatar.Root variant="solid" size="sm">
														<Text fontSize="xs">{item.count}</Text>
													</Avatar.Root>
													<Card.Description>{item.label}</Card.Description>
												</Card.Body>
											</Card.Root>
										</GridItem>
									))}
								</Grid>
								<Grid
									templateColumns={{base: '1fr', sm: 'repeat(2, 1fr)'}}
									gap="2"
								>
									<GridItem>
										<NavLink to={`/companies`}>
											<Button w="full" variant="outline" size="sm">
												Смотреть все
											</Button>
										</NavLink>
									</GridItem>
									<GridItem>
										<Button size="sm" w="full">
											Создать заказ
										</Button>
									</GridItem>
								</Grid>
							</Card.Body>
						</Card.Root>
					</GridItem>
					<GridItem>
						<Card.Root variant="elevated">
							<Card.Body display="flex" flexDirection="column" gap="4" p="4">
								<Heading size="lg">Мои проекты</Heading>
								<Grid
									templateColumns={{base: '1fr', sm: 'repeat(2, 1fr)'}}
									gap={{base: '2', md: '4'}}
								>
									{ordersAndProjects.map((item) => (
										<GridItem key={item.label}>
											<Card.Root variant="elevated" h="full">
												<Card.Body p="4" gap="2">
													<Avatar.Root variant="solid" size="sm">
														<Text fontSize="xs">{item.count}</Text>
													</Avatar.Root>
													<Card.Description>{item.label}</Card.Description>
												</Card.Body>
											</Card.Root>
										</GridItem>
									))}
								</Grid>
								<Grid
									templateColumns={{base: '1fr', sm: 'repeat(2, 1fr)'}}
									gap="2"
								>
									<GridItem>
										<NavLink to={`/companies`}>
											<Button w="full" variant="outline" size="sm">
												Смотреть все
											</Button>
										</NavLink>
									</GridItem>
									<GridItem>
										<Button size="sm" w="full">
											Создать проект
										</Button>
									</GridItem>
								</Grid>
							</Card.Body>
						</Card.Root>
					</GridItem>
				</Grid>
			</VStack>
		</ContentLayout>
	)
}

export default Home
