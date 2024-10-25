import { useTranslation } from 'react-i18next';
import classes from './LoginForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Input } from '@/shared/ui/redesigned/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../..//model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../..//model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../..//model/selectors/getLoginLoading/getLoginLoading';
import type { ReducersList } from '@/shared/lib/components/DynamicModuleLoading/DynamicModuleLoading';
import { DynamicModuleLoading } from '@/shared/lib/components/DynamicModuleLoading/DynamicModuleLoading';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);
  const forceUpdate = useForceUpdate()

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
      forceUpdate()
    }
  }, [forceUpdate, onSuccess, dispatch, username, password]);

  return (
    <DynamicModuleLoading removeAfterUnmount reducers={initialReducers}>
      <ToggleFeatures
        feature='isAppRedesigned'
        off={
          <div className={classNames(classes.loginForm, {}, [className])}>
            <TextDeprecated title={t('Authorization form')} />
            {error && (
              <TextDeprecated text={t('Incorrect data for Authorization')} theme={TextTheme.Error} />
            )}
            <InputDeprecated
              className={classes.input}
              type="text"
              placeholder={t('Enter your username')}
              onChange={onChangeUsername}
              value={username}
            />
            <InputDeprecated
              className={classes.input}
              type="text" placeholder={t('Enter your password')}
              onChange={onChangePassword}
              value={password}
            />
            <ButtonDeprecated
              disabled={isLoading}
              onClick={onLoginClick}
              theme={ButtonTheme.BackgroundInverted}
              className={classes.loginBtn}
            >
              {t('login')}
            </ButtonDeprecated>
          </div>
        }
        on={
          <VStack gap='16' className={classNames(classes.loginForm, {}, [className])}>
            <Text title={t('Authorization form')} />
            {error && (
              <Text text={t('Incorrect data for Authorization')} variant='error' />
            )}
            <Input
              className={classes.input}
              type="text"
              placeholder={t('Enter your username')}
              onChange={onChangeUsername}
              value={username}
            />
            <Input
              className={classes.input}
              type="text" placeholder={t('Enter your password')}
              onChange={onChangePassword}
              value={password}
            />
            <Button
              disabled={isLoading}
              onClick={onLoginClick}
              variant='outline'
              className={classes.loginBtn}
            >
              {t('login')}
            </Button>
          </VStack>
        }
      />

    </DynamicModuleLoading>
  );
});

export default LoginForm;
