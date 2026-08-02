const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')
const path = require('path')

module.exports = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  test: {
    include: ['src/tests/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    environment: 'jsdom',
    passWithNoTests: true
  }
})

