export default [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                browser: true,
                node: true,
                es6: true,
            },
        },
        rules: {
            "no-console": "error",
            "indent": ["error", 4],
            "quotes": ["error", "double"],
            "semi": ["error", "always"],
            "no-unused-vars": "warn",
            "camelcase": "warn",
        },
    },
];
