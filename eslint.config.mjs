export default [
  {
    ignores: ["eslint.config.mjs"]
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        document: "readonly",
        window: "readonly",
        fetch: "readonly",
        console: "readonly"
      }
    },
    rules: {
      "no-var": "error",
      "prefer-const": "warn"
    }
  }
];