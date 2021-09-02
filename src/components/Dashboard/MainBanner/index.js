import "./style.scss"
import IOSBUTTON from "resources/images/iosbutton.png"
import MAINBANNER from "resources/images/main-banner.png"

const MainBanner = ({ gotoIOS }) => (
  <div className="main-banner flex">
    <div>
      <div className="main-banner-texts flex flex-column">
        <div className="main-banner-title flex">
          <div className="flex">
            Your anxiety journal
          </div>
        </div>
        <div className="main-banner-comments">
          Monitor your anxiety and improve
          <br /> your mental health
        </div>
        <div className="main-banner-ios flex">
          <div onClick={gotoIOS}>
            <img src={IOSBUTTON} alt="banner text bg" />
          </div>
        </div>
        <div className="main-banner-subtitle flex">
          <div className="flex">
            EFFORTLESS
          </div>
        </div>
        <div className="main-banner-comments">
          Log your anxiety without typing.
        </div>
        <div className="main-banner-subtitle flex">
          <div className="flex">
            ANONYMOUS
          </div>
        </div>
        <div className="main-banner-comments">
          No registration required.
        </div>
        <div className="main-banner-subtitle flex">
          <div className="flex">
            FREE FOREVER
          </div>
        </div>
        <div className="main-banner-comments">
          We will never charge you.
        </div>
      </div>
    </div>
    <div>
      <img src={MAINBANNER} alt="banner text bg" />
    </div>

  </div>
)

export default MainBanner
