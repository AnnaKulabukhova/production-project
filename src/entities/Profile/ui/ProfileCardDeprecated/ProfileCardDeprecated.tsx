import { useTranslation } from 'react-i18next';
import classes from './ProfileCardDeprecated.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/redesigned/Loader';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import type { ProfileCardProps } from '../ProfileCard';

export const ProfileCardDeprecatedSkeleton = () => {
  return (
    <HStack justify="center" max className={classNames(classes.profileCard, { [classes.loading]: true }, [])}>
      <Loader />
    </HStack>
  );
}

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation('profile');
  return (
    <HStack justify="center" className={classNames(classes.profileCard, { [classes.error]: true }, [])}>
      <Text
        theme={TextTheme.Error}
        title={t('An error occurred while uploading the profile')}
        text={t('Try refreshing the page')}
        align={TextAlign.Center}
      />
    </HStack>
  );
}

export const ProfileCardDeprecated = (props: ProfileCardProps) => {
  const {
    className,
    data,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation('profile');

  return (
    <VStack max gap="16" className={classNames(classes.profileCard, { [classes.editing]: !readonly }, [className])}>
      {data?.avatar && (
        <HStack justify="center" max className={classes.avatarWrapper}>
          <Avatar src={data?.avatar} />
        </HStack>
      )}
      <Input
        data-testid="ProfileCard.FirstName"
        onChange={onChangeFirstName}
        readonly={readonly}
        placeholder={t('Your first name')}
        className={classes.input}
        value={data?.first}
      />
      <Input
        data-testid="ProfileCard.Lastname"
        onChange={onChangeLastName}
        readonly={readonly}
        placeholder={t('Your last name')}
        className={classes.input}
        value={data?.lastName}
      />
      <Input
        data-testid="ProfileCard.Age"
        onChange={onChangeAge}
        readonly={readonly}
        placeholder={t('Your age')}
        className={classes.input}
        value={data?.age}
      />
      <Input
        data-testid="ProfileCard.City"
        onChange={onChangeCity}
        readonly={readonly}
        placeholder={t('Your city')}
        className={classes.input}
        value={data?.city}
      />
      <Input
        data-testid="ProfileCard.Username"
        onChange={onChangeUsername}
        readonly={readonly}
        placeholder={t('Your username')}
        className={classes.input}
        value={data?.username}
      />
      <Input
        data-testid="ProfileCard.Avatar"
        onChange={onChangeAvatar}
        readonly={readonly}
        placeholder={t('Link to the avatar')}
        className={classes.input}
        value={data?.avatar}
      />
      <CurrencySelect
        data-testid="ProfileCard.Currency"
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
        className={classes.input}
      />
      <CountrySelect
        data-testid="ProfileCard.Country"
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
        className={classes.input}
      />
    </VStack>
  );
};
