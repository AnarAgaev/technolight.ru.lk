import { Heading } from "@chakra-ui/react"

interface Props {
	children: string
}

export const PageHeading = ({ children }: Props) => {
	return (
		<Heading fontWeight="normal" fontSize="2xl" lineHeight="32px">
			{ children }
		</Heading>
	)
}