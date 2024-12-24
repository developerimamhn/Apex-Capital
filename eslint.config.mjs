export default [
  {
    ignores: ["node_modules"], // Files or directories to ignore
  },
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Specify file types
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest", // Use the latest ECMAScript features
        sourceType: "module", // Enable ES Modules
      },
      globals: {
        React: "readonly",
      },
    },
    plugins: {
      // Include necessary plugins
      "@next/next": require("@next/eslint-plugin-next"),
    },
    rules: {
      // Add your custom rules here
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off", // For Next.js, React is auto-imported
    },
  },
];
