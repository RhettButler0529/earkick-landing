import { useHistory } from "react-router-dom"

import MainBanner from "components/Dashboard/MainBanner"
import MainProcess from "components/Dashboard/MainProcess"
import MainFeatures from "components/Dashboard/MainFeatures"
import MainPrivacy from "components/Dashboard/MainPrivacy"

const Dashboard = () => {
  const history = useHistory()

  const gotoIOS = () => {
    // history.push(ROUTERS.CUSTOM_STICKER)
  }

  return (
    <div className="flex-column">
      <MainBanner gotoIOS={gotoIOS} />
      <MainProcess/>
      <MainFeatures />
      <MainPrivacy />
    </div>
  )
}

export default Dashboard
