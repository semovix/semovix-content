import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  useCurrentSidebarCategory,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import type {Props} from '@theme/DocCategoryGeneratedIndexPage';
import SearchMetadata from '@theme/SearchMetadata';
import styles from './styles.module.css';

function getColorByPosition(permalink: string): string {
  const segment = permalink.split('/category/')[1] ?? '';
  const num = parseInt(segment, 10);
  if (num <= 2) return 'c1';
  if (num <= 4) return 'c2';
  if (num <= 6) return 'c3';
  return 'c4';
}

function DocCategoryGeneratedIndexPageMetadata({
  categoryGeneratedIndex,
}: Props): ReactNode {
  const title = categoryGeneratedIndex.title;
  const description = categoryGeneratedIndex.description;
  return (
    <>
      <PageMetadata title={title} description={description} />
      <SearchMetadata tag="doc-category-generated-index-page" />
    </>
  );
}

function DocCategoryGeneratedIndexPageContent({
  categoryGeneratedIndex,
}: Props): ReactNode {
  const categoryItems = useCurrentSidebarCategory();
  const colorClass = getColorByPosition(categoryGeneratedIndex.permalink);
  const {title, description} = categoryGeneratedIndex;

  const docs = categoryItems.items.filter(
    (item) => item.type === 'link' && !item.unlisted,
  );

  return (
    <main className={styles.categoryPage}>
      <div className={styles.hero}>
        <div className={styles.heroBadge}>
          <span className={styles.heroDot} />
          Chapter
        </div>
        <h1>{title}</h1>
        {description && (
          <p className={styles.heroDescription}>{description}</p>
        )}
      </div>

      <div className={styles.divider} />

      <div className={styles.cards}>
        {docs.map((doc, i) => (
          <Link
            key={doc.permalink}
            to={doc.permalink}
            className={clsx(styles.card, styles[colorClass])}
            style={{animationDelay: `${i * 0.05}s`}}>
            <div className={styles.cardIndex}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3>{doc.label}</h3>
            {doc.description && (
              <p className={styles.cardDescription}>{doc.description}</p>
            )}
            <div className={styles.cardFooter}>
              <span className={styles.cardReadMore}>
                阅读全文
              </span>
              <span className={styles.cardArrow}>→</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default function DocCategoryGeneratedIndexPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.docPages,
        ThemeClassNames.page.docTagPage,
      )}>
      <DocCategoryGeneratedIndexPageMetadata {...props} />
      <DocCategoryGeneratedIndexPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
