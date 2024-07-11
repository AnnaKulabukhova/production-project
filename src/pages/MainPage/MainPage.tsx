import { BugButton } from "app/providers/ErrorBoundary"
import { useTranslation } from "react-i18next"
import { Page } from "shared/ui/Page"

const MainPage = () => {

  const { t } = useTranslation('main')
  return (
    <Page>
      <BugButton />
      {t("MainPage")}
    </Page>

  )
}

export default MainPage