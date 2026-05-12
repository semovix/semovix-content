import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type NavItem = {
  id: string;
  label: string;
  eyebrow?: string;
};

type Capability = {
  title: string;
  description: string;
  bullets: string[];
};

type Topic = {
  title: string;
  description: string;
  href: string;
  meta: string;
};

type Article = {
  category: string;
  title: string;
  summary: string;
  href: string;
  readTime: string;
};

const navItems: NavItem[] = [
  {id: 'overview', label: 'Semovix 概览', eyebrow: '01'},
  {id: 'positioning', label: '品牌定位', eyebrow: '02'},
  {id: 'capabilities', label: '核心能力', eyebrow: '03'},
  {id: 'architecture', label: '产品架构', eyebrow: '04'},
  {id: 'scenarios', label: '典型场景', eyebrow: '05'},
  {id: 'topics', label: '博客专题', eyebrow: '06'},
  {id: 'featured', label: '推荐阅读', eyebrow: '07'},
  {id: 'cta', label: '开始探索', eyebrow: '08'},
];

const capabilities: Capability[] = [
  {
    title: '数据语义治理',
    description:
      '把分散的数据、指标、口径与业务知识组织成企业可理解、可复用、可追溯的语义资产。',
    bullets: ['统一业务口径', '沉淀知识网络', '支持找数问数与资产治理'],
  },
  {
    title: '企业级 AI Workbench',
    description:
      '让用户从一句需求出发，逐步形成 Intent、Task Draft、Task Plan，并进入可控执行闭环。',
    bullets: ['人机协同任务控制台', '任务过程可看', '执行结果结构化呈现'],
  },
  {
    title: '可控智能体执行',
    description:
      '通过 Task Engine、Skill Registry、Runtime 与 Verification，把智能体能力变成可审计的企业流程。',
    bullets: ['策略与权限检查', 'Skill / Tool 调度', '验证、回放与审计'],
  },
  {
    title: '从语义到行动',
    description:
      'Semovix 不止回答问题，更强调把理解转化为任务执行、结果交付与知识沉淀。',
    bullets: ['Artifact / Report', 'Human-in-the-loop', '持续反馈优化'],
  },
];

const architectureSteps = [
  {
    title: '理解需求',
    detail: '解析用户输入，形成 Intent、任务类型与上下文边界。',
  },
  {
    title: '生成草稿',
    detail: '将模糊问题转化为 Task Draft，补齐目标、对象、约束与预期产出。',
  },
  {
    title: '规划执行',
    detail: '由 Task Plan 组织步骤、技能调用、数据依赖与确认节点。',
  },
  {
    title: '治理与校验',
    detail: '执行前进行 Policy / Permission Check，执行后生成 VerificationResult。',
  },
  {
    title: '沉淀结果',
    detail: '形成 Result Blocks、Artifact、Trace / Replay / Audit 与知识网络更新。',
  },
];

const scenarios = [
  {
    title: '找数问数',
    description:
      '围绕业务指标、数据资产与自然语言查询，构建可解释、可验证的问数体验。',
  },
  {
    title: '语义治理',
    description:
      '面向指标、术语、关系、知识节点与治理流程，实现企业语义资产持续演进。',
  },
  {
    title: '任务型智能体',
    description:
      '把分析、查询、校验、报告等能力拆解为 Skill，支撑复杂任务执行。',
  },
  {
    title: '企业知识沉淀',
    description:
      '将过程、结论、规则与验证结果回流到知识网络，形成长期复用能力。',
  },
];

const topics: Topic[] = [
  {
    title: 'AI Agent 工程化',
    description: '从能力栈、任务规划到执行闭环，系统讲清企业级 Agent 的落地方法。',
    href: '/blog',
    meta: 'Agent · Workbench · Runtime',
  },
  {
    title: '语义治理方法论',
    description: '围绕指标口径、知识网络、资产治理与企业数据理解展开。',
    href: '/blog',
    meta: 'Semantic Layer · Knowledge Graph',
  },
  {
    title: 'Skill / Tool 设计',
    description: '讨论技能拆解、工具调用、合同化接口与跨模型复用机制。',
    href: '/blog',
    meta: 'Skill Registry · Contracts',
  },
  {
    title: '产品与场景实践',
    description: '结合找数问数、语义治理工作台、智能执行平台进行案例复盘。',
    href: '/blog',
    meta: 'Case Study · Product Design',
  },
];

const featuredArticles: Article[] = [
  {
    category: '品牌总览',
    title: 'Semovix：连接数据、知识与行动的企业智能体平台',
    summary:
      '用一篇文章讲清楚 Semovix 的定位、能力边界与“From Semantics to Action”的产品主张。',
    href: '/blog',
    readTime: '8 min',
  },
  {
    category: 'AI 工作台',
    title: '为什么企业需要可控的 AI Workbench，而不只是一个聊天框？',
    summary:
      '从 Intent、Task Draft、Task Plan 到结果验证，解释任务型 AI 工作台的设计逻辑。',
    href: '/blog',
    readTime: '10 min',
  },
  {
    category: '语义治理',
    title: '语义层不是“术语表”：它为什么决定企业问数能力的上限',
    summary:
      '分析数据语义、指标一致性、知识网络与智能问答之间的关键关系。',
    href: '/blog',
    readTime: '12 min',
  },
];

