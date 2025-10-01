import { createListCollection, Portal, Select } from "@chakra-ui/react";

type Option = {
	label: string
	value: string
}

interface Props {
	label: string,
	optionsList: Option[]
}

export const CustomMultipleSelect = ({label, optionsList}: Props) => {
	const options = createListCollection({
		items: optionsList,
	})

	return (
		<Select.Root multiple collection={options} size="sm" width="full">
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
								{item.label}
								<Select.ItemIndicator />
							</Select.Item>
						))}
					</Select.Content>
				</Select.Positioner>
			</Portal>
		</Select.Root>
	)
}