import { BugButton } from '@/app/providers/ErrorBoundary'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

const MainPage = () => {
  const { t } = useTranslation('main')
  return (
    <Page data-testid="MainPage">
      <BugButton />
      {t('MainPage')}
    </Page>
  )
}

export default MainPage
