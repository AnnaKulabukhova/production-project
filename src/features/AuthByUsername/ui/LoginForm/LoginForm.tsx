import { useTranslation } from 'react-i18next'
import classes from './LoginForm.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(classes.loginForm, {}, [className ?? ''])} >
      <Input
        className={classes.input}
        type='text'
        placeholder={t('Enter your username')}
      />
      <Input
        className={classes.input}
        type='text'
        placeholder={t('Enter your password')}

      />
      <Button className={classes.loginBtn}>{t('login')}</Button>
    </div>

  )
}