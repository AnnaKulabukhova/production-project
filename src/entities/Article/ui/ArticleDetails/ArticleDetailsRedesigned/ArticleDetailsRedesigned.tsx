import { useTranslation } from 'react-i18next'
import classes from '../ArticleDetails.module.scss'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Text, } from '@/shared/ui/redesigned/Text'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails'
import { renderArticleBlock } from '../renderArticleBlock'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'

export const ArticleDetailsRedesignedLoading = () => {
  return (
    <>
      <Skeleton className={classes.avatar} width={200} height={200} border="50%" />
      <Skeleton className={classes.title} width={670} height={30} />
      <Skeleton className={classes.skeleton} width={400} height={30} />
      <Skeleton className={classes.skeleton} width="100%" height={230} />
      <Skeleton className={classes.skeleton} width="100%" height={230} />
    </>
  )
}

export const ArticleDetailsRedesignedError = () => {
  const { t } = useTranslation('article');
  return (
    <Text align='center' title={t('Download error')} />
  )
}

export const ArticleDetailsRedesigned = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <Text size='l' bold title={article?.title} />
      <Text size='l' title={article?.subtitle} />
      <AppImage
        fallback={<Skeleton width={'100%'} height={420} border={'16px'} />}
        src={article?.img}
        alt={article?.title}
        className={classes.img}
      />

      {article?.blocks.map((block, index) => renderArticleBlock(block, index))}
    </>
  )
}