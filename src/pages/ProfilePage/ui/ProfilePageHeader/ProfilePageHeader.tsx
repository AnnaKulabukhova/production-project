import { useTranslation } from 'react-i18next'
import classes from './ProfilePageHeader.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile')
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])


  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={classNames(classes.profilePageHeader, {}, [className])} >
      <Text title={t('Profile')} theme={TextTheme.Primary} />
      {readonly ? (
        <Button
          onClick={onEdit}
          className={classes.editButton}
          theme={ButtonTheme.Outline}
        >
          {t('Edit')}
        </Button>
      ) : (
        <div className={classes.buttons}>
          <Button
            className={classes.cancelButton}
            theme={ButtonTheme.OutlineRed}
            onClick={onCancelEdit}
          >

            {t('Cancel')}
          </Button>
          <Button
            className={classes.saveButton}
            theme={ButtonTheme.Outline}
            onClick={onSave}
          >

            {t('Save')}
          </Button>
        </div>
      )

      }
    </div>
  )
}