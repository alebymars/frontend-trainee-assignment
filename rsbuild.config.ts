import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3001,
  },
  output: {
    distPath: {
      root: "build",
    },
    assetPrefix: "https://alebymars.github.io/frontend-trainee-assignment",
  },
  html: {
    title: "Free-To-Play Games",
    favicon: "./src/assets/icon.png",
    appIcon: "./src/assets/icon.png",
  },
});
