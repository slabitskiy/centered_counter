import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [eslintPlugin()],
  test: {
    root: './src',
    environment: 'happy-dom'
  },
  server: {
    host: 'localhost',
    port: 3000
  }
});
