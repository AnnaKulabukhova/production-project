import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleType } from '@/entities/Article';
import type { TabItem } from '@/shared/ui/deprecated/Tabs';
import { Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { ToggleFeatures } from '@/shared/lib/features';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

interface ArticlesTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticlesTypeTabs = memo(({ className, value, onChangeType }: ArticlesTypeTabsProps) => {
  const { t } = useTranslation();
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
    <ToggleFeatures
      feature='isAppRedesigned'
      off={
        <TabsDeprecated tabs={typeTabs} value={value} onTabClick={onChangeType} className={classNames('', {}, [className])} />
      }
      on={
        <Tabs direction='column' tabs={typeTabs} value={value} onTabClick={onChangeType} className={classNames('', {}, [className])} />
      }
    />
  )
});
