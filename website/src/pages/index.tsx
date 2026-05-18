import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Scroll reveal intersection observer
    const els = document.querySelectorAll('.r');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    els.forEach((el) => io.observe(el));

    return () => {
      els.forEach((el) => io.unobserve(el));
    };
  }, []);

  return (
    <Layout
      title="Semovix｜企业级 AI Agent 工程化与语义治理平台"
      description="不是让 AI 回答你，而是让 AI 真正参与工作。理解目标、判断路径、组织知识、发起任务、验证结果、交付成果。"
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.page}>
        {/* ═══════════════════════════════════════
           HERO SECTION
           ═══════════════════════════════════════ */}
        <section id="hero" className={styles.hero}>
          <div className={styles.heroGridBG} />
          
          <div className={clsx(styles.orb, styles.orb1)} />
          <div className={clsx(styles.orb, styles.orb2)} />
          <div className={clsx(styles.orb, styles.orb3)} />

          {/* Loop Diagram Decoration */}
          <div className={clsx(styles.loopDiagram, 'r', 'd4')}>
            <div className={clsx(styles.loopRing, styles.loopRing1)} />
            <div className={clsx(styles.loopRing, styles.loopRing2)} />
            <div className={clsx(styles.loopRing, styles.loopRing3)} />
            
            <div className={styles.loopCenter}>
              <img className={styles.loopXinoImg} src="/img/xino/xino-avatar.png" alt="Xino" />
            </div>

            <div className={clsx(styles.loopStep, styles.ls1)}>Semantic<span>语义理解</span></div>
            <div className={clsx(styles.loopStep, styles.ls2)}>Execute<span>智能执行</span></div>
            <div className={clsx(styles.loopStep, styles.ls3)}>Artifact<span>结果交付</span></div>
            <div className={clsx(styles.loopStep, styles.ls4)}>Audit<span>审计追踪</span></div>
          </div>

          <div className="container">
            <div className={styles.heroContent}>
              <div className={clsx(styles.heroKicker, 'r')}>Enterprise AI Agent Platform</div>
              
              <Heading as="h1" className={clsx(styles.heroH1, 'r', 'd1')}>
                <em>Semovix</em><br />
                赛慕维
              </Heading>

              <p className={clsx(styles.heroH1Cn, 'r', 'd1')}>数据语义治理与智能执行平台</p>
              
              <p className={clsx(styles.heroTagline, 'r', 'd2')}>
                不是让 AI <strong>回答你</strong>，而是让 AI <strong>真正参与工作</strong>。<br />
                理解目标 · 判断路径 · 组织知识 · 发起任务 · 验证结果 · 交付成果
              </p>

              <div className={clsx(styles.heroActions, 'r', 'd3')}>
                <button className={styles.btnSolid}>预约演示</button>
                <Link className={styles.btnOutline} to="/ai-agent-engineering-guide">
                  阅读技术指南 →
                </Link>
              </div>

              <div className={clsx(styles.heroStats, 'r', 'd4')}>
                <div className={styles.statItem}>
                  <div className={styles.statN}>99.4%</div>
                  <div className={styles.statL}>语义准确率</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statN}>2.4M</div>
                  <div className={styles.statL}>调用规模</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statN}>7</div>
                  <div className={styles.statL}>架构层次</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statN}>11</div>
                  <div className={styles.statL}>工程化章节</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
           TICKER MARQUEE
           ═══════════════════════════════════════ */}
        <div className={styles.tickerBar}>
          <div className={styles.tickerTrack}>
            <div className={styles.tickerItem}>AI Agent 工程化</div>
            <div className={styles.tickerItem}>语义治理 <span className={styles.tickerN}>Semantic Governance</span></div>
            <div className={styles.tickerItem}>Skill · Tool · MCP</div>
            <div className={styles.tickerItem}>Agent Harness <span className={styles.tickerN}>Task Engine</span></div>
            <div className={styles.tickerItem}>BKN · DKN · PKN</div>
            <div className={styles.tickerItem}>可信执行 <span className={styles.tickerN}>Trustworthy Execution</span></div>
            <div className={styles.tickerItem}>AI Workbench</div>
            <div className={styles.tickerItem}>找数问数 <span className={styles.tickerN}>Data Intelligence</span></div>
            <div className={styles.tickerItem}>OpenClaw Runtime</div>
            <div className={styles.tickerItem}>可解释语义理解</div>
            {/* Duplicated for infinite scrolling */}
            <div className={styles.tickerItem}>AI Agent 工程化</div>
            <div className={styles.tickerItem}>语义治理 <span className={styles.tickerN}>Semantic Governance</span></div>
            <div className={styles.tickerItem}>Skill · Tool · MCP</div>
            <div className={styles.tickerItem}>Agent Harness <span className={styles.tickerN}>Task Engine</span></div>
            <div className={styles.tickerItem}>BKN · DKN · PKN</div>
            <div className={styles.tickerItem}>可信执行 <span className={styles.tickerN}>Trustworthy Execution</span></div>
            <div className={styles.tickerItem}>AI Workbench</div>
            <div className={styles.tickerItem}>找数问数 <span className={styles.tickerN}>Data Intelligence</span></div>
            <div className={styles.tickerItem}>OpenClaw Runtime</div>
            <div className={styles.tickerItem}>可解释语义理解</div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
           PROBLEMS SECTION
           ═══════════════════════════════════════ */}
        <section id="problems" className={clsx(styles.section, styles.problemsSection)}>
          <div className="container">
            <div className={styles.problemsLayout}>
              <div className={styles.problemsSticky}>
                <div className={clsx(styles.sectionEyebrow, 'r')}>Core Problem</div>
                <Heading as="h2" className={clsx(styles.sectionH2, 'r', 'd1')}>组织真正<br />面临的困境</Heading>
                <p className={clsx(styles.sectionLead, 'r', 'd2')}>今天很多组织并不缺系统，也不缺数据，缺的是让这一切真正协同运转的能力。</p>
                <blockquote className={clsx(styles.problemsQuote, 'r', 'd3')}>
                  Semovix 帮组织把"数据理顺、知识连起来、问题找出来、事情做下去"。
                </blockquote>
              </div>

              <div className={styles.problemList}>
                <div className={clsx(styles.problemRow, 'r')}>
                  <div className={styles.probNum}>01</div>
                  <div>
                    <div className={styles.probTitle}>数据很多，但业务没有真正看懂</div>
                    <div className={styles.probBody}>表很多，字段很多，但没人能快速说清它们是什么。同一个业务概念在不同系统里叫法不同，指标口径不一致，越分析越容易争议，数据能存下来但很难形成组织级理解。</div>
                  </div>
                </div>
                
                <div className={clsx(styles.problemRow, 'r', 'd1')}>
                  <div className={styles.probNum}>02</div>
                  <div>
                    <div className={styles.probTitle}>知识很多，但没有被组织成可运行的网络</div>
                    <div className={styles.probBody}>业务规则散落在文档、经验和系统里。领域知识没有和对象、指标、流程真正连接，场景能讲，但不能稳定运行、复用、交付。</div>
                  </div>
                </div>

                <div className={clsx(styles.problemRow, 'r', 'd2')}>
                  <div className={styles.probNum}>03</div>
                  <div>
                    <div className={styles.probTitle}>问题能发现，但不能顺畅推进</div>
                    <div className={styles.probBody}>字段语义冲突、对象重复、映射不足、发布阻塞等问题散落各处。平台会"提示"，却没有真正把问题转成可推进的治理任务，用户需要自己找、自己记、自己判断下一步。</div>
                  </div>
                </div>

                <div className={clsx(styles.problemRow, 'r', 'd3')}>
                  <div className={styles.probNum}>04</div>
                  <div>
                    <div className={styles.probTitle}>AI 会回答，但不能把事情做完</div>
                    <div className={styles.probBody}>普通 AI 能解释概念、生成文案，但组织真正需要的是：能判断任务意图、能调用 Skill / Tool、能在关键节点请求确认、能展示证据与审计结果、能失败重试并支持过程回放。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
           LOOP SECTION
           ═══════════════════════════════════════ */}
        <section id="loop" className={clsx(styles.section, styles.loopSection)}>
          <div className="container">
            <div className={styles.loopHeader}>
              <div>
                <div className={clsx(styles.sectionEyebrow, 'r')}>Execution Loop</div>
                <Heading as="h2" className={clsx(styles.sectionH2, 'r', 'd1')}>从语义到行动<br />的完整闭环</Heading>
              </div>
              <p className={clsx(styles.sectionLead, 'r', 'd2')}>Semovix 的智能执行不是"生成完就结束"，而是整个链路都有可解释性和可追踪性。</p>
            </div>

            <div className={clsx(styles.stepsFlow, 'r', 'd1')}>
              <div className={styles.stepNode}>
                <div className={styles.stepDot}>01</div>
                <div className={styles.stepLabel}>Data<br />数据</div>
              </div>
              <div className={styles.stepNode}>
                <div className={styles.stepDot}>02</div>
                <div className={styles.stepLabel}>Semantic<span>语义</span></div>
              </div>
              <div className={styles.stepNode}>
                <div className={styles.stepDot}>03</div>
                <div className={styles.stepLabel}>Knowledge<span>知识</span></div>
              </div>
              <div className={styles.stepNode}>
                <div className={styles.stepDot}>04</div>
                <div className={styles.stepLabel}>Task<span>任务</span></div>
              </div>
              <div className={styles.stepNode}>
                <div className={styles.stepDot}>05</div>
                <div className={styles.stepLabel}>Execution<span>执行</span></div>
              </div>
              <div className={styles.stepNode}>
                <div className={styles.stepDot}>06</div>
                <div className={styles.stepLabel}>Artifact<span>交付</span></div>
              </div>
              <div className={styles.stepNode}>
                <div className={styles.stepDot}>07</div>
                <div className={styles.stepLabel}>Learning<span>沉淀</span></div>
              </div>
            </div>

            <div className={clsx(styles.loopAttrs, 'r', 'd2')}>
              <div className={styles.loopAttr}>
                <div className={styles.attrMark}>◎</div>
                <div className={styles.attrLabel}>可执行</div>
                <div className={styles.attrDesc}>任务驱动，每步可操作</div>
              </div>
              <div className={styles.loopAttr}>
                <div className={styles.attrMark}>◉</div>
                <div className={styles.attrLabel}>可审计</div>
                <div className={styles.attrDesc}>证据链路，过程留存</div>
              </div>
              <div className={styles.loopAttr}>
                <div className={styles.attrMark}>↺</div>
                <div className={styles.attrLabel}>可恢复</div>
                <div className={styles.attrDesc}>故障重试，状态可回放</div>
              </div>
              <div className={styles.loopAttr}>
                <div className={styles.attrMark}>⇌</div>
                <div className={styles.attrLabel}>可协作</div>
                <div className={styles.attrDesc}>人工确认，团队共用</div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
           CAPABILITIES SECTION
           ═══════════════════════════════════════ */}
        <section id="capabilities" className={clsx(styles.section, styles.capabilitiesSection)}>
          <div className="container">
            <div className={styles.capsHeader}>
              <div className={clsx(styles.sectionEyebrow, 'r')}>Core Capabilities</div>
              <Heading as="h2" className={clsx(styles.sectionH2, 'r', 'd1')}>四条主线能力<br />覆盖企业级 Agent 全栈</Heading>
            </div>

            <div className={clsx(styles.capsGrid, 'r', 'd1')}>
              <div className={styles.capCell}>
                <div className={styles.capIndex}>Capability 01 · Agent Engineering</div>
                <div className={styles.capIconRow}>
                  <div className={styles.capIconBox}>🔧</div>
                  <span className={styles.capTagEn}>AI Agent 工程化</span>
                </div>
                <Heading as="h3" className={styles.capH3}>从模型调用<br />到任务执行闭环</Heading>
                <p className={styles.capBody}>沉淀 Agent 基础认知、上下文组织、工具编排到任务执行闭环的完整工程方法。不停留在趋势叙事，而是围绕能力边界、系统架构、产品闭环和工程方法展开。</p>
                <div className={styles.capChips}>
                  <span className={styles.capChip}>ReAct</span>
                  <span className={styles.capChip}>Function Calling</span>
                  <span className={styles.capChip}>Context Engineering</span>
                  <span className={styles.capChip}>Agent Loop</span>
                </div>
              </div>

              <div className={styles.capCell}>
                <div className={styles.capIndex}>Capability 02 · Semantic Governance</div>
                <div className={styles.capIconRow}>
                  <div className={styles.capIconBox}>🗂️</div>
                  <span className={styles.capTagEn}>语义治理与找数问数</span>
                </div>
                <Heading as="h3" className={styles.capH3}>可解释的<br />智能业务入口</Heading>
                <p className={styles.capBody}>围绕企业数据语义、指标口径、知识层与执行层，建立可解释的智能业务入口。通过多维证据链计算与判断，让语义理解兼顾自动化效率与治理可信度。</p>
                <div className={styles.capChips}>
                  <span className={styles.capChip}>业务对象</span>
                  <span className={styles.capChip}>指标口径</span>
                  <span className={styles.capChip}>BKN · DKN · PKN</span>
                  <span className={styles.capChip}>证据链</span>
                </div>
              </div>

              <div className={styles.capCell}>
                <div className={styles.capIndex}>Capability 03 · Skill / Tool / Runtime</div>
                <div className={styles.capIconRow}>
                  <div className={styles.capIconBox}>⚡</div>
                  <span className={styles.capTagEn}>能力封装与复用</span>
                </div>
                <Heading as="h3" className={styles.capH3}>从"会回答"<br />走向"能执行"</Heading>
                <p className={styles.capBody}>把经验、流程与工具封装为能力资产，让 Agent 真正具备行动力。通过 Skill Registry 和 Skill Runtime 形成可沉淀、可复用、可持续演进的工程能力体系。</p>
                <div className={styles.capChips}>
                  <span className={styles.capChip}>Skill Registry</span>
                  <span className={styles.capChip}>MCP 协议</span>
                  <span className={styles.capChip}>Tool Calling</span>
                  <span className={styles.capChip}>OpenClaw</span>
                </div>
              </div>

              <div className={styles.capCell}>
                <div className={styles.capIndex}>Capability 04 · Trustworthy Execution</div>
                <div className={styles.capIconRow}>
                  <div className={styles.capIconBox}>🔐</div>
                  <span className={styles.capTagEn}>可信执行与可审计</span>
                </div>
                <Heading as="h3" className={styles.capH3}>企业级生产<br />环境的智能执行</Heading>
                <p className={styles.capBody}>通过验证、回放、审计、人工确认与结果工件，让智能执行进入企业级生产环境。权限控制不只是菜单可见性，而是人·入口·范围·动作·审计的五维闭环管理。</p>
                <div className={styles.capChips}>
                  <span className={styles.capChip}>Harness</span>
                  <span className={styles.capChip}>Task Engine</span>
                  <span className={styles.capChip}>审计回放</span>
                  <span className={styles.capChip}>人工确认</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
           VALUES SECTION
           ═══════════════════════════════════════ */}
        <section id="values" className={clsx(styles.section, styles.valuesSection)}>
          <div className="container">
            <div className={styles.valuesLayout}>
              <div className={styles.valuesLeft}>
                <div className={clsx(styles.sectionEyebrow, 'r')}>Core Values</div>
                <Heading as="h2" className={clsx(styles.sectionH2, 'r', 'd1')}>五个关键词<br />一条完整路径</Heading>
                <p className={clsx(styles.sectionLead, 'r', 'd2')}>Semovix 将产品价值收口成五个清晰的关键词，覆盖从数据到行动的完整链路。</p>
              </div>

              <div className={styles.valuesRight}>
                <div className={clsx(styles.valueRow, 'r')}>
                  <div>
                    <div className={styles.valueKw}>看懂数据</div>
                    <div className={styles.valueEn}>Understand Data</div>
                  </div>
                  <div className={styles.valueDesc}>通过可解释语义理解，让系统真正知道字段、表、对象、口径在业务里意味着什么。降低人工梳理成本，减少误识别和口径污染。</div>
                </div>

                <div className={clsx(styles.valueRow, 'r', 'd1')}>
                  <div>
                    <div className={styles.valueKw}>组织知识</div>
                    <div className={styles.valueEn}>Organize Knowledge</div>
                  </div>
                  <div className={styles.valueDesc}>通过 BKN / DKN / PKN，把分散的数据、对象、指标、规则与场景组织成可复用知识网络。把知识从"静态资料"变成"运行中的业务能力"。</div>
                </div>

                <div className={clsx(styles.valueRow, 'r', 'd2')}>
                  <div>
                    <div className={styles.valueKw}>发现问题</div>
                    <div className={styles.valueEn}>Detect Issues</div>
                  </div>
                  <div className={styles.valueDesc}>通过语义冲突、对象重复、映射不足、发布阻塞等检测，让问题被及时暴露，而不是被埋没在各个系统的角落。</div>
                </div>

                <div className={clsx(styles.valueRow, 'r', 'd3')}>
                  <div>
                    <div className={styles.valueKw}>推进执行</div>
                    <div className={styles.valueEn}>Drive Execution</div>
                  </div>
                  <div className={styles.valueDesc}>通过 AI 工作台和 Task Engine，把问题变成可执行任务，而不是停留在提示层。把治理动作嵌入真实工作流。</div>
                </div>

                <div className={clsx(styles.valueRow, 'r', 'd4')}>
                  <div>
                    <div className={styles.valueKw}>形成闭环</div>
                    <div className={styles.valueEn}>Close the Loop</div>
                  </div>
                  <div className={styles.valueDesc}>通过任务状态、证据、交付物、回放和审计，让整个过程可追踪、可解释、可恢复。智能执行不是"生成完就结束"。</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
           COMPARISON SECTION
           ═══════════════════════════════════════ */}
        <section id="compare" className={clsx(styles.section, styles.compareSection)}>
          <div className="container">
            <div className={clsx(styles.sectionEyebrow, 'r')}>Why Semovix</div>
            <Heading as="h2" className={clsx(styles.sectionH2, 'r', 'd1')}>与普通 AI 工具<br />的根本区别</Heading>

            <div className={clsx(styles.compareWrap, 'r', 'd2')}>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th className={styles.compareTh}>维度</th>
                    <th className={styles.compareTh}>普通 AI 问答工具</th>
                    <th className={clsx(styles.compareTh, styles.semovixCol)}>Semovix｜赛慕维</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.compareTr}>
                    <td className={styles.compareTd}>输入方式</td>
                    <td className={styles.compareTd}>问一句，答一句</td>
                    <td className={clsx(styles.compareTd, styles.semovixCol)}>自然语言触发完整任务</td>
                  </tr>
                  <tr className={styles.compareTr}>
                    <td className={styles.compareTd}>语义理解</td>
                    <td className={styles.compareTd}>基于上下文回答</td>
                    <td className={clsx(styles.compareTd, styles.semovixCol)}>理解业务域、任务类型与执行模式</td>
                  </tr>
                  <tr className={styles.compareTr}>
                    <td className={styles.compareTd}>数据理解</td>
                    <td className={styles.compareTd}>通常不理解组织数据结构</td>
                    <td className={clsx(styles.compareTd, styles.semovixCol)}>通过语义治理理解表、字段、对象、口径</td>
                  </tr>
                  <tr className={styles.compareTr}>
                    <td className={styles.compareTd}>知识体系</td>
                    <td className={styles.compareTd}>文本知识</td>
                    <td className={clsx(styles.compareTd, styles.semovixCol)}>BKN / DKN / PKN 可运行知识网络</td>
                  </tr>
                  <tr className={styles.compareTr}>
                    <td className={styles.compareTd}>执行能力</td>
                    <td className={styles.compareTd}>生成内容为主</td>
                    <td className={clsx(styles.compareTd, styles.semovixCol)}>Task Engine 驱动任务推进</td>
                  </tr>
                  <tr className={styles.compareTr}>
                    <td className={styles.compareTd}>权限控制</td>
                    <td className={styles.compareTd}>弱权限、弱审计</td>
                    <td className={clsx(styles.compareTd, styles.semovixCol)}>角色·助手·范围·动作·门禁·审计</td>
                  </tr>
                  <tr className={styles.compareTr}>
                    <td className={styles.compareTd}>结果交付</td>
                    <td className={styles.compareTd}>一次性输出</td>
                    <td className={clsx(styles.compareTd, styles.semovixCol)}>可验证、可回放、可交付</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
           ARCHITECTURE SECTION
           ═══════════════════════════════════════ */}
        <section id="arch" className={clsx(styles.section, styles.archSection)}>
          <div className="container">
            <div className={clsx(styles.sectionEyebrow, 'r')}>Architecture</div>
            <Heading as="h2" className={clsx(styles.sectionH2, 'r', 'd1')}>七层完整架构<br />主控与执行分离</Heading>

            <div className={styles.archLayout}>
              <div className={clsx(styles.archLayersStack, 'r', 'd2')}>
                <div className={clsx(styles.archLayer, styles.hl)}>
                  <div className={styles.archLayerNum}>L1</div>
                  <div className={styles.archLayerBody}>
                    <div className={styles.archLayerName}>交互层 · Interaction</div>
                    <div className={styles.archLayerItems}>AI 工作台 + Xino · 自然语言输入 · 任务推荐 · 引导交互</div>
                  </div>
                </div>

                <div className={styles.archLayer}>
                  <div className={styles.archLayerNum}>L2</div>
                  <div className={styles.archLayerBody}>
                    <div className={styles.archLayerName}>入口理解层 · Intent</div>
                    <div className={styles.archLayerItems}>Intent Resolver · Suggestion Engine · Employee Router · Task Template Resolver</div>
                  </div>
                </div>

                <div className={clsx(styles.archLayer, styles.hl)}>
                  <div className={styles.archLayerNum}>L3</div>
                  <div className={styles.archLayerBody}>
                    <div className={styles.archLayerName}>任务控制层 · Task Engine</div>
                    <div className={styles.archLayerItems}>Harness · Task / Step / State · Verification · Recovery · 人工确认节点</div>
                  </div>
                </div>

                <div className={styles.archLayer}>
                  <div className={styles.archLayerNum}>L4</div>
                  <div className={styles.archLayerBody}>
                    <div className={styles.archLayerName}>执行编排层 · Orchestration</div>
                    <div className={styles.archLayerItems}>Execution Gateway · OpenClaw Adapter · Internal Capability Adapter</div>
                  </div>
                </div>

                <div className={styles.archLayer}>
                  <div className={styles.archLayerNum}>L5</div>
                  <div className={styles.archLayerBody}>
                    <div className={styles.archLayerName}>Runtime 层 · OpenClaw</div>
                    <div className={styles.archLayerItems}>Skills · Tools · Plugins · Session · Context · Events</div>
                  </div>
                </div>

                <div className={clsx(styles.archLayer, styles.hl)}>
                  <div className={styles.archLayerNum}>L6</div>
                  <div className={styles.archLayerBody}>
                    <div className={styles.archLayerName}>领域能力层 · Domain</div>
                    <div className={styles.archLayerItems}>语义理解引擎 · 业务对象治理 · BKN / DKN / PKN · 找数问数 · 分析 · 发布</div>
                  </div>
                </div>

                <div className={styles.archLayer}>
                  <div className={styles.archLayerNum}>L7</div>
                  <div className={styles.archLayerBody}>
                    <div className={styles.archLayerName}>状态与可信层 · Trust</div>
                    <div className={styles.archLayerItems}>Evidence · Audit · Replay · Checkpoint · Artifact · Permission · Risk Control</div>
                  </div>
                </div>
              </div>

              {/* Arch right: knowledge network visual */}
              <div className={clsx(styles.knVisual, 'r', 'd3')}>
                <div className={styles.knTitle}>// Knowledge Network</div>
                <div className={styles.knNodes}>
                  <div className={styles.knNode}>
                    <div className={styles.knNodeDot} />
                    <div>
                      <div className={styles.knNodeLabel}>BKN · 业务知识网络</div>
                      <div className={styles.knNodeDesc}>组织级通用业务骨架：业务域、对象、关系、规则、指标</div>
                    </div>
                  </div>
                  <div className={styles.knConnector} />
                  <div className={styles.knNode}>
                    <div className={styles.knNodeDot} />
                    <div>
                      <div className={styles.knNodeLabel}>DKN · 领域知识网络</div>
                      <div className={styles.knNodeDesc}>场景化可运行网络：意图、模板、工作流、服务入口、发布包</div>
                    </div>
                  </div>
                  <div className={styles.knConnector} />
                  <div className={styles.knNode}>
                    <div className={styles.knNodeDot} />
                    <div>
                      <div className={styles.knNodeLabel}>PKN · 个人知识网络</div>
                      <div className={styles.knNodeDesc}>个人偏好与局部策略，成熟后回流至 DKN / BKN</div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '32px' }}>
                  <div className={styles.knTitle}>// 核心判断</div>
                  <div style={{ padding: '20px 0', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
                    <p style={{ fontFamily: 'var(--serif)', fontSize: '17px', lineHeight: '1.6', color: 'var(--white)', opacity: 0.85, margin: 0 }}>
                      真正的 AI Agent 开发，不是让模型更会聊天，而是构建一个可执行、可审计、可恢复、可协作的智能任务 system。
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: '24px', fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--rule)' }}>
                    <span>OpenClaw</span><span style={{ color: 'var(--dim)' }}>Step-level Runtime</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--rule)' }}>
                    <span>Semovix</span><span style={{ color: 'var(--accent-hi)' }}>主控层</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
                    <span>Task Engine</span><span style={{ color: 'var(--dim)' }}>任务推进</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
           XINO SECTION
           ═══════════════════════════════════════ */}
        <section id="xino" className={clsx(styles.section, styles.xinoSection)}>
          <div className={styles.bgXinoGlow} />

          <div className="container">
            <div className={styles.xinoLayout}>
              <div>
                <div className={clsx(styles.sectionEyebrow, 'r')}>Xino · 犀诺</div>
                <Heading as="h2" className={clsx(styles.sectionH2, 'r', 'd1')}>不只是会回应<br />更会把事情做完</Heading>
                <p className={clsx(styles.sectionLead, 'r', 'd2')}>Xino 是 Semovix 的 AI 助手、工作台引导角色与官方 IP 形象。它不是单纯的吉祥物，而是代表 Semovix 的核心气质：聪明、可信、亲和、专业、能推进。</p>

                <div className={clsx(styles.xinoVerbs, 'r', 'd2')}>
                  <div className={styles.xinoVerbCell}>
                    <div className={styles.verbEn}>Connect</div>
                    <div className={styles.verbCn}>连接</div>
                    <div className={styles.verbDesc}>连接人、数据、知识、系统与任务，打通组织内分散的能力孤岛</div>
                  </div>
                  
                  <div className={styles.xinoVerbCell}>
                    <div className={styles.verbEn}>Understand</div>
                    <div className={styles.verbCn}>理解</div>
                    <div className={styles.verbDesc}>理解用户目标，理解业务语义，理解场景上下文与执行意图</div>
                  </div>

                  <div className={styles.xinoVerbCell}>
                    <div className={styles.verbEn}>Insight</div>
                    <div className={styles.verbCn}>洞察</div>
                    <div className={styles.verbDesc}>发现语义冲突、异常、映射缺口和治理机会，主动提示而非等待</div>
                  </div>

                  <div className={styles.xinoVerbCell}>
                    <div className={styles.verbEn}>Execute</div>
                    <div className={styles.verbCn}>执行</div>
                    <div className={styles.verbDesc}>组织任务、调用 Skill / Tool、推动结果落地，形成可交付闭环</div>
                  </div>
                </div>

                <div className={clsx(styles.xinoQuoteBlock, 'r', 'd3')}>
                  <p className={styles.xinoQuoteText}>告诉我你想完成什么。<br />我会帮你判断路径、组织任务，并一步步推进。</p>
                  <p className={styles.xinoQuoteAttr}>— Xino｜犀诺 · AI Work Partner</p>
                </div>
              </div>

              {/* Xino chat frame mockup */}
              <div className={clsx(styles.xinoRight, 'r', 'd3')}>
                <div className={styles.xinoFrame}>
                  <div className={styles.xinoFrameHeader}>
                    <div className={styles.xinoFrameDots}>
                      <span /><span /><span />
                    </div>
                    <span className={styles.xinoFrameTitle}>Xino · AI Workbench</span>
                  </div>
                  <div className={styles.xinoFrameBody}>
                    <div className={styles.xinoChat}>
                      <div className={clsx(styles.chatRow, styles.user)}>
                        <div className={styles.chatBubble}>帮我分析昨日订单异常，找出口径不一致的问题</div>
                      </div>

                      <div className={styles.chatRow}>
                        <div className={styles.chatAvatar}>
                          <img src="/img/xino/xino-avatar.png" alt="Xino" />
                        </div>
                        <div>
                          <div className={styles.chatBubble}>我理解你的意图：分析订单数据异常 + 口径对齐。让我先检查相关字段的语义状态……</div>
                        </div>
                      </div>

                      <div className={styles.chatStatus}>正在执行 · 语义分析中</div>

                      <div className={styles.taskCard}>
                        <div className={styles.taskCardH}>// 发现 3 个治理任务</div>
                        <div className={styles.taskItem}>
                          <span className={styles.taskCheck}>✓</span>
                          "实收金额"与"应收金额"口径冲突
                        </div>
                        <div className={styles.taskItem}>
                          <span className={styles.taskPending}>→</span>
                          订单对象存在重复映射，待合并
                        </div>
                        <div className={styles.taskItem}>
                          <span className={styles.taskPending}>→</span>
                          发布前检查：2 个字段语义未确认
                        </div>
                      </div>

                      <div className={styles.chatRow}>
                        <div className={styles.chatAvatar}>
                          <img src="/img/xino/xino-avatar.png" alt="Xino" />
                        </div>
                        <div>
                          <div className={styles.chatBubble}>已生成 3 个可处理任务，附带证据链与推荐动作。要现在开始处理吗？</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
           INSIGHTS / CONTENT PREVIEW
           ═══════════════════════════════════════ */}
        <section id="content" className={clsx(styles.section, styles.contentSection)}>
          <div className="container">
            <div className={clsx(styles.sectionEyebrow, 'r')}>Semovix Insights</div>
            <Heading as="h2" className={clsx(styles.sectionH2, 'r', 'd1')}>技术洞察与<br />工程化指南</Heading>

            <div className={clsx(styles.contentGrid, 'r', 'd2')}>
              <Link className={styles.contentCard} to="/ai-agent-engineering-guide/03-tool-skill-protocol/03-skill-concept">
                <div className={styles.cardCat}>AI Agent · 本周精选</div>
                <Heading as="h3" className={styles.cardH3}>Skill 是什么？为什么它会成为 Agent 能力沉淀的核心？</Heading>
                <p className={styles.cardBody}>解释 Skill 与 Tool 的区别，以及 Skill Registry 和 Skill Runtime 的工程价值。</p>
                <div className={styles.cardMeta}>
                  <span>Semovix Team</span>
                  <span>2026-05-17</span>
                  <span className={styles.cardArrow}>→</span>
                </div>
              </Link>

              <Link className={styles.contentCard} to="/ai-agent-engineering-guide/03-tool-skill-protocol/02-tool-calling">
                <div className={styles.cardCat}>Agent Engineering</div>
                <Heading as="h3" className={styles.cardH3}>Tool Calling：让 AI 从"会回答"走向"能行动"</Heading>
                <p className={styles.cardBody}>讲清 Tool Calling、JSON Schema、工具权限、工具校验和工具审计的完整实现方式。</p>
                <div className={styles.cardMeta}>
                  <span>Semovix Team</span>
                  <span>1 min read</span>
                  <span className={styles.cardArrow}>→</span>
                </div>
              </Link>

              <Link className={styles.contentCard} to="/ai-agent-engineering-guide/04-agent-runtime-engineering/01-context-engineering">
                <div className={styles.cardCat}>Context Engineering</div>
                <Heading as="h3" className={styles.cardH3}>为什么 Agent 经常跑偏？问题可能不在模型，而在上下文</Heading>
                <p className={styles.cardBody}>解释 Context Engineering 为什么是生产级 Agent 的关键能力，以及如何系统性组织上下文。</p>
                <div className={styles.cardMeta}>
                  <span>Semovix Team</span>
                  <span>1 min read</span>
                  <span className={styles.cardArrow}>→</span>
                </div>
              </Link>
            </div>

            <div className={clsx(styles.insightBlock, 'r', 'd3')}>
              <p className={styles.insightText}>真正的 AI Agent 开发，不是让模型更会聊天，而是构建一个<br />可执行、可审计、可恢复、可协作的智能任务系统。</p>
              <p className={styles.insightAttr}>— Semovix · AI Agent 工程化指南 · 核心判断</p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
           CTA SECTION
           ═══════════════════════════════════════ */}
        <section id="cta" className={clsx(styles.section, styles.ctaSection)}>
          <div className={styles.ctaBg} />
          <div className="container">
            <div className={styles.ctaContent}>
              <Heading as="h2" className={clsx(styles.ctaH2, 'r')}>
                让 AI 真正<br /><em>参与工作</em>
              </Heading>
              
              <p className={clsx(styles.ctaSub, 'r', 'd1')}>
                Semovix 不是一个只会回答问题的 AI。<br />
                它是让组织真正看懂数据、组织知识、推进任务、完成执行的智能平台。
              </p>

              <div className={clsx('r', 'd2')} style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button className={styles.btnSolid}>预约产品演示</button>
                <Link className={styles.btnOutline} to="/ai-agent-engineering-guide">
                  阅读工程化指南 →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
