import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "app/providers/ThemeProvider/lib"
import { AppRouter } from "./providers/router"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar"
import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getUserInit, userActions } from "entities/User"


const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const init = useSelector(getUserInit)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])


  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {init && <AppRouter />}
        </div>
      </Suspense>
    </div>

  )
}
export default App;