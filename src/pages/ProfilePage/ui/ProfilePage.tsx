import { ProfileCard, fetchProfileData, getProfileError, getProfileIsLoading, getProfileReadonly, profileActions, profileReducer } from 'entities/Profile'
import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoading, ReducersList } from 'shared/lib/components/DynamicModuleLoading/DynamicModuleLoading'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm'
import { Currency } from 'entities/Currency'
import { Country } from "entities/Country/model/types/countries"

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readonly = useSelector(getProfileReadonly)
  const formData = useSelector(getProfileForm)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }))
  }, [dispatch])

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastName: value || '' }))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    const validateValue = value?.replace(/\D+/gm, '')
    dispatch(profileActions.updateProfile({ age: Number(validateValue || 0) }))
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }))
  }, [dispatch])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }, [dispatch])


  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [dispatch])

  return (
    <DynamicModuleLoading reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])} >
        <ProfilePageHeader />
        <ProfileCard
          readonly={readonly}
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoading>
  )
}

export default ProfilePage