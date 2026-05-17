import React, {useEffect} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type StageCard = {
  icon: string;
  title: string;
  description: string;
  href: string;
  tags: string[];
  resources: string[];
  duration: string;
  difficulty: number;
};

type Stage = {
  id: string;
  num: string;
  colorClass: string;
  title: string;
  subtitle: string;
  tag: string;
  cards: StageCard[];
};

const STAGES: Stage[] = [
  {
    id: 's1',
    num: '01',
    colorClass: 'c1',
    title: '基础认知与概念体系',
    subtitle: '理解 Agent 的本质，建立核心概念框架',
    tag: 'Foundation',
    cards: [
      {
        icon: '📖',
        title: '前言与阅读路径',
        description:
          '了解本指南的定位、目标读者、阅读方式，以及如何高效利用这套工程化知识体系。',
        href: '/ai-agent-engineering-guide/category/00-前言与阅读路径',
        tags: ['阅读指南', '知识体系', '学习路径'],
        resources: ['指南定位与目标读者说明', '核心概念速查表', '推荐阅读顺序'],
        duration: '约 30 分钟',
        difficulty: 1,
      },
      {
        icon: '🤖',
        title: 'AI Agent 基础认知',
        description:
          '理解 Agent 与普通 LLM 的本质区别——感知、思考、行动的循环；从 ReAct 框架出发，掌握 Agent 的核心思路。',
        href: '/ai-agent-engineering-guide/category/01-agent-基础认知',
        tags: ['Agent Loop', 'ReAct', '能力栈'],
        resources: ['Agent 与 ChatBot/Copilot 的区别', '感知→推理→行动循环', 'Agent 完整能力栈'],
        duration: '约 2 小时',
        difficulty: 1,
      },
      {
        icon: '🧠',
        title: 'LLM、Prompt 与 Context',
        description:
          '掌握 Agent 的底层推理引擎——大语言模型的行为指令、上下文组织和 Prompt 工程基础。',
        href: '/ai-agent-engineering-guide/category/02-llmprompt-与-context',
        tags: ['LLM', 'Prompt', 'Context Engineering'],
        resources: ['LLM 推理机制与行为模式', 'Context Engineering 核心原则', 'Prompt 设计最佳实践'],
        duration: '约 2 小时',
        difficulty: 2,
      },
    ],
  },
  {
    id: 's2',
    num: '02',
    colorClass: 'c2',
    title: '核心能力模块开发',
    subtitle: '动手实现 Agent 的工具调用、Skill 沉淀与运行时工程',
    tag: 'Core Skills',
    cards: [
      {
        icon: '🔧',
        title: 'Tool、Skill 与 MCP',
        description:
          '掌握让 Agent 从回答走向行动的核心机制：工具调用、能力封装、Skill 沉淀与 MCP 协议协同。',
        href: '/ai-agent-engineering-guide/category/03-toolskill-与-mcp',
        tags: ['Tool Calling', 'Skill', 'MCP'],
        resources: ['Function Calling 机制详解', 'Skill 概念与能力沉淀', 'MCP 协议与集成'],
        duration: '约 3 小时',
        difficulty: 3,
      },
      {
        icon: '⚙️',
        title: 'Agent Runtime 工程化',
        description:
          '设计生产级 Agent 的受控闭环——Harness、任务引擎、状态恢复、可观测性与容错机制。',
        href: '/ai-agent-engineering-guide/category/04-agent-runtime-工程化',
        tags: ['Harness', 'Runtime', '状态机'],
        resources: ['Agent Harness 架构设计', '任务执行与状态恢复', '可观测性与审计日志'],
        duration: '约 3 小时',
        difficulty: 3,
      },
    ],
  },
  {
    id: 's3',
    num: '03',
    colorClass: 'c3',
    title: '场景落地与产品化',
    subtitle: '将通用 Agent 技术落到企业场景和产品体验',
    tag: 'Production',
    cards: [
      {
        icon: '📊',
        title: 'Semovix 语义治理场景',
        description:
          '将 Agent 能力落到 Semovix 的企业语义治理、找数问数和行动闭环，理解"从语义到行动"的产品主线。',
        href: '/ai-agent-engineering-guide/category/05-semovix-语义治理场景',
        tags: ['语义治理', '找数问数', '行动闭环'],
        resources: ['业务语义层与指标口径', '找数问数的 Agent 实现', '从数据理解到行动执行'],
        duration: '约 2 小时',
        difficulty: 3,
      },
      {
        icon: '🖥️',
        title: 'AI Workbench 产品化',
        description:
          '理解企业级 Agent 的产品形态——任务草稿、执行过程、结果块、人工确认与可回放体验。',
        href: '/ai-agent-engineering-guide/category/06-ai-workbench-产品化',
        tags: ['Workbench', 'Human-in-the-loop', '产品闭环'],
        resources: ['任务页与 Block 设计', '人机协同与审批节点', '可回放与审计体验'],
        duration: '约 2 小时',
        difficulty: 3,
      },
    ],
  },
  {
    id: 's4',
    num: '04',
    colorClass: 'c4',
    title: '进阶成长与持续沉淀',
    subtitle: '从学习者成长为能独立构建 Agent 系统的工程师',
    tag: 'Growth',
    cards: [
      {
        icon: '🚀',
        title: 'AI Agent 工程师成长路线',
        description:
          '定义从初级到架构师的能力要求、学习重点和成长路径，为个人和团队发展提供参考。',
        href: '/ai-agent-engineering-guide/category/07-工程师成长路线',
        tags: ['成长路径', '能力模型', 'L0-L4'],
        resources: ['工程师能力分级模型', '各阶段学习重点', '团队协作与分工'],
        duration: '约 1 小时',
        difficulty: 2,
      },
      {
        icon: '📋',
        title: '案例库',
        description:
          '沉淀 Semovix 在找数问数、语义治理、Skill 管理和任务执行中的典型案例与实战经验。',
        href: '/ai-agent-engineering-guide/category/08-案例库',
        tags: ['案例', '实战', '最佳实践'],
        resources: ['找数问数典型案例', 'Skill 管理实战', '任务执行与故障处理'],
        duration: '约 2 小时',
        difficulty: 2,
      },
      {
        icon: '🗺️',
        title: '图解与信息图',
        description:
          '统一管理知识地图、架构图、流程图和信息图，帮助快速建立全局认知。',
        href: '/ai-agent-engineering-guide/category/09-图解与信息图',
        tags: ['架构图', '流程图', '知识地图'],
        resources: ['Agent 架构全景图', '能力栈图解', '产品流程图集'],
        duration: '约 1 小时',
        difficulty: 1,
      },
      {
        icon: '📝',
        title: '模板库',
        description:
          '提供文章、图解、Skill、Tool 和案例的标准模板，规范内容生产与协作。',
        href: '/ai-agent-engineering-guide/category/10-模板库',
        tags: ['模板', '规范', '协作'],
        resources: ['文章写作模板', 'Skill 定义模板', '案例报告模板'],
        duration: '约 30 分钟',
        difficulty: 1,
      },
    ],
  },
];

