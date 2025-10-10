import {
	Button,
	Card,
	Checkbox,
	Field,
	Flex,
	Heading,
	Icon,
	Input,
	InputGroup,
	PinInput,
	VStack,
} from '@chakra-ui/react'
import {ChevronLeft, MapPin, User} from 'lucide-react'
import {NavLink} from 'react-router'
import {ContentLayout, PageHeading} from '@/ui'

const Profile = () => {
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
					<PageHeading>Профиль и настройки</PageHeading>
				</Flex>
			</Flex>

			<Flex direction={{base: 'column', md: 'row'}} gap="24px">
				<Card.Root variant="elevated" w="full">
					<Card.Body p={{base: '3', md: '4'}}>
						<VStack gap="4" align="stretch">
							<Heading size={{base: 'md', lg: 'lg'}}>
								Редактируйте ваши данные
							</Heading>

							<Field.Root>
								<Field.Label>ФИО</Field.Label>
								<InputGroup startElement={<User size="16px" color="gray" />}>
									<Input name="username" placeholder="ФИО" truncate />
								</InputGroup>
							</Field.Root>

							<Field.Root invalid>
								<Field.Label>Город</Field.Label>
								<InputGroup startElement={<MapPin size="16px" color="gray" />}>
									<Input name="usercity" placeholder="Москва" truncate />
								</InputGroup>
								<Field.ErrorText>Текст сообщения об ошибке</Field.ErrorText>
							</Field.Root>

							<Field.Root>
								<Field.Label>Старый пароль</Field.Label>
								<PinInput.Root size="xs">
									<PinInput.HiddenInput />
									<PinInput.Control gap="1.5">
										<PinInput.Input index={0} />
										<PinInput.Input index={1} />
										<PinInput.Input index={2} />
										<PinInput.Input index={3} />
									</PinInput.Control>
								</PinInput.Root>
							</Field.Root>

							<Field.Root>
								<Field.Label>Новый пароль</Field.Label>
								<PinInput.Root size="xs">
									<PinInput.HiddenInput />
									<PinInput.Control gap="1.5">
										<PinInput.Input index={0} />
										<PinInput.Input index={1} />
										<PinInput.Input index={2} />
										<PinInput.Input index={3} />
									</PinInput.Control>
								</PinInput.Root>
							</Field.Root>
						</VStack>
					</Card.Body>
				</Card.Root>

				<Card.Root variant="elevated" w="full">
					<Card.Body p={{base: '3', md: '4'}}>
						<VStack gap="4" align="flex-start">
							<Flex direction="column" gap="4" w="full">
								<Heading size="sm" mb="1.5">
									Отображение цен в каталоге
								</Heading>
								<Checkbox.Root>
									<Checkbox.HiddenInput />
									<Checkbox.Control />
									<Checkbox.Label>Отображать РРЦ и распродажи</Checkbox.Label>
								</Checkbox.Root>
								<Checkbox.Root checked>
									<Checkbox.HiddenInput />
									<Checkbox.Control />
									<Checkbox.Label>Отображать оптовую цену</Checkbox.Label>
								</Checkbox.Root>
								<Checkbox.Root>
									<Checkbox.HiddenInput />
									<Checkbox.Control />
									<Checkbox.Label>Цена еще одна</Checkbox.Label>
								</Checkbox.Root>
							</Flex>

							<Flex direction="column" gap="4" w="full">
								<Heading size="sm" mb="1.5">
									Настройка уведомлений
								</Heading>
								<Checkbox.Root>
									<Checkbox.HiddenInput />
									<Checkbox.Control />
									<Checkbox.Label>
										Отправлять уведомления на почту
									</Checkbox.Label>
								</Checkbox.Root>
								<Checkbox.Root>
									<Checkbox.HiddenInput />
									<Checkbox.Control />
									<Checkbox.Label>Отправлять уведомления в ЛК</Checkbox.Label>
								</Checkbox.Root>
							</Flex>

							<Button mt="1.5">Обновить</Button>
						</VStack>
					</Card.Body>
				</Card.Root>
			</Flex>
		</ContentLayout>
	)
}

export default Profile
