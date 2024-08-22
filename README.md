eslint-plugin-react-hooks
This ESLint plugin enforces the Rules of Hooks.

It is a part of the Hooks API for React.

Installation
Note: If you're using Create React App, please use react-scripts >= 3 instead of adding it directly.

Assuming you already have ESLint installed, run:

# npm
npm install eslint-plugin-react-hooks --save-dev


{
  "extends": [
    // ...
    "plugin:react-hooks/recommended"
  ]
}
Custom Configuration
If you want more fine-grained configuration, you can instead add a snippet like this to your ESLint configuration file:

{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
Advanced Configuration
exhaustive-deps can be configured to validate dependencies of custom Hooks with the additionalHooks option. This option accepts a regex to match the names of custom Hooks that have dependencies.

{
  "rules": {
    // ...
    "react-hooks/exhaustive-deps": ["warn", {
      "additionalHooks": "(useMyCustomHook|useMyOtherCustomHook)"
    }]
  }
}

```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
