import { ArticleType } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { MultiSelectTabs } from "@/shared/ui/redesigned/MultiSelectTabs";
import type { TabItem } from "@/shared/ui/redesigned/Tabs";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

interface TypeTabsForNewArticleProps {
  className?: string;
  value: ArticleType[];
  onChangeType: (type: ArticleType[]) => void;
}

export const TypeTabsForNewArticle = memo(({ className, value, onChangeType }: TypeTabsForNewArticleProps) => {
  const { t } = useTranslation('createArticle');

  const typeTabs = useMemo<TabItem<ArticleType>[]>(
    () => [
      {
        value: ArticleType.All,
        content: t('All'),
      },
      {
        value: ArticleType.IT,
        content: 'IT',
      },
      {
        value: ArticleType.Economics,
        content: t('Economics'),
      },
      {
        value: ArticleType.Science,
        content: t('Science'),
      },
    ],
    [t],
  );

  return (
    <MultiSelectTabs direction='column' tabs={typeTabs} value={value} onTabClick={onChangeType} className={classNames('', {}, [className])} />
  )
});