import { createListCollection, Portal, Select, VStack, Text } from "@chakra-ui/react";

type Option = {
	label: string
	value: string,
	info?: string
}

interface Props {
	label: string,
	optionsList: Option[],
	isMultiple: boolean
}

export const CustomSelect = ({label, optionsList, isMultiple}: Props) => {
	const options = createListCollection({
		items: optionsList,
	})

	return (
		<Select.Root multiple={isMultiple} collection={options} size="sm" width="full">
			<Select.HiddenSelect />
			<Select.Control>
				<Select.Trigger>
					<Select.ValueText placeholder={label} />
				</Select.Trigger>
				<Select.IndicatorGroup>
					<Select.ClearTrigger />
					<Select.Indicator />
				</Select.IndicatorGroup>
			</Select.Control>
			<Portal>
				<Select.Positioner>
					<Select.Content>
						{options.items.map((item) => (
							<Select.Item item={item} key={item.value}>
								<VStack align="stretch" gap="0">
									{item.label}
									{item.info && <Text fontSize="12px" color="gray.500" lineHeight={1.4}>{item.info}</Text>}
								</VStack>
								<Select.ItemIndicator />
							</Select.Item>
						))}
					</Select.Content>
				</Select.Positioner>
			</Portal>
		</Select.Root>
	)
}