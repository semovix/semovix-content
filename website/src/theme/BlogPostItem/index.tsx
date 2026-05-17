/**
 * Semovix shadowed BlogPostItem component
 * Implements premium cyberpunk cards on the list feed,
 * and maintains standard clean document layouts on detail pages.
 */
import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import type {Props} from '@theme/BlogPostItem';
import styles from './styles.module.css';

export default function BlogPostItem({children, className}: Props): ReactNode {
  const {metadata, isBlogPostPage} = useBlogPost();

  if (isBlogPostPage) {
    // Maintain standard document container for single post pages
    return (
      <BlogPostItemContainer className={className}>
        <BlogPostItemHeader />
        <BlogPostItemContent>{children}</BlogPostItemContent>
        <BlogPostItemFooter />
      </BlogPostItemContainer>
    );
  }

  // Render high-fidelity cyberpunk card for LATEST PUBLICATIONS feed lists
  const {title, permalink, formattedDate, readingTime, description, tags} = metadata;

  // Retrieve primary topic tag
  const primaryTag = tags[0]?.label || 'AI Agent';

  // Map tag to specific neon color themes
  const getTagTheme = (tagLabel: string) => {
    const label = tagLabel.toLowerCase();
    if (label.includes('react') || label.includes('ai agent') || label.includes('agent')) return 'lime';
    if (label.includes('mcp') || label.includes('tool') || label.includes('function') || label.includes('skill')) return 'sky';
    if (label.includes('rag') || label.includes('context') || label.includes('memory')) return 'amber';
    if (label.includes('prompt')) return 'rose';
    if (label.includes('deploy') || label.includes('production')) return 'violet';
    return 'lime';
  };

  const theme = getTagTheme(primaryTag);
  const cardThemeClass = styles[`ac-${theme}`];
  const tagThemeClass = styles[`tag-${theme}`];

  const readTimeStr = readingTime
    ? `⏱ ${Math.ceil(readingTime)} min read`
    : '⏱ 5 min read';

  return (
    <div className={clsx(styles.artCard, cardThemeClass, className)}>
      <div className={styles.artMetaTop}>
        <span className={clsx(styles.artTag, tagThemeClass)}>{primaryTag.toUpperCase()}</span>
        <span className={styles.artDate}>{formattedDate}</span>
      </div>

      <h3 className={styles.artTitle}>
        <Link to={permalink}>{title}</Link>
      </h3>

      {description && (
        <div className={styles.artExcerpt}>
          {description}
        </div>
      )}

      <div className={styles.artFooter}>
        <div className={styles.artKws}>
          {tags.slice(0, 3).map((tag, idx) => (
            <Link key={idx} to={tag.permalink} className={styles.artKw}>
              #{tag.label}
            </Link>
          ))}
        </div>
        <span className={styles.artReading}>{readTimeStr}</span>
      </div>
    </div>
  );
}
