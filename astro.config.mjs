import { defineConfig } from "astro/config"
import { fileURLToPath, URL } from "node:url"

export default defineConfig({
  vite: {
    build: {
      minify: false,
      cssMinify: false,
      cssCodeSplit: true,
      assetsInlineLimit: 0, // отключает инлайн маленьких файлов
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name][extname]",
          chunkFileNames: "assets/[name].js",
          entryFileNames: "assets/[name].js",
        },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
})
