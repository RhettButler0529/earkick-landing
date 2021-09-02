import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import HeaderBar from "components/HeaderBar"
import Header from "components/Header"
import Footer from "components/Footer"
import FooterBar from "components/FooterBar"

import Dashboard from "pages/Dashboard"
import NotFound from "pages/404Page"
import FAQ from "pages/Faq"
import Help from "pages/Help"
import Status from "pages/Status"
import TermsOfService from "pages/TermsOfService"
import PrivacyPolicy from "pages/PrivacyPolicy"
import RefundPolicy from "pages/RefundPolicy"

import ROUTERS from "constants/Routers"
import MainTry from "./components/Dashboard/MainTry"
import About from "./containers/About"

const AppRouter = () => {
  return (
    <div>
      <Router>
        <>
          {/*<HeaderBar />*/}
          <Header />
        </>
        <Switch>
          <Route exact path={ROUTERS.HOME} component={Dashboard} />
          <Route exact path={ROUTERS.ABOUT} component={About} />
          {/*<Route path={ROUTERS.FAQ} component={FAQ} />*/}
          {/*<Route path={ROUTERS.HELP} component={Help} />*/}
          {/*<Route path={ROUTERS.STATUS} component={Status} />*/}
          {/*<Route path={ROUTERS.TERMSOFSERVICE} component={TermsOfService} />*/}
          {/*<Route path={ROUTERS.PRIVACYPOLICY} component={PrivacyPolicy} />*/}
          {/*<Route path={ROUTERS.REFUNDPOLICY} component={RefundPolicy} />*/}
          <Route render={() => <NotFound />} />
        </Switch>
        <>
          <MainTry/>
          <Footer />
          {/*<FooterBar />*/}
        </>
      </Router>
    </div>
  )
}

export default AppRouter
