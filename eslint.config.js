// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({
  features: {
    stylistic: {
      semi: true,
    },
    tooling: true,
    typescript: true,
  },
})
  // Stylistic rules
  .override('nuxt/stylistic', {
    rules: {
      '@stylistic/indent': 'off',
      '@stylistic/arrow-parens': 'off',
      '@stylistic/operator-linebreak': 'off',
      '@stylistic/brace-style': 'off',
      '@stylistic/indent-binary-ops': 'off',
    },
  })
  .override('nuxt/vue/rules', {
    rules: {
      'vue/max-attributes-per-line': ['error', { singleline: 5, multiline: 1 }],
      'vue/html-indent': ['error', 2],
      'vue/multi-word-component-names': ['off'],
    },
  });
