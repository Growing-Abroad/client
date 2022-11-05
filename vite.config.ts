import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@plugins', replacement: path.resolve(__dirname, './src/plugins') },
      { find: '@contexts', replacement: path.resolve(__dirname, './src/contexts') },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
      { find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
      { find: '@styles', replacement: path.resolve(__dirname, './src/styles') },
    ]
  }
})
