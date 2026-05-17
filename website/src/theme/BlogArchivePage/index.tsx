/**
 * Semovix custom blog archive page
 * Cyberpunk void-black and high-contrast light mode design matching BlogListPage
 */
import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import type {Props} from '@theme/BlogArchivePage';
import SearchMetadata from '@theme/SearchMetadata';
import styles from './styles.module.css';

export default function BlogArchivePage({archive}: Props): ReactNode {
  const title = "归档 // ARCHIVES";

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

  // Group posts by year
  const postsByYear = archive.blogPosts.reduce((acc, post) => {
    const dateStr = post.metadata.date;
    const year = new Date(dateStr).getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<string, typeof archive.blogPosts>);

  // Sort years in descending order
  const years = Object.keys(postsByYear).sort((a, b) => b.localeCompare(a));

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogArchivePage,
        styles.blogListPageRoot, // Enable global conjoined theme overrides
      )}>
      <PageMetadata title={title} description="Semovix 技术博客全量文章归档，系统化追踪 AI Agent 架构演进与工程实践" />
      <SearchMetadata tag="blog_archive" />
      
      <Layout>
        <main className={styles.page}>
          
          {/* ═══ HERO ═══ */}
          <section className={styles.hero}>
            <div className={styles.heroOrb} />
            <div className={styles.heroInner}>
              <div className={styles.heroLeft}>
                <div className={styles.heroEyebrow}>
                  <div className={styles.pulse} />
                  <span>历史沉淀库 · ARCHIVES · 2026</span>
                </div>
                <h1 className={styles.heroTitle}>
                  INSIGHTS<br/>
                  <span className={styles.line2}>ARCHIVE</span>
                </h1>
                <p className={styles.heroDesc}>
                  这里沉淀了 Semovix 团队成立至今撰写的所有硬核技术文章。在这里，您可以跨越时间轴，系统化追踪从 ReAct 初步落地到 MCP 协议标准演进的完整工程脉络。
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.heroStat}>
                    <span className={styles.num}>{archive.blogPosts.length}</span>
                    <span className={styles.label}>// 全量沉淀篇数</span>
                  </div>
                  <div className={styles.heroStat}>
                    <span className={styles.num}>CHRONO</span>
                    <span className={styles.label}>// 排序方式</span>
                  </div>
                </div>
              </div>

              {/* Thematic Visual Box on the Right */}
              <div className={styles.heroFeatured} style={{background: 'var(--void3)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '32px', border: '1px solid var(--border)'}}>
                <div className={styles.featuredBadge}>⚡ 快捷检索</div>
                <h2 style={{fontSize: '24px', color: 'var(--text)', margin: '12px 0'}}>寻找特定主题的文章？</h2>
                <p style={{fontSize: '13px', color: 'var(--text2)', lineHeight: '1.6'}}>
                  您可以通过点击下方的关键词导航，快速筛选属于相应专题的文章合集；也可以在顶部搜索框输入您感兴趣的关键字进行全站即时检索。
                </p>
                <Link to="/blog" className={styles.readBtn} style={{width: 'fit-content', marginTop: '16px', background: 'var(--lime-dim)', border: '1px solid var(--lime)', color: 'var(--lime)', padding: '6px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: 'bold'}}>
                  返回博客首页 →
                </Link>
              </div>
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
              <section className={styles.articlesSection}>
                <div className={styles.sectionHead}>
                  <h2>CHRONOLOGICAL PUBLICATIONS</h2>
                  <span className={styles.secCount}>// 时间归档时间线</span>
                </div>

                <div className={styles.postsPanel} style={{padding: '40px 32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px'}}>
                  
                  {years.map((year) => (
                    <div key={year} style={{marginBottom: '48px'}}>
                      {/* Year Node Header */}
                      <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px'}}>
                        <h2 style={{fontFamily: 'var(--bebas)', fontSize: '48px', color: 'var(--lime)', letterSpacing: '0.05em', margin: 0, textShadow: 'var(--lime-glow)'}}>{year}</h2>
                        <div style={{flex: 1, height: '1px', background: 'linear-gradient(to right, var(--lime), transparent)'}} />
                        <span style={{fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--text3)'}}>{postsByYear[year].length} 篇文章</span>
                      </div>

                      {/* Year's post list */}
                      <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                        {postsByYear[year].map((post) => {
                          const dateObj = new Date(post.metadata.date);
                          const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
                          const dd = String(dateObj.getDate()).padStart(2, '0');
                          const tagLabel = post.metadata.tags?.[0]?.label || '';

                          return (
                            <div 
                              key={post.metadata.permalink}
                              style={{
                                display: 'flex',
                                alignItems: 'baseline',
                                gap: '16px',
                                padding: '14px 12px',
                                borderBottom: '1px solid var(--border)',
                                transition: 'all 0.2s',
                                borderRadius: '8px',
                              }}
                              className={styles.archiveRow}
                            >
                              {/* Date */}
                              <span style={{fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--text3)', minWidth: '45px'}}>{mm}.{dd}</span>
                              
                              {/* Tag Label if available */}
                              {tagLabel && (
                                <span style={{
                                  fontFamily: 'var(--mono)', 
                                  fontSize: '10px', 
                                  color: 'var(--lime)', 
                                  background: 'var(--lime-dim)', 
                                  border: '1px solid var(--lime)', 
                                  padding: '2px 8px', 
                                  borderRadius: '999px',
                                  textTransform: 'uppercase'
                                }}>
                                  {tagLabel}
                                </span>
                              )}

                              {/* Title */}
                              <Link 
                                to={post.metadata.permalink}
                                style={{
                                  fontFamily: 'var(--serif)',
                                  fontSize: '16px',
                                  fontWeight: 500,
                                  color: 'var(--text)',
                                  textDecoration: 'none',
                                  transition: 'all 0.2s',
                                }}
                                className={styles.archiveLink}
                              >
                                {post.metadata.title}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}

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
                <div className={styles.nlNote}>* 随时退订 · 无 any 广告垃圾邮件</div>
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
    </HtmlClassNameProvider>
  );
}
