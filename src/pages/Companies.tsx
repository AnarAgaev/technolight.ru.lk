import { ContentLayout } from "@/ui"
import { Button, Checkbox, Flex, Table } from "@chakra-ui/react"
import { PageHeading } from "@/ui"
import { Plus, Check, Clock } from 'lucide-react'

const items = [
	{ id: 1, name: "OOO Сатурн", inn: 8700000887, contract: 8763467887, confirmed: true, active: false },
	{ id: 2, name: "OOO Юпитер", inn: 9500000700, contract: 9522578700, confirmed: true, active: true },
	{ id: 3, name: "OOO Венера", inn: 2300000654, contract: 2300088654, confirmed: true, active: false },
	{ id: 4, name: "OOO Меркурий", inn: 4400000688, contract: 4400996688, confirmed: true, active: false },
	{ id: 5, name: "OOO Солнышко", inn: 1200000890, contract: 1234567890, confirmed: false, active: false },
	{ id: 6, name: "OOO Нептун", inn: 7980000021, contract: 987654321, confirmed: false, active: false },
]

const Companies = () => {
	return (
		<ContentLayout>
			<Flex direction={{ base: "column", md: "row" }} gap="4" justify="space-between">
				<PageHeading>Мои юр.лица</PageHeading>
				<Button size="sm">
					<Plus />
					Добавить юр.лицо
				</Button>
			</Flex>

			<Table.ScrollArea>
				<Table.Root size="sm" borderWidth="1px" minW="48rem">
					<Table.Header>
						<Table.Row>
							<Table.ColumnHeader fontWeight="semibold" bgColor="gray.100">Название</Table.ColumnHeader>
							<Table.ColumnHeader fontWeight="semibold" bgColor="gray.100">ИНН</Table.ColumnHeader>
							<Table.ColumnHeader fontWeight="semibold" bgColor="gray.100">Номер договора</Table.ColumnHeader>
							<Table.ColumnHeader fontWeight="semibold" bgColor="gray.100">Подтверждено</Table.ColumnHeader>
							<Table.ColumnHeader fontWeight="semibold" bgColor="gray.100">Активное сейчас</Table.ColumnHeader>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{items.map((item) => (
							<Table.Row key={item.id}>
								<Table.Cell>{item.name}</Table.Cell>
								<Table.Cell>{item.inn}</Table.Cell>
								<Table.Cell>{item.contract}</Table.Cell>
								<Table.Cell>
									{item.confirmed
										? <Check size={20} />
										: <Clock size={20} />
									}
								</Table.Cell>
								<Table.Cell>
									{/* Нужно дописать обработку клика и изменение активного Юр.Лица */}
									<Checkbox.Root checked={item.active} readOnly>
										<Checkbox.HiddenInput />
										<Checkbox.Control />
									</Checkbox.Root>
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
					<Table.Footer>
						<Table.Row>
							<Table.Cell colSpan={5} fontWeight="semibold" bgColor="gray.100">Итого: {items.length} юр.лиц</Table.Cell>
						</Table.Row>
					</Table.Footer>
				</Table.Root>
			</Table.ScrollArea>
		</ContentLayout>
	)
}

export default Companies