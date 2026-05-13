import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const capabilityCards = [
  {
    title: 'AI Agent 工程化',
    description:
      '从模型调用、上下文组织、工具编排到任务执行闭环，沉淀可复用的工程方法。',
    eyebrow: 'Agent Engineering',
  },
  {
    title: '语义治理与找数问数',
    description:
      '围绕企业数据语义、指标口径、知识层与执行层，建立可解释的智能业务入口。',
    eyebrow: 'Semantic Governance',
  },
  {
    title: 'Skill / Tool / Runtime',
    description:
      '把经验、流程与工具封装为能力资产，让 Agent 从“会回答”走向“能执行”。',
    eyebrow: 'Reusable Capability',
  },
  {
    title: '可信执行与可审计',
    description:
      '通过验证、回放、审计、人工确认与结果工件，让智能执行进入企业级生产环境。',
    eyebrow: 'Trustworthy Execution',
  },
];

const pathways = [
  {
    title: '系统学习',
    description: '从基础认知到 Runtime、Skill 与产品化，按指南逐步深入。',
    href: '/ai-agent-engineering-guide',
    label: '阅读 AI Agent 指南',
  },
  {
    title: '跟进观点',
    description: '查看 Semovix 团队围绕 Agent、Skill 与语义治理的持续输出。',
    href: '/blog',
    label: '进入技术博客',
  },
  {
    title: '理解产品',
    description: '认识 Semovix 与 Xino 的产品定位、场景价值和能力边界。',
    href: '/semovix',
    label: '查看 Semovix',
  },
];

const loopSteps = [
  'Data',
  'Semantic',
  'Knowledge',
  'Task',
  'Execution',
  'Artifact',
  'Learning',
];

const editorialTracks = [
  'Agent 基础认知',
  'LLM / Prompt / Context',
  'Tool / Skill / MCP',
  'Agent Runtime 工程化',
  'Semovix 语义治理',
  'AI Workbench 产品化',
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Semovix｜企业级 AI Agent 工程化与语义治理"
      description="Semovix 内容中心：AI Agent 工程化指南、技术博客、语义治理与智能执行方法论。"
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.badge}>Semovix Content Hub</div>
                <Heading as="h1" className={styles.heroTitle}>
                  连接数据、知识与行动，
                  <span>构建企业级智能执行能力。</span>
                </Heading>
                <p className={styles.heroLead}>
                  Semovix 聚焦 AI Agent 工程化、语义治理、Skill 能力沉淀与 AI Workbench 产品化，
                  面向工程师、产品团队与企业数字化负责人，提供可落地、可复用、可持续演进的知识体系。
                </p>
                <div className={styles.heroActions}>
                  <Link className="button button--primary button--lg" to="/ai-agent-engineering-guide">
                    开始阅读指南
                  </Link>
                  <Link className="button button--secondary button--lg" to="/blog">
                    浏览技术博客
                  </Link>
                </div>
                <div className={styles.heroMeta}>
                  <div>
                    <strong>Knowledge</strong>
                    <span>系统化知识体系</span>
                  </div>
                  <div>
                    <strong>Practice</strong>
                    <span>工程化落地经验</span>
                  </div>
                  <div>
                    <strong>Product</strong>
                    <span>Semovix 场景方法论</span>
                  </div>
                </div>
              </div>

              <div className={styles.heroPanel} aria-label="Semovix capability loop">
                <div className={styles.panelHeader}>
                  <span>Semovix Execution Loop</span>
                  <em>From semantics to action</em>
                </div>
                <div className={styles.loopStack}>
                  {loopSteps.map((step, index) => (
                    <div key={step} className={styles.loopItem}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <strong>{step}</strong>
                    </div>
                  ))}
                </div>
                <div className={styles.panelFooter}>
                  可执行 · 可审计 · 可恢复 · 可协作
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHead}>
              <span>核心能力</span>
              <Heading as="h2">围绕企业级 Agent 的四条主线</Heading>
              <p>
                不停留在趋势叙事，而是围绕能力边界、系统架构、产品闭环和工程方法展开。
              </p>
            </div>
            <div className={styles.capabilityGrid}>
              {capabilityCards.map((card) => (
                <article className={styles.capabilityCard} key={card.title}>
                  <span>{card.eyebrow}</span>
                  <Heading as="h3">{card.title}</Heading>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.softSection)}>
          <div className="container">
            <div className={styles.pathGrid}>
              <div className={styles.sectionHeadCompact}>
                <span>内容入口</span>
                <Heading as="h2">按目标进入，而不是在站点里迷路</Heading>
                <p>
                  首页承接品牌与入口分发；指南负责系统学习；博客承接观点传播与案例更新。
                </p>
              </div>
              <div className={styles.pathCards}>
                {pathways.map((path) => (
                  <article className={styles.pathCard} key={path.title}>
                    <Heading as="h3">{path.title}</Heading>
                    <p>{path.description}</p>
                    <Link to={path.href}>{path.label} →</Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.editorialGrid}>
              <div className={styles.editorialPanel}>
                <span>编辑主线</span>
                <Heading as="h2">一套可持续生长的内容体系</Heading>
                <p>
                  Semovix 的内容不是零散博客，而是围绕 Agent 能力栈与产品实践形成的长期知识资产。
                </p>
                <div className={styles.trackList}>
                  {editorialTracks.map((track) => (
                    <div key={track}>{track}</div>
                  ))}
                </div>
              </div>
              <div className={styles.statementCard}>
                <span>核心判断</span>
                <blockquote>
                  真正的 AI Agent 开发，不是让模型更会聊天，
                  而是构建一个可执行、可审计、可恢复、可协作的智能任务系统。
                </blockquote>
                <Link to="/ai-agent-engineering-guide">查看完整知识体系 →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaCard}>
              <div>
                <span>Start Here</span>
                <Heading as="h2">从 AI Agent 工程化指南开始</Heading>
                <p>
                  先建立体系，再沉淀能力；先把问题拆清，再让系统可靠执行。
                </p>
              </div>
              <div className={styles.ctaActions}>
                <Link className="button button--primary button--lg" to="/ai-agent-engineering-guide">
                  进入指南
                </Link>
                <Link className="button button--secondary button--lg" to="/blog">
                  查看博客
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
