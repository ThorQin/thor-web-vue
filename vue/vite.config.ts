import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	publicDir: resolve(__dirname, 'public'),
	root: 'vue',
	build: {
		outDir: '../dist/www',
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				login: resolve(__dirname, 'login/index.html'),
			},
		},
	},
});
