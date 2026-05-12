import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './brand-page.module.css';

const capabilities = [
  ['理解业务', '识别用户目标、业务对象、指标口径和场景约束。'],
  ['调用工具', '按权限调用数据、语义、治理、文档和任务相关工具。'],
  ['推进任务', '把问题拆成步骤、阶段结果和可确认的执行计划。'],
  ['展示依据', '展示上下文、引用来源、工具结果和关键判断依据。'],
  ['接受治理', '支持审批、驳回、人工接管、审计回放和权限控制。'],
  ['沉淀经验', '把确认过的规则、结论和流程沉淀为知识与 Skill。'],
];

export default function XinoPage(): React.JSX.Element {
  return (
    <Layout
      title="Xino｜企业级 AI 工作伙伴"
      description="Xino 是 Semovix 中的企业级 AI 工作伙伴，帮助用户理解业务、调用工具、推进任务。"
    >
      <main className={styles.page}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <p className={styles.kicker}>Xino｜企业级 AI 工作伙伴</p>
            <h1>不是普通聊天助手，而是能推进任务的 AI 同事</h1>
            <p className={styles.subtitle}>
              Xino 能理解业务问题、加载语义上下文、选择 Skill 与 Tool、生成执行计划、展示过程依据，并在关键节点接受人工确认和治理。
            </p>
            <p>
              <Link className="button button--primary button--lg" to="/ai-agent-engineering-guide/06-ai-workbench-productization/06-xino-enterprise-ai-coworker">
                阅读 Xino 能力说明
              </Link>
            </p>
          </section>

          <section className={styles.grid3}>
            {capabilities.map(([title, desc]) => (
              <div className={styles.card} key={title}>
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
            ))}
          </section>

          <section className={styles.cta}>
            <h2>Xino 的目标：让企业 AI 从对话走向执行</h2>
            <p>
              在 Semovix 中，Xino 是连接用户、语义资产、工具、任务、产物和知识网络的智能执行伙伴。
            </p>
            <Link className="button button--primary button--lg" to="/semovix">
              了解 Semovix
            </Link>
          </section>
        </div>
      </main>
    </Layout>
  );
}
