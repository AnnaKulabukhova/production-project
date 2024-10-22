import { memo } from 'react'
import { Page } from '@/widgets/Page'
import { Text } from '@/shared/ui/redesigned/Text'
import { useTranslation } from 'react-i18next'
import { UiDesignSwitcher } from '@/features/UiDesignSwitcher'

interface SettingsPageProps {
  className?: string
}

const SettingsPage = memo(({ className }: SettingsPageProps) => {
  const { t } = useTranslation('settings')

  return (
    <Page className={className} >
      <Text title={t('User settings')} />
      <UiDesignSwitcher />
    </Page>
  )
})

export default SettingsPage
