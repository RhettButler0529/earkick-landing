import "./style.scss"
import IOSBUTTON from "resources/images/iosbutton.svg"
import LOGO from "resources/images/logo.svg"

const MainTry = () => {

  const gotoIOS = () => {
    window.location.assign("https://testflight.apple.com/join/pwEHcAEF")
  }
  return (<div className="main-try flex">
    <div className="main-try-texts flex flex-column">
      {/*<div className="main-try-texts-image">*/}
      <img src={LOGO} alt="logo" width={100} />
      {/*</div>*/}

      <div className="main-try-title flex">
        <div className="flex">
          Try Earkick today!
        </div>
      </div>
      <div className="main-try-comments">
        Gain control over your anxiety
      </div>
      <div className="main-try-ios flex">
        <div onClick={gotoIOS}>
          <img src={IOSBUTTON} alt="iosbutton" height={"60px"} />
        </div>
      </div>
    </div>
  </div>)
}

export default MainTry