const ROADMAP_ITEMS = [
  { icon: '📖', label: '前言', sub: '阅读指南' },
  { icon: '🤖', label: 'Agent 认知', sub: '第 1–2 章' },
  { icon: '🔧', label: '核心能力', sub: '第 3–4 章' },
  { icon: '📊', label: '场景落地', sub: '第 5–6 章' },
  { icon: '🚀', label: '进阶成长', sub: '第 7–10 章' },
];

export default function DocsLanding(): React.JSX.Element {
  useEffect(() => {
    document.body.classList.add('docs-landing-fullwidth');
    return () => document.body.classList.remove('docs-landing-fullwidth');
  }, []);

  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.heroBadge}>AI Agent Engineering Guide</div>
          <h1>Semovix AI Agent<br />工程化指南</h1>
          <p className={styles.heroLead}>
            从模型调用到企业级智能执行平台——系统掌握 Agent 基础认知、工具调用、Skill 沉淀、
            Harness 运行时与 AI Workbench 产品化。
          </p>
          <div className={styles.stats}>
            <div className={styles.statPill}>
              共 <strong>11</strong> 个章节
            </div>
            <div className={styles.statPill}>
              <strong>4</strong> 个学习阶段
            </div>
            <div className={styles.statPill}>
              理论 + 实战 结合
            </div>
            <div className={styles.statPill}>
              持续更新迭代
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Roadmap */}
        <div className={styles.roadmap}>
          {ROADMAP_ITEMS.map((item) => (
            <div key={item.label} className={styles.roadmapStage}>
              <span className={styles.roadmapIcon}>{item.icon}</span>
              <div className={styles.roadmapLabel}>{item.label}</div>
              <div className={styles.roadmapWeeks}>{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Stages */}
        {STAGES.map((stage) => (
          <div key={stage.id}>
            <div className={styles.stageHeader}>
              <div className={`${styles.stageNum} ${styles[stage.id]}`}>
                {stage.num}
              </div>
              <div className={styles.stageInfo}>
                <h2>{stage.title}</h2>
                <p>{stage.subtitle}</p>
              </div>
              <div className={`${styles.stageTag} ${styles[stage.id]}`}>
                {stage.tag}
              </div>
            </div>

            <div className={styles.cards}>
              {stage.cards.map((card, i) => (
                <Link
                  key={card.title}
                  to={card.href}
                  className={`${styles.card} ${styles[stage.colorClass]}`}
                  style={{ animationDelay: `${i * 0.05}s` }}>
                  <span className={styles.cardIcon}>{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className={styles.cardTags}>
                    {card.tags.map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className={styles.cardResources}>
                    <div className={styles.resLabel}>章节内容</div>
                    {card.resources.map((r) => (
                      <div key={r} className={styles.resItem}>
                        {r}
                      </div>
                    ))}
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.duration}>{card.duration}</span>
                    <div className={styles.difficulty}>
                      {Array.from({ length: 4 }).map((_, d) => (
                        <div
                          key={d}
                          className={`${styles.dot} ${
                            d < card.difficulty ? styles.filled : ''
                          } ${styles[stage.colorClass]}`}
                        />
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Capstone */}
        <div className={styles.capstone}>
          <h2>开始学习之旅</h2>
          <p>
            选择一个入口开始阅读，或者按推荐路径从基础认知逐步深入到产品落地。
          </p>
          <div className={styles.capstoneProjects}>
            <Link className={styles.projectChip} to="/ai-agent-engineering-guide/category/01-agent-基础认知">
              🤖 从 Agent 基础认知开始
            </Link>
            <Link className={styles.projectChip} to="/ai-agent-engineering-guide/category/03-toolskill-与-mcp">
              🔧 从 Skill 系统开始
            </Link>
            <Link className={styles.projectChip} to="/blog">
              📝 先看技术博客
            </Link>
            <Link className={styles.projectChip} to="/blog/tags">
              🏷️ 按专题浏览
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
