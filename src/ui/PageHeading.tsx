import { Heading } from "@chakra-ui/react"

interface Props {
	children: string
}

export const PageHeading = ({ children }: Props) => {
	return (
		<Heading
			fontWeight="normal"
			fontSize={{base: "xl", md: "2xl"}}
			lineHeight="1.2"
		>
			{ children }
		</Heading>
	)
}