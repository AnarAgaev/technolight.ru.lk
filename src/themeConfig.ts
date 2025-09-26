import {
	createSystem,
	defaultConfig,
	defineConfig,
} from "@chakra-ui/react"

const config = defineConfig({
	theme: {
		tokens: {
			fonts: {
				body: { value: "Inter, system-ui, sans-serif" },
				heading: { value: "Inter, system-ui, sans-serif" },
				mono: { value: "Menlo, monospace" },
			},
			fontWeights: {
				hairline: { value: "100" },
				thin: { value: "200" },
				light: { value: "300" },
				normal: { value: "400" },
				medium: { value: "500" },
				semibold: { value: "600" },
				bold: { value: "700" },
				extrabold: { value: "800" },
				black: { value: "900" },
			},
		},
	},
})

export const themeConfig = createSystem(defaultConfig, config)