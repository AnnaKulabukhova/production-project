import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './AddCommentForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { DynamicModuleLoading } from '@/shared/lib/components/DynamicModuleLoading/DynamicModuleLoading';
import type { ReducersList } from '@/shared/lib/components/DynamicModuleLoading/DynamicModuleLoading';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { useSelector } from 'react-redux';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import SendIcon from '@/shared/assets/icons/button-send-new.svg'
import SearchIcon from '@/shared/assets/icons/search-new.svg'
import { Card } from '@/shared/ui/redesigned/Card';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandle = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onSendComment, text, onCommentTextChange]);

  return (
    <DynamicModuleLoading reducers={reducers}>
      <ToggleFeatures
        feature='isAppRedesigned'
        off={
          <HStack data-testid="AddCommentForm" justify="between" max className={classNames(classes.addCommentForm, {}, [className])}>
            <InputDeprecated
              data-testid="AddCommentForm.Input"
              className={classes.input}
              placeholder={t('Enter the comment text')}
              value={text}
              onChange={onCommentTextChange}
            />
            <ButtonDeprecated data-testid="AddCommentForm.Button" onClick={onSendHandle}>
              {t('Send')}
            </ButtonDeprecated>
          </HStack>
        }
        on={
          <Card padding='24' border='32' max>
            <HStack gap='16' data-testid="AddCommentForm" justify="between" max className={classNames('', {}, [className])}>
              <Input
                addonLeft={<SearchIcon />}
                data-testid="AddCommentForm.Input"
                className={classes.inputRedesigned}
                placeholder={t('Enter the comment text')}
                value={text}
                onChange={onCommentTextChange}
                size='s'
              />
              <Icon clickable Svg={SendIcon} data-testid="AddCommentForm.Button" onClick={onSendHandle} />
            </HStack>
          </Card>
        }
      />

    </DynamicModuleLoading>
  );
});

export default AddCommentForm;
