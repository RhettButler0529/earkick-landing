import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "components/Header"
import Footer from "components/Footer"
import Dashboard from "pages/Dashboard"
import NotFound from "pages/404Page"
import PrivacyPolicy from "pages/PrivacyPolicy"

import ROUTERS from "constants/Routers"
import MainTry from "./components/Dashboard/MainTry"
import About from "./containers/About"

const AppRouter = () => {
  return (
    <div>
      <Router>
        <>
          <Header />
        </>
        <Switch>
          <Route exact path={ROUTERS.HOME} component={Dashboard} />
          <Route exact path={ROUTERS.ABOUT} component={About} />
          <Route path={ROUTERS.PRIVACYPOLICY} component={PrivacyPolicy} />
          <Route render={() => <NotFound />} />
        </Switch>
        <>
          <MainTry/>
          <Footer />
        </>
      </Router>
    </div>
  )
}

export default AppRouter
