/**
 * Semovix customized blog list page for Docusaurus v3.x
 * High-end cyberpunk design matching agent-blog-homepage.html
 */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props} from '@theme/BlogListPage';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import styles from './styles.module.css';

interface TopicCard {
  icon: string;
  title: string;
  description: string;
  count: string;
  colorClass: string;
  href: string;
}

const TOPIC_CARDS: TopicCard[] = [
  {
    icon: '🔧',
    title: '工具调用系统',
    description: 'Function Calling、MCP、工具设计、并行执行与错误处理',
    count: '28 篇',
    colorClass: styles.tLime,
    href: '/blog/tags/tool-calling',
  },
  {
    icon: '🧠',
    title: '记忆与 RAG',
    description: '向量数据库、混合检索、长期记忆架构、GraphRAG',
    count: '24 篇',
    colorClass: styles.tSky,
    href: '/blog/tags/rag',
  },
  {
    icon: '🤝',
    title: '多智能体协作',
    description: 'Supervisor-Worker、对等网络、AutoGen、CrewAI 实战',
    count: '19 篇',
    colorClass: styles.tAmber,
    href: '/blog/tags/multi-agent',
  },
  {
    icon: '📐',
    title: 'Prompt 工程',
    description: 'CoT、自我批判、DSPy 自动优化、结构化输出设计',
    count: '31 篇',
    colorClass: styles.tRose,
    href: '/blog/tags/prompt-engineering',
  },
  {
    icon: '🚀',
    title: '生产部署',
    description: '异步架构、Docker、队列系统、可观测性、成本控制',
    count: '22 篇',
    colorClass: styles.tViolet,
    href: '/blog/tags/production-deployment',
  },
  {
    icon: '📊',
    title: '评估与测试',
    description: 'LLM-as-Judge、Golden Set、CI 集成、对抗性测试',
    count: '17 篇',
    colorClass: styles.tTeal,
    href: '/blog/tags/evaluation-testing',
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
  // Extract dynamic featured card from the latest post
  const firstPost = items[0]?.content;
  const featuredTitle = firstPost?.metadata.title || 'LangGraph 状态机 vs 传统 ReAct：生产环境下谁更稳？';
  const featuredDesc = firstPost?.metadata.description || '我们用同一个复杂任务基准测试了两种架构，结果出乎意料——在超过 12 步的任务中，状态机架构的成功率高出 34%……';
  const featuredLink = firstPost?.metadata.permalink || '#';
  const featuredDate = firstPost?.metadata.formattedDate || '2026-05-17';
  const featuredReadingTime = firstPost?.metadata.readingTime 
    ? `⏱ ${Math.ceil(firstPost.metadata.readingTime)} min` 
    : '⏱ 18 min';
  const featuredAuthor = firstPost?.metadata.authors?.[0]?.name || '陈思远';
  const featuredAuthorAvatar = featuredAuthor.substring(0, 1);

  const location = useLocation();
  const currentPath = location.pathname.replace(/\/$/, '');

  const isAllActive = currentPath === '/blog' || /^\/blog\/page\/\d+/.test(currentPath) || currentPath === '/blog/';
  const isReactActive = currentPath.includes('/blog/tags/react');
  const isToolCallingActive = currentPath.includes('/blog/tags/tool-calling');
  const isRagActive = currentPath.includes('/blog/tags/rag');
  const isMultiAgentActive = currentPath.includes('/blog/tags/multi-agent');
  const isLanggraphActive = currentPath.includes('/blog/tags/langgraph');
  const isPromptActive = currentPath.includes('/blog/tags/prompt-engineering');
  const isMcpActive = currentPath.includes('/blog/tags/mcp');
  const isProdActive = currentPath.includes('/blog/tags/production-deployment');
  const isSemanticActive = currentPath.includes('/blog/tags/semantic-governance');
  const isWorkbenchActive = currentPath.includes('/blog/tags/ai-workbench');

  return (
    <Layout>
      <main className={styles.page}>
        
        {/* ═══ HERO ═══ */}
        <section className={styles.hero}>
          <div className={styles.heroOrb} />
          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <div className={styles.heroEyebrow}>
                <div className={styles.pulse} />
                <span>持续更新中 · VOL.042 · 2026</span>
              </div>
              <h1 className={styles.heroTitle}>
                SEMOVIX<br/>
                <span className={styles.line2}>INSIGHTS</span>
              </h1>
              <p className={styles.heroDesc}>
                深入 AI Agent 系统的工程实践——从语义治理、指标口径、到智能体执行，聚焦写给真正在一线构建 Agent 与企业级落地的数据智能团队。
              </p>
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <span className={styles.num}>{items.length + 12}</span>
                  <span className={styles.label}>// 篇文章</span>
                </div>
                <div className={styles.heroStat}>
                  <span className={styles.num}>18</span>
                  <span className={styles.label}>// 专题系列</span>
                </div>
                <div className={styles.heroStat}>
                  <span className={styles.num}>6.2K</span>
                  <span className={styles.label}>// 订阅者</span>
                </div>
              </div>
            </div>

            {/* Featured Post Card */}
            <Link to={featuredLink} className={styles.heroFeatured}>
              <div className={styles.heroFeaturedTop} />
              <div className={styles.heroFeaturedBody}>
                <div className={styles.featuredBadge}>⚡ 本周精选</div>
                <h2>{featuredTitle}</h2>
                <p>{featuredDesc}</p>
                <div className={styles.heroFeaturedMeta}>
                  <div className={styles.authorChip}>
                    <div className={styles.authorAvatar}>{featuredAuthorAvatar}</div>
                    <div className={styles.authorInfo}>
                      <div className={styles.name}>{featuredAuthor}</div>
                      <div className={styles.date}>{featuredDate} · {featuredReadingTime}</div>
                    </div>
                  </div>
                  <button className={styles.readBtn}>READ →</button>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ═══ SEARCH & TAG CHIPS ═══ */}
        <section className={styles.searchSection}>
          <div className={styles.searchInner}>
            <div className={styles.searchLabel}>// 关键词导航</div>
            <div className={styles.keywordRow}>
              <span className={styles.kwLabel}>热门专题：</span>
              <Link to="/blog" className={clsx(styles.kwChip, isAllActive && styles.active)}>全部</Link>
              <Link to="/blog/tags/react" className={clsx(styles.kwChip, isReactActive && styles.active)}>ReAct</Link>
              <Link to="/blog/tags/tool-calling" className={clsx(styles.kwChip, styles.cTeal, isToolCallingActive && styles.active)}>Function Calling</Link>
              <Link to="/blog/tags/rag" className={clsx(styles.kwChip, styles.cSky, isRagActive && styles.active)}>RAG</Link>
              <Link to="/blog/tags/multi-agent" className={clsx(styles.kwChip, styles.cAmber, isMultiAgentActive && styles.active)}>多 Agent</Link>
              <Link to="/blog/tags/langgraph" className={clsx(styles.kwChip, styles.cAmber, isLanggraphActive && styles.active)}>LangGraph</Link>
              <Link to="/blog/tags/prompt-engineering" className={clsx(styles.kwChip, styles.cRose, isPromptActive && styles.active)}>Prompt 工程</Link>
              <Link to="/blog/tags/mcp" className={clsx(styles.kwChip, styles.cViolet, isMcpActive && styles.active)}>MCP</Link>
              <Link to="/blog/tags/production-deployment" className={clsx(styles.kwChip, isProdActive && styles.active)}>生产部署</Link>
              <Link to="/blog/tags/semantic-governance" className={clsx(styles.kwChip, styles.cTeal, isSemanticActive && styles.active)}>语义治理</Link>
              <Link to="/blog/tags/ai-workbench" className={clsx(styles.kwChip, styles.cViolet, isWorkbenchActive && styles.active)}>AI Workbench</Link>
            </div>
          </div>
        </section>

        {/* ═══ TWO COLUMN MAIN LAYOUT ═══ */}
        <div className={styles.mainWrap}>
          
          {/* Main content column */}
          <div className={styles.mainContentColumn}>
            
            {/* Topics Section */}
            <section className={styles.topicsSection}>
              <div className={styles.sectionHead}>
                <h2>TOPICS</h2>
                <span className={styles.secCount}>// 18 个专题</span>
                <Link to="/blog/tags" className={styles.viewAll}>VIEW ALL →</Link>
              </div>

              <div className={styles.topicsGrid}>
                {TOPIC_CARDS.map((topic) => (
                  <Link key={topic.title} to={topic.href} className={clsx(styles.topicCard, topic.colorClass)}>
                    <span className={styles.topicIcon}>{topic.icon}</span>
                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>
                    <span className={styles.topicCount}>{topic.count}</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Series Banner */}
            <div className={styles.seriesBanner}>
              <div className={styles.seriesText}>
                <div className={styles.seriesMeta}>精品系列</div>
                <h2>AGENT FROM<br/>SCRATCH</h2>
                <p>从零开始构建生产级 Agent——不依赖任何第三方框架，手写每一行代码，深入探究底层系统设计原理。共 5 集，附带完整可运行实例。</p>
              </div>
              <div className={styles.seriesEpisodes}>
                <div className={styles.epItem}>
                  <span className={styles.epNum}>EP01</span>
                  <span className={styles.epTitle}>最小 ReAct 循环实现</span>
                </div>
                <div className={styles.epItem}>
                  <span className={styles.epNum}>EP02</span>
                  <span className={styles.epTitle}>工具注册表与调度器</span>
                </div>
                <div className={styles.epItem}>
                  <span className={styles.epNum}>EP03</span>
                  <span className={styles.epTitle}>向量记忆系统设计</span>
                </div>
                <div className={styles.epItem}>
                  <span className={styles.epNum}>EP04</span>
                  <span className={styles.epTitle}>并发执行与状态治理</span>
                </div>
                <div className={styles.epItem}>
                  <span className={styles.epNum}>EP05</span>
                  <span className={styles.epTitle}>企业级可观测性监控</span>
                </div>
              </div>
            </div>

            {/* Latest Articles Feed */}
            <section className={styles.articlesSection} id="articles">
              <div className={styles.sectionHead}>
                <h2>LATEST PUBLICATIONS</h2>
                <span className={styles.secCount}>// 最新技术文章</span>
                <Link to="/blog/archive" className={styles.viewAll}>VIEW ALL →</Link>
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

          </div>

          {/* Sidebar Column */}
          <aside className={styles.sidebarColumn}>
            
            {/* Trending */}
            <div className={styles.sbSection}>
              <div className={styles.sbHead}>
                <h3>// 本周热门</h3>
                <Link to="/blog/archive">全部</Link>
              </div>
              <div className={styles.trendingList}>
                <Link to="/ai-agent-engineering-guide/preface/learning-path" className={styles.trendingItem}>
                  <div className={clsx(styles.trendRank, styles.hot)}>01</div>
                  <div className={styles.trendInfo}>
                    <h4>从零实现一个 ReAct Agent，不用任何第三方框架</h4>
                    <div className={styles.trendMeta}>
                      <span>📖 8.2K 阅读</span>
                      <span>⏱ 22 min</span>
                    </div>
                  </div>
                </Link>
                <Link to="/blog/tags/multi-agent" className={styles.trendingItem}>
                  <div className={clsx(styles.trendRank, styles.hot)}>02</div>
                  <div className={styles.trendInfo}>
                    <h4>LangGraph vs AutoGen：2026 年多智能体该选哪个？</h4>
                    <div className={styles.trendMeta}>
                      <span>📖 6.5K 阅读</span>
                      <span>⏱ 15 min</span>
                    </div>
                  </div>
                </Link>
                <Link to="/ai-agent-engineering-guide/category/05-semovix-语义治理场景" className={styles.trendingItem}>
                  <div className={styles.trendRank}>03</div>
                  <div className={styles.trendInfo}>
                    <h4>语义层治理选型：Semovix 指标体系如何让智能体精确找数</h4>
                    <div className={styles.trendMeta}>
                      <span>📖 5.1K 阅读</span>
                      <span>⏱ 18 min</span>
                    </div>
                  </div>
                </Link>
                <Link to="/ai-agent-engineering-guide/category/03-toolskill-与-mcp" className={styles.trendingItem}>
                  <div className={styles.trendRank}>04</div>
                  <div className={styles.trendInfo}>
                    <h4>MCP 协议完全指南：从端到端原理到架构实战</h4>
                    <div className={styles.trendMeta}>
                      <span>📖 4.8K 阅读</span>
                      <span>⏱ 16 min</span>
                    </div>
                  </div>
                </Link>
                <Link to="/blog/tags/production-deployment" className={styles.trendingItem}>
                  <div className={styles.trendRank}>05</div>
                  <div className={styles.trendInfo}>
                    <h4>Agent Token 性能优化：实测降本 65% 的 6 种经典手段</h4>
                    <div className={styles.trendMeta}>
                      <span>📖 4.2K 阅读</span>
                      <span>⏱ 14 min</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Tag Cloud */}
            <div className={styles.sbSection}>
              <div className={styles.sbHead}>
                <h3>// 热门标签</h3>
                <Link to="/blog/tags">全部</Link>
              </div>
              <div className={styles.tagCloud}>
                <Link to="/blog/tags/react" className={styles.cloudTag}>ReAct <span className={styles.ctCount}>(12)</span></Link>
                <Link to="/blog/tags/mcp" className={styles.cloudTag}>MCP <span className={styles.ctCount}>(8)</span></Link>
                <Link to="/blog/tags/rag" className={styles.cloudTag}>RAG <span className={styles.ctCount}>(14)</span></Link>
                <Link to="/blog/tags/tool-calling" className={styles.cloudTag}>Tool Calling <span className={styles.ctCount}>(16)</span></Link>
                <Link to="/blog/tags/evaluation-testing" className={styles.cloudTag}>Evaluation <span className={styles.ctCount}>(7)</span></Link>
                <Link to="/blog/tags/semantic-governance" className={styles.cloudTag}>Governance <span className={styles.ctCount}>(9)</span></Link>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className={clsx(styles.sbSection, styles.newsletterBox)}>
              <h4>AGENT.WEEKLY</h4>
              <p>每周一期，深度拆解全球最前沿 the AI Agent 工程实践与落地架构生态。</p>
              <input type="text" placeholder="输入您的电子邮箱地址..." className={styles.nlInput} />
              <button className={styles.nlBtn}>订阅周刊</button>
              <div className={styles.nlNote}>* 随时退订 · 无任何广告垃圾邮件</div>
            </div>

            {/* About Card */}
            <div className={clsx(styles.sbSection, styles.aboutCard)}>
              <div className={styles.sbHead} style={{padding: '0 0 12px 0', borderBottom: '1px solid var(--border)'}}>
                <h3>// ABOUT SEMOVIX</h3>
              </div>
              <p style={{marginTop: '12px'}}>
                Semovix 是企业级 AI 语义治理与智能体可信执行平台，帮助 Agent 深度理解企业异构数据、业务口径并安全高效地闭环执行。
              </p>
              <div className={styles.aboutStats}>
                <div className={styles.aboutStat}>
                  <div className={styles.n}>99.4%</div>
                  <div className={styles.l}>语义准确率</div>
                </div>
                <div className={styles.aboutStat}>
                  <div className={styles.n}>2.4M</div>
                  <div className={styles.l}>调用规模</div>
                </div>
              </div>
            </div>

          </aside>

        </div>

      </main>
    </Layout>
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
