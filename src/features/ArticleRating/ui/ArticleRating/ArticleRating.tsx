import { RatingCard } from '@/entities/Rating';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRating({ articleId, userId: userData?.id ?? '' });
  // 1 эл массива - сама функция кот вызывает мутацию, 2 эл массива - объект с настройками
  const [rateArticleMutation] = useRateArticle();

  const rating = data?.[0];

  const handlerRateArticle = useCallback(
    (starCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          articleId,
          userId: userData?.id ?? '',
          rate: starCount,
          feedback,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [articleId, userData?.id, rateArticleMutation],
  );

  const onAccept = useCallback(
    (starCount: number, feedback?: string) => {
      handlerRateArticle(starCount, feedback);
    },
    [handlerRateArticle],
  );

  const onCancel = useCallback(
    (starCount: number) => {
      handlerRateArticle(starCount);
    },
    [handlerRateArticle],
  );

  if (isLoading) {
    return <Skeleton width={'100%'} height={140} />;
  }

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      rate={rating?.rate}
      className={className}
      title={t('Review of the article')}
      feedbackTitle={t('Leave your feedback about the article')}
      hasFeedback
    />
  );
});

export default ArticleRating;
