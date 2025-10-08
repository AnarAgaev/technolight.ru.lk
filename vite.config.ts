import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { analyzer } from 'vite-bundle-analyzer'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		analyzer(),
	],
	build: {
		cssCodeSplit: false,
		rollupOptions: {
			output: {
				// Убираем hash из имен файлов для entry points
				entryFileNames: `assets/[name].js`,
				// Убираем hash из имен файлов для assets (CSS, изображения и т.д.)
				assetFileNames: `assets/[name].[ext]`,
				// Убираем hash из имен файлов для динамически загружаемых модулей (chunks)
				chunkFileNames: `assets/[name].js`,
			},
		},
	},
})
