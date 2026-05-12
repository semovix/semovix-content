import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './brand-page.module.css';

const cards = [
  ['数据语义治理', '统一字段、指标、口径、血缘和业务规则，让企业数据真正可理解。'],
  ['智能任务执行', '把用户问题转成计划、工具调用、阶段结果和可审计任务。'],
  ['AI Workbench', '让用户看到 Agent 的计划、过程、依据、结果、审批和回放。'],
];

const steps = [
  ['01', '理解业务问题', '从用户自然语言输入中识别意图、任务类型、业务对象和约束。'],
  ['02', '加载语义上下文', '关联指标、字段、数据血缘、业务规则、历史任务和企业知识。'],
  ['03', '选择 Skill / Tool', '根据任务目标选择找数问数、语义治理、报告生成等能力。'],
  ['04', '推进任务执行', '生成计划、调用工具、展示阶段结果，并在关键节点请求用户确认。'],
  ['05', '沉淀知识资产', '把执行过程、确认结论和产物回写到知识网络和审计链路中。'],
];

export default function SemovixPage(): React.JSX.Element {
  return (
    <Layout
      title="Semovix｜企业语义治理与智能执行平台"
      description="Semovix 让企业的数据、知识与行动真正连接起来。"
    >
      <main className={styles.page}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <p className={styles.kicker}>Semovix｜赛慕维</p>
            <h1>让数据、知识与行动真正连接起来</h1>
            <p className={styles.subtitle}>
              Semovix 是面向企业或组织的数据语义治理与智能执行平台，帮助企业把数据资产、业务语义、知识网络、任务流程和 AI Agent 执行能力连接起来。
            </p>
            <p>
              <Link className="button button--primary button--lg" to="/ai-agent-engineering-guide/05-semovix-semantic-governance">
                了解语义治理场景
              </Link>
            </p>
          </section>

          <section className={styles.grid3}>
            {cards.map(([title, desc]) => (
              <div className={styles.card} key={title}>
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
            ))}
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Semovix 的执行闭环</h2>
            </div>
            <div className={styles.steps}>
              {steps.map(([num, title, desc]) => (
                <div className={styles.step} key={num}>
                  <span>{num}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.cta}>
            <h2>不是只回答问题，而是推动企业行动</h2>
            <p>
              Semovix 的核心价值，是把企业数据背后的业务语义转化为 Agent 可以理解、执行、审计和沉淀的任务系统。
            </p>
            <Link className="button button--primary button--lg" to="/ai-agent-guide">
              查看 AI Agent 工程化路线
            </Link>
          </section>
        </div>
      </main>
    </Layout>
  );
}
