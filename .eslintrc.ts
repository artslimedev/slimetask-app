import { Linter } from "eslint";

const config: Linter.BaseConfig = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
  ],
  rules: {
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-empty-object-type": "warn",
  },
  overrides: [
    {
      files: ["./lib/**/*.{ts,tsx}"],
      rules: {
        "@typescript-eslint/no-unused-expressions": "off",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-object-type": "off",
      },
    },
  ],
};

export default config;
