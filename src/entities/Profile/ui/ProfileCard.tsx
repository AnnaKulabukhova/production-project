import { useTranslation } from 'react-i18next'
import classes from './ProfileCard.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { useSelector } from 'react-redux'
import { getProfileData } from '../model/selectors/getProfileData/getProfileData'
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../model/selectors/getProfileError/getProfileError'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile')
  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  return (
    <div className={classNames(classes.profileCard, {}, [className])} >
      <div className={classes.header}>
        <Text title={t('Profile')} />
        <Button className={classes.editButton} theme={ButtonTheme.Outline}>
          {t('Edit')}
        </Button>
      </div>
      <div className={classes.data}>
        <Input placeholder={t('Your first name')} className={classes.input} value={data?.first} />
        <Input placeholder={t('Your last name')} className={classes.input} value={data?.lastName} />
      </div>
    </div >
  )
}