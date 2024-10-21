import { useTranslation } from 'react-i18next';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { TextAlign } from '@/shared/ui/deprecated/Text';
import type { ProfileCardProps } from '../ProfileCard';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

export const ProfileCardRedesignedSkeleton = () => {
  return (
    <Card max padding='24'>
      <VStack max gap='32'>
        <HStack max justify='center'>
          <Skeleton width={128} height={128} border={'50%'} />
        </HStack>
        <HStack gap='32' max>
          <VStack gap='16' max>
            <Skeleton width={'100%'} height={38} />
            <Skeleton width={'100%'} height={38} />
            <Skeleton width={'100%'} height={38} />
            <Skeleton width={'100%'} height={38} />
          </VStack>
          <VStack gap='16' max>
            <Skeleton width={'100%'} height={38} />
            <Skeleton width={'100%'} height={38} />
            <Skeleton width={'100%'} height={38} />
            <Skeleton width={'100%'} height={38} />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  )
}

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation('profile');
  return (
    <HStack justify="center">
      <Text
        variant='error'
        title={t('An error occurred while uploading the profile')}
        text={t('Try refreshing the page')}
        align={TextAlign.Center}
      />
    </HStack>
  );
}

export const ProfileCardRedesigned = (props: ProfileCardProps) => {
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
    <Card border='32' padding='24' max className={className}>

      <VStack gap='32'>
        {data?.avatar && (
          <HStack justify="center" max >
            <Avatar src={data?.avatar} size={128} />
          </HStack>
        )}

        <HStack gap='24' max >
          <VStack max gap='16'>
            <Input
              data-testid="ProfileCard.FirstName"
              onChange={onChangeFirstName}
              readonly={readonly}
              value={data?.first}
              label={t('Name')}
              size='m'
            />
            <Input
              data-testid="ProfileCard.Lastname"
              onChange={onChangeLastName}
              readonly={readonly}
              value={data?.lastName}
              label={t('Lastname')}
              size='m'
            />
            <Input
              data-testid="ProfileCard.Age"
              onChange={onChangeAge}
              readonly={readonly}
              value={data?.age}
              label={t('Age')}
              size='m'
            />
            <Input
              data-testid="ProfileCard.City"
              onChange={onChangeCity}
              readonly={readonly}
              value={data?.city}
              label={t('City')}
              size='m'
            />
          </VStack>
          <VStack max gap='16'>
            <Input
              data-testid="ProfileCard.Username"
              onChange={onChangeUsername}
              readonly={readonly}
              value={data?.username}
              label={t('Username')}
              size='m'
            />
            <Input
              data-testid="ProfileCard.Avatar"
              onChange={onChangeAvatar}
              readonly={readonly}
              value={data?.avatar}
              label={t('The link to the avatar')}
              size='m'
            />
            <CurrencySelect
              data-testid="ProfileCard.Currency"
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
              label={t('Currency')}
            />
            <CountrySelect
              data-testid="ProfileCard.Country"
              value={data?.country}
              onChange={onChangeCountry}
              readonly={readonly}
              label={t('Country')}
            />
          </VStack>
        </HStack>
      </VStack>
    </Card>

  );
};
