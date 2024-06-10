import { useTranslation } from 'react-i18next'
import classes from './LoginForm.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../..//model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { AppDispatch } from 'app/providers/StoreProvider/config/store'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch: AppDispatch = useDispatch()
  const { username, password, isLoading, error } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])


  return (
    <div className={classNames(classes.loginForm, {}, [className ?? ''])} >
      <Text title={t('Authorization form')} />
      {error && <Text text={t('Incorrect data for Authorization')} theme={TextTheme.Error} />}
      <Input
        className={classes.input}
        type='text'
        placeholder={t('Enter your username')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className={classes.input}
        type='text'
        placeholder={t('Enter your password')}
        onChange={onChangePassword}
        value={password}
      />
      <Button disabled={isLoading} onClick={onLoginClick} theme={ButtonTheme.Outline} className={classes.loginBtn}>{t('login')}</Button>
    </div>

  )
})