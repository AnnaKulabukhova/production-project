import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';
import { getArticleDetailsCommentIsLoading } from '../../model/selectors/comments/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentSlice/articleDetailsCommentSlice';
import { memo, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Loader } from '@/shared/ui/redesigned/Loader';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';


interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments = memo(({ className, id }: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation();
  const commentsIsLoading = useSelector(getArticleDetailsCommentIsLoading);
  const comments = useSelector(getArticleComments.selectAll);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  return (
    <VStack gap='16' max className={classNames('', {}, [className])}>
      <ToggleFeatures
        feature='isAppRedesigned'
        off={<TextDeprecated size={TextSize.SizeL} title={t('Comments')} />}
        on={<Text size={'l'} bold title={t('Comments')} />}
      />
      <Suspense fallback={<Loader />}>
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </VStack>
  );
});
