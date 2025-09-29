import { NavLink, Link } from "react-router"
import { VStack, Flex, Text, Icon } from "@chakra-ui/react"
import { House, Folder, File, AppWindowMac, Settings, Download, Users } from "lucide-react"

const pages = [
	{ label: "Главная", value: "", icon: House },
	{ label: "Проекты", value: "projects", icon: Folder },
	{ label: "Заказы", value: "orders", icon: File },
	{ label: "Сайт", value: "https://technolight.ru/", icon: AppWindowMac },
	{ label: "Профиль и настройки", value: "profile", icon: Settings },
	{ label: "Скачать", value: "download", icon: Download },
	{ label: "Юр.лица", value: "companies", icon: Users },
]

export const PageNavigation = () => {
	return (
		<VStack as="nav" align={{ md: "center", xl: "flex-start" }} w="100%" mt="4">
			{pages.map((page) =>

				// ! Валидность URL адреса проверяем просто через наличие точки,
				// ! так как каждый URL содержит точку, а роут нет
				page.value.includes('.') ? (
					<Link
						key={page.value}
						to={page.value}
						target="_blank"
						rel="noopener noreferrer"
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: "100%",
						}}
					>
						<Flex
							align="center"
							gap="1.5"
							px="3"
							py="2"
							borderRadius="md"
							w={{ base: '100%', md: 'auto', xl: "100%" }}
							_hover={{ bg: "gray.100" }}
						>
							<Icon as={page.icon} boxSize={4} color="black" />
							<Text fontSize="sm" lineHeight="20px" display={{ md: "none", xl: "block" }}>
								{page.label}
							</Text>
						</Flex>
					</Link>

				) : (
					<NavLink
						key={page.value}
						to={`/${page.value}`}
						style={({ isActive }) => ({
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: "100%",
							pointerEvents: isActive ? 'none' : 'auto',
						})}
					>
						{({ isActive }) => (
							<Flex
								align="center"
								gap="1.5"
								px="3"
								py="2"
								background={'blue'}
								borderRadius={2}
								w={{ base: '100%', md: 'auto', xl: "100%" }}
								bg={isActive ? "gray.100" : "transparent"}
								_hover={{ bg: "gray.100" }}
							>
								<Icon as={page.icon} boxSize={4} color="black" />
								<Text fontSize="sm" lineHeight="20px" display={{ md: "none", xl: "block" }}>
									{page.label}
								</Text>
							</Flex>
						)}
					</NavLink>
				)
			)}
		</VStack>
	)
}