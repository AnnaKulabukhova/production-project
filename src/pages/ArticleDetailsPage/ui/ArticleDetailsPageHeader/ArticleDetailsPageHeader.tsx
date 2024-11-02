import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';
import { useNavigate } from 'react-router-dom';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getRouteArticles } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation('article');
  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(getRouteArticles());
  }, [navigate]);

  return (
    <HStack justify="between" max className={classNames('', {}, [className])}>
      <Button onClick={onBackToList}>{t('onBackToList')}</Button>
    </HStack>
  );
});
export default ArticleDetailsPageHeader;
