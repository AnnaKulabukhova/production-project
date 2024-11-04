import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Loader } from '@/shared/ui/redesigned/Loader';
import { useArticleRecommendationList } from '../../api/articleRecommendationsApi';
import { Text as TextDeprecated, TextAlign, TextSize, TextTheme } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(({ className }: ArticleRecommendationsListProps) => {
  const { t } = useTranslation();
  const { isLoading, data: articles, error } = useArticleRecommendationList(3);

  if (isLoading) {
    return (
      <HStack justify="center">
        <Loader />
      </HStack>
    );
  }

  if (error || !articles) {
    return (
      <HStack justify="center">
        <ToggleFeatures
          feature='isAppRedesigned'
          off={<TextDeprecated theme={TextTheme.Error} title={t('An error occurred while uploading')} align={TextAlign.Center} />}
          on={<Text variant={'error'} bold title={t('An error occurred while uploading')} align={'center'} />}
        />
      </HStack>
    );
  }

  return (
    <VStack max data-testid="ArticleRecommendationsList" gap="8" className={classNames('', {}, [className])}>
      <ToggleFeatures
        feature='isAppRedesigned'
        off={<TextDeprecated size={TextSize.SizeL} title={t('We recommend it')} />}
        on={<Text size={'l'} title={t('We recommend it')} />}
      />
      <ArticleList target="_blank" articles={articles} />
    </VStack>
  );
});
