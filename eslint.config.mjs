import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig, globalIgnores } from "eslint/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default defineConfig([
  {
    extends: ["plugin:@next/next/recommended"],
    rules: {
      "@next/next/no-img-element": "off",
    },
  },
  globalIgnores([".src/Backgrounds/*, .src/Animations/*"]),
]);
