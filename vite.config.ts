import { resolve } from 'path';
import { defineConfig } from 'vite';
import hugoPlugin from 'vite-hugo-plugin';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

const appDir = __dirname;
const hugoOutDir = resolve(appDir, 'public');
const hugoConfigFileName = 'config.toml';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		hugoPlugin({
			appDir,
			hugoOutDir,
			hugoConfigFileName,
		}),
		ViteMinifyPlugin({
			minifyURLs: false,
			removeAttributeQuotes: false,
		}),
	],
});
