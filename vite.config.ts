import { defineConfig } from "vite";

// Plain static site: index.html at the root, assets in public/.
export default defineConfig({
  server: { host: "::", port: 8080, strictPort: true },
});
