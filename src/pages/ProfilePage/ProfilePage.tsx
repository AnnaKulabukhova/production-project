import { profileReducer } from 'entities/Profile'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoading, ReducersList } from 'shared/lib/components/DynamicModuleLoading/DynamicModuleLoading'

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation()
  return (
    <DynamicModuleLoading reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className ?? ''])} >
        !!!!
      </div>
    </DynamicModuleLoading>
  )
}

export default ProfilePage