import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoading, ReducersList } from 'shared/lib/components/DynamicModuleLoading/DynamicModuleLoading'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoading reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])} >
        <ProfileCard />
      </div>
    </DynamicModuleLoading>
  )
}

export default ProfilePage