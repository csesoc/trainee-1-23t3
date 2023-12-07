import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { CLIENT_PORT } from '../config.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: CLIENT_PORT
  }
})
