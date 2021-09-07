import MainBanner from "components/Dashboard/MainBanner"
import MainProcess from "components/Dashboard/MainProcess"
import MainFeatures from "components/Dashboard/MainFeatures"
import MainPrivacy from "components/Dashboard/MainPrivacy"

const Dashboard = () => {

  const gotoIOS = () => {
    window.location.assign('https://testflight.apple.com/join/pwEHcAEF');
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
