import {
	Box,
	Flex,
	Heading,
	Icon,
	Menu,
	Portal,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react'
import {ChevronDown} from 'lucide-react'
import {useState} from 'react'

export const UserDataCard = () => {
	const [isOpen, setIsOpen] = useState(false)
	const isVisible = useBreakpointValue({base: true, md: isOpen, xl: true})

	return (
		<>
			<Text
				onClick={() => setIsOpen(!isOpen)}
				as="div"
				alignItems={'center'}
				justifyContent={'center'}
				display={{base: 'none', md: 'inline-flex', xl: 'none'}}
				textTransform="uppercase"
				color="gray.900"
				textAlign="center"
				mt={4}
				background={isOpen ? 'gray.100' : 'white'}
				minW="36px"
				h="36px"
				px={1}
				borderRadius={2}
				position={'relative'}
				left={'50%'}
				transform={'translateX(-50%)'}
				fontSize={16}
			>
				юп
			</Text>

			<Box
				position={{md: 'absolute', xl: 'relative'}}
				right={{md: 0}}
				w={{base: '100%', md: '300px', xl: '100%'}}
				transform={{md: 'translate(calc(100% - 5px), -50%)', xl: 'none'}}
				bg="white"
				shadow="md"
				display={isVisible ? 'block' : 'none'}
				zIndex={10}
				boxShadow={'none'}
			>
				<Flex direction={'column'} gap={3}>
					<Flex
						direction={'column'}
						gap={1}
						p={{base: 2, xl: 0}}
						borderRadius="6px"
						boxShadow={{
							base: '0 0 1px 0 rgba(24, 24, 27, 0.30), 0 4px 8px 0 rgba(24, 24, 27, 0.10)',
							xl: 'none',
						}}
					>
						<Heading size="sm">ООО Юпитер</Heading>

						<Text
							fontSize="sm"
							color="gray.600"
							lineHeight="20px"
							textTransform="uppercase"
							mb="3"
						>
							ИНН 65543235678876
						</Text>

						<Menu.Root>
							<Menu.Context>
								{({open}) => (
									<>
										<Menu.Trigger asChild>
											<Flex alignItems="center" gap="1.5" cursor={'pointer'}>
												<Icon
													as={ChevronDown}
													boxSize={4}
													color="gray.400"
													transform={open ? 'scale(1, -1)' : 'scale(1)'}
													transition="transform 0.2s ease"
												/>
												<Text color="gray.400" fontSize="sm" lineHeight="20px">
													Поменять активное ор лицо
												</Text>
											</Flex>
										</Menu.Trigger>

										<Portal>
											<Menu.Positioner>
												<Menu.Content>
													<Menu.Item
														value="contributor-id-1"
														cursor={'pointer'}
													>
														Другое Юр. Лицо
													</Menu.Item>
													<Menu.Item
														value="contributor-id-2"
														cursor={'pointer'}
													>
														Другое Юр. Лицо
													</Menu.Item>
													<Menu.Item
														value="contributor-id-3"
														cursor={'pointer'}
													>
														Другое Юр. Лицо
													</Menu.Item>
													<Menu.Item
														value="contributor-id-4"
														cursor={'pointer'}
													>
														Другое Юр. Лицо
													</Menu.Item>
												</Menu.Content>
											</Menu.Positioner>
										</Portal>
									</>
								)}
							</Menu.Context>
						</Menu.Root>
					</Flex>
				</Flex>
			</Box>
		</>
	)
}
