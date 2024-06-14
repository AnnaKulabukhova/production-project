import { useTranslation } from 'react-i18next'
import classes from './LoginForm.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { AppDispatch } from 'app/providers/StoreProvider/config/store'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../..//model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../..//model/selectors/getLoginError/getLoginError'
import { getLoginLoading } from '../..//model/selectors/getLoginLoading/getLoginLoading'
import { DynamicModuleLoading, ReducersList } from 'shared/lib/components/DynamicModuleLoading/DynamicModuleLoading'

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch: AppDispatch = useDispatch()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginLoading)
  const error = useSelector(getLoginError)

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
    <DynamicModuleLoading removeAfterUnmount reducers={initialReducers} >
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
    </DynamicModuleLoading>
  )
})

export default LoginForm