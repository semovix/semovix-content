/**
 * Semovix customized blog list page for Docusaurus v3.x
 *
 * This file overrides @theme/BlogListPage and keeps the original
 * Docusaurus metadata / structured-data / pagination pipeline intact.
 */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props} from '@theme/BlogListPage';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import styles from './styles.module.css';

type TopicCard = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  keywords: string[];
};

type EditorialTrack = {
  title: string;
  description: string;
  items: string[];
};

const TOPIC_CARDS: TopicCard[] = [
  {
    eyebrow: '专题 01',
    title: 'AI Agent 工程化',
    description:
      '从 Agent 基础能力、上下文组织到任务闭环，形成可落地的工程认知。',
    href: '/ai-agent-engineering-guide/01-agent-foundation',
    keywords: ['Agent Loop', 'Context', 'Task'],
  },
  {
    eyebrow: '专题 02',
    title: 'Tool、Skill 与 MCP',
    description:
      '聚焦能力封装、工具调用、Skill 沉淀与协议协同，理解智能体的执行接口。',
    href: '/ai-agent-engineering-guide/03-tool-skill-protocol',
    keywords: ['Tool Calling', 'Skill', 'MCP'],
  },
  {
    eyebrow: '专题 03',
    title: '语义治理与数据理解',
    description:
      '从业务语义、指标口径到治理工作台，解释企业数据如何被智能体理解。',
    href: '/ai-agent-engineering-guide/05-semovix-semantic-governance',
    keywords: ['Semantic Layer', 'Governance', 'Find Data'],
  },
  {
    eyebrow: '专题 04',
    title: 'AI Workbench 产品化',
    description:
      '讨论任务草稿、执行过程、结果块、人工确认与可回放体验的产品闭环。',
    href: '/ai-agent-engineering-guide/06-ai-workbench-productization',
    keywords: ['Workbench', 'Artifact', 'Human-in-the-loop'],
  },
];

const EDITORIAL_TRACKS: EditorialTrack[] = [
  {
    title: '方法论',
    description: '回答“应该如何理解”',
    items: ['概念边界', '能力模型', '学习路径'],
  },
  {
    title: '工程实践',
    description: '回答“应该如何实现”',
    items: ['架构设计', '协议合同', '研发协同'],
  },
  {
    title: '产品落地',
    description: '回答“如何进入业务”',
    items: ['场景闭环', '语义治理', '可信执行'],
  },
];



const featuredTopics = [
  {
    eyebrow: 'Topic 01',
    title: 'AI Agent 工程化',
    description:
      '围绕能力边界、任务闭环、执行可靠性与企业级落地，构建系统性的 Agent 工程认知。',
    href: '/blog/tags/agent-engineering',
    meta: '架构 · 流程 · 工程闭环',
  },
  {
    eyebrow: 'Topic 02',
    title: 'Skill 系统',
    description:
      '从 Tool Calling 到 Skill 能力沉淀，理解为什么组织经验需要被结构化封装。',
    href: '/blog/tags/skill-system',
    meta: '复用 · 编排 · 能力资产',
  },
  {
    eyebrow: 'Topic 03',
    title: '语义治理',
    description:
      '以 Semovix 为核心，讨论语义层、业务指标、数据理解与找数问数的产品化实践。',
    href: '/blog/tags/semantic-governance',
    meta: '语义层 · 指标 · 数据资产',
  },
  {
    eyebrow: 'Topic 04',
    title: 'AI Workbench',
    description:
      '聚焦任务草稿、执行页 Block、人机协同、结果验证与智能工作台体验。',
    href: '/blog/tags/ai-workbench',
    meta: '任务页 · 结果块 · 产品体验',
  },
];

const readingTracks = [
  {
    title: '理解 Agent',
    description: '适合刚开始建立 AI Agent 工程认知的读者。',
    links: [
      {label: 'Agent 基础认知', href: '/blog/tags/agent-foundation'},
      {label: 'AI Agent 工程化', href: '/blog/tags/agent-engineering'},
      {label: 'Context Engineering', href: '/blog/tags/context-engineering'},
    ],
  },
  {
    title: '构建能力系统',
    description: '适合关注工具调用、Skill 与 Runtime 的工程团队。',
    links: [
      {label: 'Tool Calling', href: '/blog/tags/tool-calling'},
      {label: 'Skill 系统', href: '/blog/tags/skill-system'},
      {label: 'Harness 与 Runtime', href: '/blog/tags/harness-runtime'},
    ],
  },
  {
    title: '进入 Semovix 场景',
    description: '适合关注产品、治理、企业级可信执行的读者。',
    links: [
      {label: '语义治理', href: '/blog/tags/semantic-governance'},
      {label: 'AI Workbench', href: '/blog/tags/ai-workbench'},
      {label: '验证、审计与可控性', href: '/blog/tags/verification-audit'},
    ],
  },
];

