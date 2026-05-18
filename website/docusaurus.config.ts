import type {Config} from '@docusaurus/types';
import type {Preset} from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'Semovix AI Agent 工程化指南',
  tagline: '从模型调用到企业级智能执行平台',
  favicon: 'img/favicon.svg',

  url: 'https://doc.semovix.com',
  baseUrl: '/',

  organizationName: 'semovix',
  projectName: 'semovix-content',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: '../docs/ai-agent-engineering-guide',
          routeBasePath: 'ai-agent-engineering-guide',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/semovix/semovix-content/tree/main/docs/ai-agent-engineering-guide/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          routeBasePath: 'blog',
          editUrl:
            'https://github.com/semovix/semovix-content/tree/main/website/blog/',
          blogTitle: 'Semovix 技术博客',
          blogDescription:
            '企业级 AI Agent、语义治理、Skill、Harness 与 AI Workbench 工程化实践。',
          postsPerPage: 9,
          blogSidebarCount: 0,
          blogSidebarTitle: '最新文章',

  // 标签专题页
  tags: 'tags.yml',

  // 迁移阶段建议先 warn，全部文章标准化后改为 throw
  onInlineTags: 'warn',

  // 可按需要调整；当前保留 warn，提醒博客列表摘要需要 truncate
  onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-cards/semovix-ai-agent-guide.svg',
    metadata: [
      {
        name: 'keywords',
        content:
          'Semovix, Xino, AI Agent, Agent Engineering, Skill, Harness, MCP, AI Workbench, 语义治理, 找数问数, 企业级 Agent',
      },
    ],

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    navbar: {
      title: '',
      logo: {
        alt: 'Semovix Logo',
        src: 'img/semovix/logo.svg',
        srcDark: 'img/semovix/logo-dark.svg',
      },
      items: [
        {
          to: '/',
          label: '首页',
          position: 'left',
        },
        {
          to: '/ai-agent-engineering-guide',
          label: 'AI Agent 指南',
          position: 'left',
        },
        {
          to: '/blog',
          label: '技术博客',
          position: 'left',
        },
        {
          href: 'https://github.com/semovix/semovix-content',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            {
              label: 'AI Agent 工程化指南',
              to: '/ai-agent-engineering-guide',
            },
            {
              label: '技术博客',
              to: '/blog',
            },
            {
              label: '图解与信息图',
              to: '/ai-agent-engineering-guide/09-diagrams',
            },
          ],
        },
        {
          title: 'Semovix',
          items: [
            {
              label: '产品架构',
              to: '/#arch',
            },
            {
              label: '执行闭环',
              to: '/#loop',
            },
            {
              label: 'Xino 智能体',
              to: '/#xino',
            },
            {
              label: '语义治理',
              to: '/ai-agent-engineering-guide/05-semovix-semantic-governance',
            },
          ],
        },
        {
          title: '工程化',
          items: [
            {
              label: 'Skill 系统',
              to: '/ai-agent-engineering-guide/03-tool-skill-protocol/03-skill-concept',
            },
            {
              label: 'Agent Harness',
              to: '/ai-agent-engineering-guide/04-agent-runtime-engineering/04-agent-harness',
            },
            {
              label: 'AI Workbench',
              to: '/ai-agent-engineering-guide/06-ai-workbench-productization/01-ai-workbench',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Semovix. Built for enterprise AI Agent engineering.`,
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml', 'typescript', 'python', 'go', 'sql'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