export default function SemovixInsightsPage(): React.JSX.Element {
  return (
    <Layout
      title="Semovix 博客｜数据语义治理与智能执行"
      description="Semovix 专业博客门户页，介绍数据语义治理、AI Workbench、企业智能体与可控执行方法。"
    >
      <main className={styles.pageShell}>
        <section className={styles.hero} id="overview">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>Semovix Insights</div>
            <h1>
              数据语义治理与
              <span> 智能执行</span>
              <br />
              的专业内容中心
            </h1>
            <p className={styles.heroLead}>
              Semovix｜连接数据、知识与行动的企业智能体平台。
              这里聚焦企业级 AI Agent、语义治理、AI Workbench、Skill 化执行与可控智能体系统的实践方法。
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--primary button--lg" to="/blog">
                查看全部文章
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/intro">
                进入知识体系
              </Link>
            </div>
            <div className={styles.heroMetrics}>
              <div>
                <strong>Semantics</strong>
                <span>统一理解</span>
              </div>
              <div>
                <strong>Action</strong>
                <span>可控执行</span>
              </div>
              <div>
                <strong>Governance</strong>
                <span>验证审计</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.visualCardTop}>
              <span>From Semantics to Action</span>
              <strong>Semovix</strong>
            </div>
            <div className={styles.visualFlow}>
              <div>Intent</div>
              <span>→</span>
              <div>Task Draft</div>
              <span>→</span>
              <div>Task Plan</div>
            </div>
            <div className={styles.visualGrid}>
              <article>
                <strong>Semantic Layer</strong>
                <span>指标 · 术语 · 知识网络</span>
              </article>
              <article>
                <strong>Skill Registry</strong>
                <span>查询 · 分析 · 验证</span>
              </article>
              <article>
                <strong>Runtime</strong>
                <span>执行 · 回放 · 审计</span>
              </article>
              <article>
                <strong>Result Blocks</strong>
                <span>可视化 · Artifact · 报告</span>
              </article>
            </div>
          </div>
        </section>

        <div className={styles.contentGrid}>
          <aside className={styles.sidebar} aria-label="Semovix 博客页面导航">
            <div className={styles.sidebarInner}>
              <div className={styles.sidebarTitle}>页面导航</div>
              <nav>
                {navItems.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className={styles.sidebarLink}>
                    <span>{item.eyebrow}</span>
                    <strong>{item.label}</strong>
                  </a>
                ))}
              </nav>
              <div className={styles.sidebarFooter}>
                <small>Semovix</small>
                <strong>From Semantics to Action</strong>
              </div>
            </div>
          </aside>

          <div className={styles.mainContent}>
            <section className={styles.section} id="positioning">
              <div className={styles.sectionHead}>
                <span>01 · Brand Positioning</span>
                <h2>Semovix 是什么？</h2>
              </div>
              <div className={styles.positioningPanel}>
                <p>
                  <strong>Semovix</strong> 是面向企业场景的
                  <strong> 数据语义治理与可控智能体执行平台</strong>。
                  它不只解决“能不能回答”，更关注“能不能理解业务、能不能规划任务、能不能安全执行、能不能沉淀为组织能力”。
                </p>
                <div className={styles.quotePanel}>
                  <span>品牌主张</span>
                  <strong>连接数据、知识与行动</strong>
                  <p>让企业 AI 从信息检索，走向可治理、可验证、可执行的智能协同。</p>
                </div>
              </div>
            </section>

            <section className={styles.section} id="capabilities">
              <div className={styles.sectionHead}>
                <span>02 · Core Capabilities</span>
                <h2>博客首页重点呈现的四类能力</h2>
              </div>
              <div className={styles.capabilityGrid}>
                {capabilities.map((item) => (
                  <article className={styles.capabilityCard} key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.section} id="architecture">
              <div className={styles.sectionHead}>
                <span>03 · Operating Logic</span>
                <h2>从语义理解到任务执行的产品逻辑</h2>
              </div>
              <div className={styles.architectureTimeline}>
                {architectureSteps.map((step, index) => (
                  <article className={styles.timelineItem} key={step.title}>
                    <div className={styles.timelineIndex}>{String(index + 1).padStart(2, '0')}</div>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.section} id="scenarios">
              <div className={styles.sectionHead}>
                <span>04 · Application Scenarios</span>
                <h2>Semovix 关注的核心业务场景</h2>
              </div>
              <div className={styles.scenarioGrid}>
                {scenarios.map((scenario) => (
                  <article className={styles.scenarioCard} key={scenario.title}>
                    <h3>{scenario.title}</h3>
                    <p>{scenario.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.section} id="topics">
              <div className={styles.sectionHead}>
                <span>05 · Topic Channels</span>
                <h2>专业博客专题入口</h2>
              </div>
              <div className={styles.topicGrid}>
                {topics.map((topic) => (
                  <Link className={styles.topicCard} to={topic.href} key={topic.title}>
                    <span>{topic.meta}</span>
                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>
                    <strong>进入专题 →</strong>
                  </Link>
                ))}
              </div>
            </section>

            <section className={styles.section} id="featured">
              <div className={styles.sectionHead}>
                <span>06 · Featured Reading</span>
                <h2>推荐阅读</h2>
              </div>
              <div className={styles.articleList}>
                {featuredArticles.map((article) => (
                  <Link className={styles.articleCard} to={article.href} key={article.title}>
                    <div className={styles.articleMeta}>
                      <span>{article.category}</span>
                      <em>{article.readTime}</em>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.summary}</p>
                  </Link>
                ))}
              </div>
            </section>

            <section className={styles.ctaSection} id="cta">
              <div>
                <span>07 · Explore Semovix</span>
                <h2>用博客把品牌认知、产品方法与技术体系连成一条线</h2>
                <p>
                  这个页面适合作为 Semovix 官网“博客 / Insights”门户页：既承担品牌介绍，也承担内容专题分发与文章流量承接。
                </p>
              </div>
              <div className={styles.ctaActions}>
                <Link className="button button--primary button--lg" to="/blog">
                  阅读最新文章
                </Link>
                <Link className="button button--secondary button--lg" to="/docs/intro">
                  查看产品文档
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
