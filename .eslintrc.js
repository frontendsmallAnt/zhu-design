module.exports = {
  // 表示这是最顶层的 ESLint 配置
  root: true,
  // 指定代码运行的环境
  env: {
    browser: true, // 浏览器环境
    node: true, // Node.js 环境
    es2021: true, // 启用 ES2021 特性
  },
  // 继承的 ESLint 配置
  extends: [
    'eslint:recommended', // ESLint 推荐规则
    'plugin:@typescript-eslint/recommended', // TypeScript 推荐规则
    'plugin:vue/vue3-recommended', // Vue3 推荐规则
    '@vue/typescript/recommended', // Vue TypeScript 推荐规则
    '@vue/prettier', // Prettier 集成
    '@vue/eslint-config-typescript', // Vue TypeScript 配置
  ],
  // 指定解析器
  parser: 'vue-eslint-parser', // 用于解析 .vue 文件
  // 解析器选项
  parserOptions: {
    ecmaVersion: 2021, // 使用 ECMAScript 2021 语法
    parser: '@typescript-eslint/parser', // TypeScript 解析器
    sourceType: 'module', // 使用 ES 模块
  },
  // 使用的插件
  plugins: [
    '@typescript-eslint', // TypeScript 插件
    'prettier', // Prettier 插件
  ],
  // 具体规则配置
  rules: {
    'prettier/prettier': 'error', // 违反 Prettier 规则时报错
    'vue/multi-word-component-names': 'off', // 关闭组件名必须多个单词的限制
    '@typescript-eslint/no-explicit-any': 'warn', // 使用 any 类型时警告
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 未使用的变量警告，忽略下划线开头的参数
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用 console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用 debugger
  },
};
