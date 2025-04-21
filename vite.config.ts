import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	return {
		plugins: [react()],
		// Base path for GitHub Pages deployment - change 'academic-portfolio' to your GitHub username
		base: mode === 'production' ? '/academic-portfolio/' : '/',
	};
});
