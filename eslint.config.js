export default {
    extends: ['eslint-config-codely/typescript'],
    rules: {
        'no-console': 'warn',
    },
    overrides: [{
        files: ['*.ts'],
        parserOptions: {
            project: './tsconfig.json',
        },
        rules: {
            '@typescript-eslint/no-floating-promises': 'warn',
        },
    }]
}