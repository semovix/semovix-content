import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './brand-page.module.css';

const stages = [
  ['阶段 1', '基础入门', 'LLM、Prompt、Structured Output、Function Calling、基础 RAG。'],
  ['阶段 2', '进阶开发', 'Agent Loop、Planning、Memory、多工具任务、错误处理。'],
  ['阶段 3', '工程化架构', 'Workflow、Harness、State、Sandbox、Observability、MCP。'],
  ['阶段 4', '产品化落地', 'AI Workbench、Evaluation、Governance、Semantic Layer、ROI。'],
];

const articles = [
  ['AI Agent 到底是什么？', '/ai-agent-engineering-guide/01-agent-foundation/01-what-is-ai-agent'],
  ['AI Agent 完整能力栈', '/ai-agent-engineering-guide/01-agent-foundation/03-agent-capability-stack'],
  ['Context Engineering', '/ai-agent-engineering-guide/02-llm-prompt-context/04-context-engineering'],
  ['Skill 是什么？', '/ai-agent-engineering-guide/03-tool-skill-protocol/03-skill-concept'],
  ['Agent Harness', '/ai-agent-engineering-guide/04-agent-runtime-engineering/04-agent-harness'],
  ['AI Workbench', '/ai-agent-engineering-guide/06-ai-workbench-productization/01-ai-workbench'],
];

export default function AIAgentGuidePage(): React.JSX.Element {
  return (
    <Layout
      title="AI Agent 工程化学习路线"
      description="从模型调用到企业级智能执行平台的系统学习路线。"
    >
      <main className={styles.page}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <p className={styles.kicker}>Learning Path</p>
            <h1>AI Agent 工程师由浅入深学习路线</h1>
            <p className={styles.subtitle}>
              从 LLM、Prompt 和 Tool Calling 开始，逐步进入 Skill、Harness、MCP、语义治理和 AI Workbench，形成企业级 Agent 工程化能力。
            </p>
          </section>

          <section className={styles.grid2}>
            {stages.map(([num, title, desc]) => (
              <div className={styles.card} key={num}>
                <p className={styles.kicker}>{num}</p>
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
            ))}
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>推荐阅读</h2>
            </div>
            <div className={styles.grid2}>
              {articles.map(([title, link]) => (
                <Link className={styles.card} to={link} key={link}>
                  <h3>{title}</h3>
                  <p>进入章节阅读 →</p>
                </Link>
              ))}
            </div>
          </section>

          <section className={styles.cta}>
            <h2>把知识体系变成工程能力</h2>
            <p>
              这套指南不仅是学习路线，也是 Semovix 构建企业级 AI Agent、语义治理和智能执行平台的技术底座。
            </p>
            <Link className="button button--primary button--lg" to="/ai-agent-engineering-guide">
              进入完整指南
            </Link>
          </section>
        </div>
      </main>
    </Layout>
  );
}
