/**
 * Semovix custom blog tags list page
 * Target: Docusaurus v3.x
 */
import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  translateTagsPageTitle,
} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import TagsListByLetter from '@theme/TagsListByLetter';
import type {Props} from '@theme/BlogTagsListPage';
import SearchMetadata from '@theme/SearchMetadata';
import styles from './styles.module.css';

export default function BlogTagsListPage({tags}: Props): ReactNode {
  const title = translateTagsPageTitle();

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagsListPage,
      )}>
      <PageMetadata title={title} />
      <SearchMetadata tag="blog_tags_list" />
      <Layout>
        <main className={styles.page}>
          <section className={styles.hero}>
            <div>
              <span className={styles.kicker}>Semovix Topics</span>
              <h1>技术专题</h1>
              <p>
                按能力域浏览 Semovix 技术博客。每个专题页会聚合该方向下的文章，
                更适合连续阅读、系列沉淀与后续内容运营。
              </p>
            </div>
            <div className={styles.heroActions}>
              <Link className="button button--primary button--lg" to="/blog">
                返回博客首页
              </Link>
              <Link className="button button--secondary button--lg" to="/ai-agent-engineering-guide">
                阅读系统化指南
              </Link>
            </div>
          </section>

          <section className={styles.tagsSection}>
            <div className={styles.sectionHeading}>
              <span className={styles.kicker}>All Topics</span>
              <h2>全部专题标签</h2>
            </div>
            <div className={styles.tagsShell}>
              <TagsListByLetter tags={tags} />
            </div>
          </section>
        </main>
      </Layout>
    </HtmlClassNameProvider>
  );
}
