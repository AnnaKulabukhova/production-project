import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ArticleCreatePage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { CreateArticle } from '@/features/CreateArticle';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleCreatePage = memo(({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation('createArticle')

  return (
    <Page className={classNames(classes.articleCreatePage, {}, [className])}>
      <VStack max gap='24'>
        <Text size='l' title={t('Create new article')} />
        <CreateArticle />
      </VStack>
    </Page>
  );
});

export default ArticleCreatePage;
