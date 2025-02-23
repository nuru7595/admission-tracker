import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteClean from "vite-plugin-clean";

export default defineConfig({
    base: "./",
    build: {
        outDir: "../",
    },
    plugins: [
        react(),
        tailwindcss(),
        viteClean({
            targetFiles: ["../index.html", "../assets"],
        }),
    ],
});