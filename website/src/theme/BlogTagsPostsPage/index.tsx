\
/**
 * Semovix custom blog tag posts page
 * Target: Docusaurus v3.x
 */
import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {useBlogTagsPostsPageTitle} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props} from '@theme/BlogTagsPostsPage';
import BlogPostItems from '@theme/BlogPostItems';
import Unlisted from '@theme/ContentVisibility/Unlisted';
import styles from './styles.module.css';

function BlogTagsPostsPageMetadata({tag}: Props): ReactNode {
  const title = useBlogTagsPostsPageTitle(tag);
  return (
    <>
      <PageMetadata title={title} description={tag.description} />
      <SearchMetadata tag="blog_tags_posts" />
    </>
  );
}

function BlogTagsPostsPageContent({
  tag,
  items,
  listMetadata,
}: Props): ReactNode {
  const title = useBlogTagsPostsPageTitle(tag);

  return (
    <Layout>
      <main className={styles.page}>
        {tag.unlisted && <Unlisted />}

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.kicker}>Semovix Topic</span>
            <h1>{title}</h1>
            {tag.description && <p>{tag.description}</p>}
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/blog">
                返回技术博客
              </Link>
              <Link className="button button--secondary button--lg" href={tag.allTagsPath}>
                <Translate
                  id="theme.tags.tagsPageLink"
                  description="The label of the link targeting the tag list page">
                  查看全部专题
                </Translate>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.postsSection}>
          <div className={styles.sectionHeading}>
            <span className={styles.kicker}>Articles</span>
            <h2>该专题下的文章</h2>
          </div>
          <div className={styles.postListShell}>
            <BlogPostItems items={items} />
            <BlogListPaginator metadata={listMetadata} />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default function BlogTagsPostsPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagPostListPage,
      )}>
      <BlogTagsPostsPageMetadata {...props} />
      <BlogTagsPostsPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
