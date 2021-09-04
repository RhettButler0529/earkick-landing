import "./style.scss"
import PRIVACYICON from "resources/images/privacy.png"

const MainPrivacy = () => (
    <div className="main-privacy flex flex-column">
      <p>Privacy</p>
      <img src={PRIVACYICON} alt="feature-icons" width={'75px'}/>
      <div className="main-privacy-items flex">
        <div>
          <b>Your privacy is key: </b> No registration is required to use Earkick. This means that we have no personal data whatsoever about you. Your journal data belongs to you and only to you. We are not exposing it to third parties. Your data serves to support you and is used to build better tools for everyone who wants to manage anxiety in the future.
        </div>
      </div>
    </div>

)

export default MainPrivacy
