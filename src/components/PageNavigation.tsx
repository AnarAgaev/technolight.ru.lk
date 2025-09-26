import { Flex, Text, Icon, Listbox, createListCollection } from "@chakra-ui/react"
import { House, Folder, File, AppWindowMac, Settings, Download, Users } from 'lucide-react'

const navItemsList = createListCollection({
	items: [
		{ label: "Главная", value: "main", icon: House },
		{ label: "Проекты", value: "projects", icon: Folder },
		{ label: "Заказы", value: "orders", icon: File },
		{ label: "Сайт", value: "site", icon: AppWindowMac },
		{ label: "Профиль и настройки", value: "settings", icon: Settings },
		{ label: "Скачать", value: "download", icon: Download },
		{ label: "Юр.лица", value: "contributors", icon: Users },
	],
})

export const PageNavigation = () => {
	return (
		<Listbox.Root collection={navItemsList} w="100%" mt="4">
			<Listbox.Content p="0" border={"none"} borderRadius={0.5} gap="2" alignItems={{md: "center", xl: "flex-start"}}>
				{navItemsList.items.map((navItem) => (
					<Listbox.Item item={navItem} key={navItem.value} w={{xl: "100%"}}>
						<Listbox.ItemText>
							<Flex alignItems={"center"} gap="1.5">
								<Icon as={navItem.icon} boxSize={4} color="black" />
								<Text fontSize="sm" lineHeight="20px" display={{md: "none", xl: "block"}}>
									{navItem.label}
								</Text>
							</Flex>
						</Listbox.ItemText>
					</Listbox.Item>
				))}
			</Listbox.Content>
		</Listbox.Root>
	)
}