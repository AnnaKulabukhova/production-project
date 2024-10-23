import { useTranslation } from 'react-i18next'
import classes from '../ArticleDetails.module.scss'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Text, TextAlign, TextSize } from '@/shared/ui/deprecated/Text'
import { Icon } from '@/shared/ui/deprecated/Icon'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails'
import EyeIcon from '@/shared/assets/icons/eye.svg';
import Calendar from '@/shared/assets/icons/calendar.svg';
import { renderArticleBlock } from '../renderArticleBlock'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'

export const ArticleDetailsDeprecatedLoading = () => {
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

export const ArticleDetailsDeprecatedError = () => {
  const { t } = useTranslation('article');
  return (
    <Text align={TextAlign.Center} title={t('Download error')} />
  )
}

export const ArticleDetailsDeprecated = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <HStack justify="center" max className={classes.avatarWrapper}>
        <Avatar src={article?.img} size={200} alt={article?.title} className={classes.avatar} />
      </HStack>
      <VStack gap="4" max data-testId="ArticleDetails.Info">
        <Text size={TextSize.SizeL} title={article?.title} text={article?.subtitle} />
        <HStack align="center" gap="8" className={classes.articleInfo}>
          <Icon Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </HStack>
        <HStack align="center" gap="8" className={classes.articleInfo}>
          <Icon Svg={Calendar} />
          <Text text={article?.createdAt} />
        </HStack>
      </VStack>
      {article?.blocks.map((block, index) => renderArticleBlock(block, index))}
    </>
  )
}