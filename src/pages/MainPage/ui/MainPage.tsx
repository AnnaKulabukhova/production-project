import { useTranslation } from "react-i18next"

const MainPage = () => {
  const {t} = useTranslation('main')
  return (
    <><div>{t("Главная страница")}</div>
    <div>{t("hfgjhg")}</div></>
  )
}

export default MainPage