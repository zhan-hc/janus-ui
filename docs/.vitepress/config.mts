import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JANUS UI",
  description: "一个轻量级UI框架",
  head: [['link', { rel: 'icon', href: '/logo-link.svg' }]],
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/install' },
      { text: '组件', link: '/api/overview' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            { text: '安装', link: '/guide/install' },
          ]
        },
        {
          text: '进阶',
          items: [
            { text: '主题', link: '/guide/theme' },
          ]
        },
      ],
      '/api/': [
        {
          text: '',
          items: [
            { text: 'Overview 组件总览', link: '/api/overview' },
          ]
        },
        {
          text: '基础组件',
          items: [
            { text: 'Icon 图标', link: '/api/icon' },
          ]
        },
        {
          text: '动画',
          items: [
            { text: 'Hover 悬浮', link: '/api/hover' },
          ]
        },
        {
          text: '常用组件',
          items: [
            { text: 'Anchor 锚点', link: '/api/anchor' },
            { text: 'Switch 开关', link: '/api/switch' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhan-hc/janus-ui' }
    ]
  }
})
