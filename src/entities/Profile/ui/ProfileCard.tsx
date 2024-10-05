import { useTranslation } from 'react-i18next';
import classes from './ProfileCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input';
import type { Profile } from '../model/types/profile';
import { Loader } from '@/shared/ui/Loader';
import type { SerializedError } from '@reduxjs/toolkit';
import { Avatar } from '@/shared/ui/Avatar';
import { CurrencySelect } from '@/entities/Currency';
import type { Currency } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import type { Country } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string | SerializedError;
  readonly?: boolean;
  onChangeLastName?: (value?: string) => void;
  onChangeFirstName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
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
    onChangeCountry,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack justify="center" max className={classNames(classes.profileCard, {}, [className, classes.loading])}>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack justify="center" className={classNames(classes.profileCard, {}, [className, classes.error])}>
        <Text
          theme={TextTheme.Error}
          title={t('An error occurred while uploading the profile')}
          text={t('Try refreshing the page')}
          align={TextAlign.Center}
        />
      </HStack>
    );
  }

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
