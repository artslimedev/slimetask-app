module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
  ],
  rules: {
    // Global rules
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/no-require-imports": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-empty-object-type": "warn",
  },
  overrides: [
    {
      files: ["lib/**/*.{ts,tsx,js,d.ts}"],
      rules: {
        "@typescript-eslint/no-unused-expressions": "off",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-object-type": "off",
      },
    },
  ],
};
