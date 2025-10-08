import {
	Flex,
	Icon,
	Presence,
	useBreakpointValue,
	useDisclosure,
} from '@chakra-ui/react'
import {TextAlignJustify} from 'lucide-react'
import {PageNavigation, UserDataCard} from '@/components'
import {LogoIcon, LogoText} from '@/ui'

export const Sidebar = () => {
	const {open, onToggle} = useDisclosure()
	const present = useBreakpointValue({base: open, md: true})

	return (
		<Flex
			position={'sticky'}
			top="0"
			direction="column"
			gap="3"
			px={{base: 0, xl: 5}}
			py={{base: 2, md: 5}}
			bgColor="white"
		>
			<Flex
				alignItems="center"
				justifyContent={{base: 'space-between', md: 'center', xl: 'flex-start'}}
				gap={{xl: 1}}
				px={{base: 4, md: 0}}
			>
				<LogoIcon />
				<LogoText display={{base: 'none', xl: 'block'}} />
				<Icon
					boxSize={5}
					color={'black'}
					display={{md: 'none'}}
					onClick={onToggle}
				>
					<TextAlignJustify />
				</Icon>
			</Flex>

			<Presence
				present={present}
				animationName={{_open: 'fade-in', _closed: 'fade-out'}}
				animationDuration="fastest"
				h={{base: 'calc(100vh - 80px)', md: 'auto'}}
				overflow={{base: 'auto', md: 'visible'}}
				p={{base: 4, md: 0}}
			>
				<UserDataCard />
				<PageNavigation />
			</Presence>
		</Flex>
	)
}
