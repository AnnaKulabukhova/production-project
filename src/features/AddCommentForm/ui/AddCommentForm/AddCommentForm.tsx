import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './AddCommentForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { DynamicModuleLoading } from '@/shared/lib/components/DynamicModuleLoading/DynamicModuleLoading'
import type { ReducersList } from '@/shared/lib/components/DynamicModuleLoading/DynamicModuleLoading'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import { useSelector } from 'react-redux'
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { HStack } from '@/shared/ui/Stack'

interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation()
  const text = useSelector(getAddCommentFormText)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandle = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onSendComment, text, onCommentTextChange])

  return (
    <DynamicModuleLoading reducers={reducers}>
      <HStack data-testid='AddCommentForm' justify='between' max className={classNames(classes.addCommentForm, {}, [className])} >
        <Input
          data-testid='AddCommentForm.Input'
          className={classes.input}
          placeholder={t('Enter the comment text')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button data-testid='AddCommentForm.Button' onClick={onSendHandle}>{t('Send')}</Button>
      </HStack>
    </DynamicModuleLoading>
  )
})

export default AddCommentForm
