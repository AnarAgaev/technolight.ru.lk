import {ChakraProvider} from '@chakra-ui/react'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {themeConfig} from './themeConfig.ts'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ChakraProvider value={themeConfig}>
			<App />
		</ChakraProvider>
	</StrictMode>,
)