function BlogListPageMetadata(props: Props): ReactNode {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;

  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent({metadata, items}: Props): ReactNode {
  return (
    <Layout>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroBackdrop} />
          <div className={styles.heroGrid}>
            <div className={styles.heroMain}>
              <span className={styles.heroBadge}>Semovix Insights</span>
              <h1>Semovix 技术博客</h1>
              <p className={styles.heroLead}>
                聚焦企业级 AI Agent、语义治理、Skill 系统、Harness Runtime
                与 AI Workbench 产品化实践。
              </p>
              <p className={styles.heroDescription}>
                这里不只解释概念，更强调系统边界、工程闭环与可落地的方法论。
                文章会持续围绕“从语义到行动”的 Semovix 主线展开。
              </p>
              <div className={styles.heroActions}>
                <Link className="button button--primary button--lg" to="#latest-posts">
                  阅读最新文章
                </Link>
                <Link
                  className="button button--secondary button--lg"
                  to="/ai-agent-engineering-guide">
                  打开 AI Agent 指南
                </Link>
              </div>
            </div>

            <aside className={styles.heroPanel}>
              <div className={styles.panelHeader}>
                <span>内容组织方式</span>
                <strong>Topic-first</strong>
              </div>
              <div className={styles.panelList}>
                <div className={styles.panelItem}>
                  <strong>01</strong>
                  <div>
                    <h3>专题优先</h3>
                    <p>先按能力域组织，再按时间线浏览。</p>
                  </div>
                </div>
                <div className={styles.panelItem}>
                  <strong>02</strong>
                  <div>
                    <h3>方法论 + 实践</h3>
                    <p>从原理解释，逐步落到可执行方案。</p>
                  </div>
                </div>
                <div className={styles.panelItem}>
                  <strong>03</strong>
                  <div>
                    <h3>产品联动</h3>
                    <p>文章与 Semovix、Xino、工作台能力互相映射。</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className={styles.topicSection}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionEyebrow}>Featured Topics</span>
              <h2>从专题进入 Semovix 技术体系</h2>
            </div>
            <Link to="/blog/tags" className={styles.inlineLink}>
              查看全部专题 →
            </Link>
          </div>

          <div className={styles.topicGrid}>
            {featuredTopics.map((topic) => (
              <Link key={topic.title} to={topic.href} className={styles.topicCard}>
                <span className={styles.topicEyebrow}>{topic.eyebrow}</span>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <footer>{topic.meta}</footer>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.trackSection}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionEyebrow}>Reading Paths</span>
              <h2>按阅读目标选择入口</h2>
            </div>
          </div>

          <div className={styles.trackGrid}>
            {readingTracks.map((track) => (
              <article key={track.title} className={styles.trackCard}>
                <h3>{track.title}</h3>
                <p>{track.description}</p>
                <div className={styles.trackLinks}>
                  {track.links.map((link) => (
                    <Link key={link.href} to={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="latest-posts" className={styles.latestSection}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionEyebrow}>Latest Posts</span>
              <h2>最新技术文章</h2>
            </div>
            <Link to="/blog/tags" className={styles.inlineLink}>
              按专题筛选 →
            </Link>
          </div>

          <div className={styles.postListShell}>
            <BlogPostItems items={items} />
            <BlogListPaginator metadata={metadata} />
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div>
            <span className={styles.sectionEyebrow}>Continue Reading</span>
            <h2>把博客文章与系统化指南连成一条学习路径</h2>
            <p>
              博客适合快速理解观点与实践切面；指南适合建立完整的工程知识体系。
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link className="button button--primary button--lg" to="/ai-agent-engineering-guide">
              阅读工程化指南
            </Link>
            <Link className="button button--secondary button--lg" to="/blog/tags">
              浏览全部专题
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
function BlogListPageMetadata(props: Props): ReactNode {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;

  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function TopicCardItem({topic}: {topic: TopicCard}): ReactNode {
  return (
    <Link className={styles.topicCard} to={topic.href}>
      <span className={styles.topicEyebrow}>{topic.eyebrow}</span>
      <h3>{topic.title}</h3>
      <p>{topic.description}</p>
      <ul className={styles.keywordList}>
        {topic.keywords.map((keyword) => (
          <li key={keyword}>{keyword}</li>
        ))}
      </ul>
      <span className={styles.topicAction}>进入专题</span>
    </Link>
  );
}

function HeroPanel({metadata}: {metadata: Props['metadata']}): ReactNode {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <span className={styles.kicker}>Semovix Technical Blog</span>
        <h1>{metadata.blogTitle || 'Semovix 技术博客'}</h1>
        <p className={styles.heroDescription}>
          {metadata.blogDescription ||
            '聚焦企业级 AI Agent、语义治理、Skill 系统与智能执行平台的工程化实践。'}
        </p>
        <div className={styles.heroActions}>
          <Link className="button button--primary button--lg" to="#latest-posts">
            浏览最新文章
          </Link>
          <Link className="button button--secondary button--lg" to="/ai-agent-engineering-guide">
            阅读 AI Agent 指南
          </Link>
        </div>
      </div>

      <aside className={styles.heroPanel} aria-label="Semovix 博客定位">
        <div className={styles.heroPanelHeader}>内容主线</div>
        <div className={styles.heroPanelItem}>
          <strong>01</strong>
          <span>解释智能体系统中的关键概念</span>
        </div>
        <div className={styles.heroPanelItem}>
          <strong>02</strong>
          <span>拆解可实施、可验证的工程方案</span>
        </div>
        <div className={styles.heroPanelItem}>
          <strong>03</strong>
          <span>沉淀 Semovix 的产品方法论</span>
        </div>
        <div className={styles.heroMiniLinks}>
          <Link to="/blog/tags">全部标签</Link>
          <Link to="/blog/archive">文章归档</Link>
        </div>
      </aside>
    </section>
  );
}

function TopicSection(): ReactNode {
  return (
    <section className={styles.sectionBlock}>
      <div className={styles.sectionHeading}>
        <div>
          <span className={styles.sectionKicker}>Featured Topics</span>
          <h2>专题化阅读入口</h2>
        </div>
        <p>
          把博客文章、知识库与产品方法论放在同一条内容主线上，先选专题，再进入文章。
        </p>
      </div>
      <div className={styles.topicGrid}>
        {TOPIC_CARDS.map((topic) => (
          <TopicCardItem key={topic.title} topic={topic} />
        ))}
      </div>
    </section>
  );
}

function EditorialSection(): ReactNode {
  return (
    <section className={styles.editorialSection}>
      <div className={styles.editorialIntro}>
        <span className={styles.sectionKicker}>Editorial Logic</span>
        <h2>博客不是零散文章，而是一套持续沉淀的内容体系</h2>
        <p>
          Semovix 技术博客建议围绕“方法论 → 工程实践 → 产品落地”三个层次组织，
          与 AI Agent 工程化指南互相导流。
        </p>
      </div>
      <div className={styles.trackGrid}>
        {EDITORIAL_TRACKS.map((track) => (
          <article className={styles.trackCard} key={track.title}>
            <h3>{track.title}</h3>
            <p>{track.description}</p>
            <ul>
              {track.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function LatestPostsSection({items, metadata}: Pick<Props, 'items' | 'metadata'>): ReactNode {
  return (
    <section className={styles.postsSection} id="latest-posts">
      <div className={styles.sectionHeadingCompact}>
        <div>
          <span className={styles.sectionKicker}>Latest Publications</span>
          <h2>最新文章</h2>
        </div>
        <div className={styles.postsMetaLinks}>
          <Link to="/blog/archive">查看归档</Link>
          <Link to="/blog/tags">按标签浏览</Link>
        </div>
      </div>

      <div className={styles.postsPanel}>
        <div className={styles.postsList}>
          <BlogPostItems items={items} />
        </div>
        <div className={styles.paginationWrap}>
          <BlogListPaginator metadata={metadata} />
        </div>
      </div>
    </section>
  );
}

function CrossContentCta(): ReactNode {
  return (
    <section className={styles.crossContentCta}>
      <div>
        <span className={styles.sectionKicker}>Continue Exploring</span>
        <h2>从博客进入系统化知识体系</h2>
        <p>
          文章用于快速传播与观点表达，指南用于形成完整知识栈。两者结合，才能把 Semovix 的内容资产做深。
        </p>
      </div>
      <div className={styles.ctaActions}>
        <Link className="button button--primary button--lg" to="/ai-agent-engineering-guide">
          打开 AI Agent 工程化指南
        </Link>
        <Link className="button button--secondary button--lg" to="/blog/tags">
          浏览文章标签
        </Link>
      </div>
    </section>
  );
}


export default function BlogListPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
        styles.blogListPageRoot,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
