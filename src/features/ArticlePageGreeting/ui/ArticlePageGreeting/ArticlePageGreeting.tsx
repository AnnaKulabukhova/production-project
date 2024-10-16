import { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from '@/shared/ui/deprecated/Modal'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { saveJsonSettings, useJsonSettings } from '@/entities/User'
import { isMobile } from 'react-device-detect'
import { Drawer } from '@/shared/ui/deprecated/Drawer'
import { Text } from '@/shared/ui/deprecated/Text'

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()
  const { isArticlesPageWasOpened } = useJsonSettings()

  useEffect(() => {
    if (!isArticlesPageWasOpened) {
      setIsOpen(true)
      dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }))
    }
  }, [dispatch, isArticlesPageWasOpened])

  const text = (
    <Text title={t('Welcome to the articles page')} text={t('Here you can search and view articles on various topics')} />
  )

  if (isMobile) {
    return (
      <Drawer
        lazy
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {text}
      </Drawer>
    )
  }

  return (
    <Modal
      lazy
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      {text}
    </Modal>
  )
})