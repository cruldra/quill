const items = [
  {
    title: '快速开始',
    url: '/docs/quickstart',
  },
  {
    title: '为什么选择 Quill',
    url: '/docs/why-quill',
  },
  {
    title: '安装',
    url: '/docs/installation',
  },
  {
    title: '升级到 2.0',
    url: '/docs/upgrading-to-2-0',
  },
  {
    title: '配置',
    url: '/docs/configuration',
  },
  {
    title: '格式',
    url: '/docs/formats',
  },
  {
    title: 'API',
    url: '/docs/api',
    children: [
      {
        title: '内容',
        url: '/docs/api/#content',
      },
      {
        title: '格式化',
        url: '/docs/api/#formatting',
      },
      {
        title: '选择',
        url: '/docs/api/#selection',
      },
      {
        title: '编辑器',
        url: '/docs/api/#editor',
      },
      {
        title: '事件',
        url: '/docs/api/#events',
      },
      {
        title: '模型',
        url: '/docs/api/#model',
      },
      {
        title: '扩展',
        url: '/docs/api/#extension',
      },
    ],
  },
  {
    title: 'Delta',
    url: '/docs/delta',
  },
  {
    title: '模块',
    url: '/docs/modules',
    children: [
      {
        title: '工具栏',
        url: '/docs/modules/toolbar',
      },
      {
        title: '键盘',
        url: '/docs/modules/keyboard',
      },
      {
        title: '历史',
        url: '/docs/modules/history',
      },
      {
        title: '剪贴板',
        url: '/docs/modules/clipboard',
      },
      {
        title: '语法高亮',
        url: '/docs/modules/syntax',
      },
    ],
  },
  {
    title: '自定义',
    url: '/docs/customization',
    children: [
      {
        title: '主题',
        url: '/docs/customization/themes',
      },
      {
        title: '注册表',
        url: '/docs/customization/registries',
      },
    ],
  },
  {
    title: '指南',
    url: '/docs/guides/designing-the-delta-format',
    children: [
      {
        title: '设计 Delta 格式',
        url: '/docs/guides/designing-the-delta-format',
      },
      {
        title: '构建自定义模块',
        url: '/docs/guides/building-a-custom-module',
      },
      {
        title: '使用 Parchment 克隆 Medium',
        url: '/docs/guides/cloning-medium-with-parchment',
      },
    ],
  },
];

export default items;
