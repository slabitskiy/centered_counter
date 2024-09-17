import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variableLike',
          format: ['snake_case', 'camelCase'],
        },
      ],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    },
  },
);
