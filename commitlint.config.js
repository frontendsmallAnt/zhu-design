module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复bug
        'docs', // 文档更新
        'style', // 代码格式（不影响代码运行的变动）
        'refactor', // 重构（既不是新增功能，也不是修改bug的代码变动）
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回滚到上一个版本
        'build', // 打包
      ],
    ],
    'type-case': [2, 'always', 'lowerCase'], // 提交类型必须是小写（如 feat, fix）2 表示错误级别（会阻止提交）always 表示始终执行此规则
    'type-empty': [2, 'never'], // 提交类型不能为空 never 表示不允许为空
    'scope-empty': [0], // 是否允许范围为空（如 feat(scope)）0 表示不限制
    'scope-case': [0], // 范围的大小写规则 0 表示不检查
    'subject-empty': [2, 'never'], // 提交说明不能为空，必须有描述内容
    'subject-full-stop': [0], // 提交说明末尾是否需要句号
    'subject-case': [0], // 提交说明的大小写规则
    'header-max-length': [2, 'always', 72], // 提交信息标题最大长度 不能超过72个字符
    'body-leading-blank': [1, 'always'], // 提交信息正文前需要空行 1 表示警告级别（不会阻止提交）
    'footer-leading-blank': [1, 'always'], // 提交信息页脚前需要空行 1 表示警告级别
  },
};
