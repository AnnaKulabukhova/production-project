import { useTranslation } from 'react-i18next'
import classes from './ProfileCard.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input'
import { Profile } from '../model/types/profile'
import { Loader } from 'shared/ui/Loader'
import { SerializedError } from '@reduxjs/toolkit'
import { Avatar } from 'shared/ui/Avatar'
import { Select } from 'shared/ui/Select'
import { Currency } from "entities/Currency/model/types/currency"
import { CurrencySelect } from 'entities/Currency'
import { Country } from "entities/Country/model/types/countries"
import { CountrySelect } from 'entities/Country'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string | SerializedError
  readonly?: boolean
  onChangeLastName?: (value?: string) => void
  onChangeFirstName?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    error,
    isLoading,
    data,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry
  } = props

  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
      <div className={classNames(classes.profileCard, {}, [className, classes.loading])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(classes.profileCard, {}, [className, classes.error])}>
        <Text
          theme={TextTheme.Error}
          title={t('An error occurred while uploading the profile')}
          text={t('Try refreshing the page')}
          align={TextAlign.Center}
        />
      </div>
    )
  }

  return (
    <div className={classNames(classes.profileCard, { [classes.editing]: !readonly }, [className])} >
      {data?.avatar && (
        <div className={classes.avatarWrapper}>
          <Avatar src={data?.avatar} />
        </div>
      )}
      <div className={classes.data}>
        <Input
          onChange={onChangeFirstName}
          readonly={readonly}
          placeholder={t('Your first name')}
          className={classes.input}
          value={data?.first}
        />
        <Input
          onChange={onChangeLastName}
          readonly={readonly}
          placeholder={t('Your last name')}
          className={classes.input}
          value={data?.lastName}
        />
        <Input
          onChange={onChangeAge}
          readonly={readonly} placeholder={t('Your age')}
          className={classes.input}
          value={data?.age}
        />
        <Input
          onChange={onChangeCity}
          readonly={readonly} placeholder={t('Your city')}
          className={classes.input}
          value={data?.city}
        />
        <Input
          onChange={onChangeUsername}
          readonly={readonly}
          placeholder={t('Your username')}
          className={classes.input}
          value={data?.username}
        />
        <Input
          onChange={onChangeAvatar}
          readonly={readonly}
          placeholder={t('Link to the avatar')}
          className={classes.input}
          value={data?.avatar}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
          className={classes.input}
        />
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
          className={classes.input}
        />
      </div>
    </div>
  )
}