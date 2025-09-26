import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import { themeConfig } from './themeConfig.ts'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ChakraProvider value={themeConfig}>
			<App />
		</ChakraProvider>
	</StrictMode>
)
