import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const capabilities = [
  {
    title: 'Context Engineering',
    desc: '组织企业语义、任务状态、RAG 与 Memory，让 Agent 在正确上下文中行动。',
  },
  {
    title: 'Tool & Skill',
    desc: '将工具调用、业务模板、执行步骤和评测用例封装成可复用能力。',
  },
  {
    title: 'Agent Harness',
    desc: '管理任务调度、状态恢复、沙箱、权限、追踪和人工审批。',
  },
  {
    title: 'Semantic Layer',
    desc: '把数据表、字段、指标、口径、血缘和业务规则转化为可理解语义资产。',
  },
  {
    title: 'AI Workbench',
    desc: '让用户看到计划、过程、依据、结果和可回放记录，而不只是聊天答案。',
  },
  {
    title: 'Evaluation & Governance',
    desc: '通过评测、安全、审计和治理机制，让 Agent 可用、可信、可控。',
  },
];

const flow = [
  ['Observe', '感知输入'],
  ['Understand', '理解意图'],
  ['Plan', '规划任务'],
  ['Act', '调用工具'],
  ['Evaluate', '评估结果'],
  ['Recover / Stop', '恢复或交付'],
];

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Semovix AI Agent 工程化指南"
      description="从模型调用到企业级智能执行平台"
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroBadge}>Semovix AI Agent Engineering Guide</div>
          <h1>
            让 AI 不只是回答问题，<span className={styles.gradientText}>而是推进任务</span>
          </h1>
          <p className={styles.subtitle}>
            从模型调用到企业级智能执行平台，系统学习 LLM、Context、Tool、Skill、Harness、MCP、语义治理与 AI Workbench。
          </p>

          <div className={styles.actions}>
            <Link className="button button--primary button--lg" to="/ai-agent-engineering-guide">
              开始阅读指南
            </Link>
            <Link className="button button--secondary button--lg" to="/blog">
              查看技术博客
            </Link>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}><strong>10</strong><span>Agent 能力层</span></div>
            <div className={styles.heroStat}><strong>30+</strong><span>系列文章规划</span></div>
            <div className={styles.heroStat}><strong>6</strong><span>工程化篇章</span></div>
            <div className={styles.heroStat}><strong>1</strong><span>企业级执行闭环</span></div>
          </div>
        </section>

        <section className={styles.entryGrid}>
          <Link className={styles.entryCard} to="/ai-agent-engineering-guide">
            <span>01</span>
            <h2>AI Agent 工程化指南</h2>
            <p>从基础认知、Prompt、Context 到 Skill、Harness 和 Workbench 的系统学习路径。</p>
          </Link>

          <Link className={styles.entryCard} to="/semovix">
            <span>02</span>
            <h2>Semovix 语义治理</h2>
            <p>把企业数据、业务语义、知识网络和治理任务连接起来。</p>
          </Link>

          <Link className={styles.entryCard} to="/xino">
            <span>03</span>
            <h2>Xino 企业级 AI 工作伙伴</h2>
            <p>理解业务、调用工具、推进任务、展示依据并接受治理。</p>
          </Link>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p>Capability Stack</p>
            <h2>Semovix AI Agent 能力栈</h2>
          </div>

          <div className={styles.capabilityGrid}>
            {capabilities.map((item) => (
              <div className={styles.capabilityCard} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.flow}>
            <div className={styles.flowTrack}>
              {flow.map(([title, desc]) => (
                <div className={styles.flowItem} key={title}>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>从问答到行动，从数据到知识，从知识到执行</h2>
          <p>
            Semovix 面向企业级 AI Agent 场景，帮助组织构建可执行、可审计、可恢复、可协作的智能任务系统。
          </p>
          <Link className="button button--primary button--lg" to="/ai-agent-guide">
            查看完整学习路线
          </Link>
        </section>
      </main>
    </Layout>
  );
}
