import { PageHeading, ContentLayout } from "@/ui"
import { ChevronLeft, User, MapPin } from 'lucide-react'
import { NavLink } from "react-router"
import { Box, Flex, Icon, Heading, VStack, Field, Input,
	PinInput, InputGroup, Checkbox, Button } from "@chakra-ui/react"

const boxStyles = {
	borderRadius: "sm",
	w: "full",
	p: { base: "3", md: "4" },
	boxShadow: "0 0 1px 0 rgba(24, 24, 27, 0.30), 0 4px 8px 0 rgba(24, 24, 27, 0.10)",
}

const inputStyle = {
	overflow: "hidden",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap",
	pl: "34px !important",
	_placeholder: {
		color: "fg.subtle",
		fontSize: "sm",
		fontWeight: "light",
	}
}

const inputLabelStyle = {
	fontWeight: "semibold",
	fontSize: { base: '12px', lg: '14px' }
}

const checkLabelStyle = {
	fontSize: {base: '12px', lg: '14px'}
}

export const Profile = () => {
	return (
		<ContentLayout>
			<Flex direction={{ base: "column", md: "row" }} gap="4" justify="space-between">
				<Flex align="center" gap="2">
					<NavLink to="/">
						<Icon as={ChevronLeft} boxSize={6} color="black" _hover={{ color: "gray.400" }} />
					</NavLink>
					<PageHeading>Профиль и настройки</PageHeading>
				</Flex>
			</Flex>

			<Flex direction={{ base: "column", md: "row" }} gap="24px">
				<Box {...boxStyles}>
					<VStack gap="4" align="stretch">
						<Heading size={{ base: "md", lg: 'lg' }}>Редактируйте ваши данные</Heading>

						<Field.Root>
							<Field.Label {...inputLabelStyle}>ФИО</Field.Label>
							<InputGroup startElement={<User size="16px" color="gray" />}>
								<Input name="username" placeholder="ФИО" {...inputStyle} />
							</InputGroup>
						</Field.Root>

						<Field.Root invalid>
							<Field.Label {...inputLabelStyle}>Город</Field.Label>
							<InputGroup startElement={<MapPin size="16px" color="gray" />}>
								<Input name="usercity" placeholder="Москва" {...inputStyle} />
							</InputGroup>
							<Field.ErrorText>Текст сообщения об ошибке</Field.ErrorText>
						</Field.Root>

						<Field.Root>
							<Field.Label {...inputLabelStyle}>Старый пароль</Field.Label>
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
							<Field.Label {...inputLabelStyle}>Новый пароль</Field.Label>
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
				</Box>

				<Box {...boxStyles}>
					<VStack gap="4" align="flex-start">
						<Flex direction="column" gap="4" w="full">
							<Heading size="sm" mb="1.5">Отображение цен в каталоге</Heading>
							<Checkbox.Root>
								<Checkbox.HiddenInput />
								<Checkbox.Control />
								<Checkbox.Label {...checkLabelStyle}>Отображать РРЦ и распродажи</Checkbox.Label>
							</Checkbox.Root>
							<Checkbox.Root checked>
								<Checkbox.HiddenInput />
								<Checkbox.Control />
								<Checkbox.Label {...checkLabelStyle}>Отображать оптовую цену</Checkbox.Label>
							</Checkbox.Root>
							<Checkbox.Root>
								<Checkbox.HiddenInput />
								<Checkbox.Control />
								<Checkbox.Label {...checkLabelStyle}>Цена еще одна</Checkbox.Label>
							</Checkbox.Root>
						</Flex>

						<Flex direction="column" gap="4" w="full">
							<Heading size="sm" mb="1.5">Настройка уведомлений</Heading>
							<Checkbox.Root>
								<Checkbox.HiddenInput />
								<Checkbox.Control />
								<Checkbox.Label {...checkLabelStyle}>Отправлять уведобления на почту</Checkbox.Label>
							</Checkbox.Root>
							<Checkbox.Root>
								<Checkbox.HiddenInput />
								<Checkbox.Control />
								<Checkbox.Label {...checkLabelStyle}>Отправлять уведомления в ЛК</Checkbox.Label>
							</Checkbox.Root>
						</Flex>

						<Button mt="1.5">Обновить</Button>
					</VStack>
				</Box>
			</Flex>
		</ContentLayout>
	)
}