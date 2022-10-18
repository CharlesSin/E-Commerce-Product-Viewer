import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, process.cwd(), "")
  if (command === "serve") {
    return {
      base: "/",
      plugins: [react()],
      define: {
        __APP_ENV__: env.APP_ENV,
      },
    }
  } else {
    // command === 'build'
    return {
      base: "/E-Commerce-Product-Viewer/",
      plugins: [react()],
      define: {
        __APP_ENV__: env.APP_ENV,
      },
    }
  }
})
