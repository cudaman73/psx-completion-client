import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// API routes served by the Express backend. Note that /login, /register and /logout
// collide with client-side page routes of the same name, so the proxy below only
// forwards XHR/fetch calls (JSON) and lets browser navigations fall through to the SPA.
const apiRoutes =
  /^\/(uncompleted-games|completed-games|games|get-current-game|update-current-game|toggle-completion|login|register|logout|session)/

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      [apiRoutes.source]: {
        target: 'http://localhost:3001',
        changeOrigin: true,
        // Let full-page navigations (Accept: text/html) render the React app;
        // only proxy data requests (fetch/XHR) to the API. Mirrors CRA's old proxy.
        bypass: (req) => {
          if (req.headers.accept && req.headers.accept.includes('text/html')) {
            return req.url // serve index.html via Vite's SPA fallback
          }
        },
      },
    },
  },
  // Components keep JSX inside .js files (CRA convention). esbuild only parses JSX
  // in .jsx by default, so treat project .js files as JSX to avoid renaming them all.
  esbuild: { loader: 'jsx', include: /src\/.*\.js$/, exclude: [] },
  optimizeDeps: { esbuildOptions: { loader: { '.js': 'jsx' } } },
})
