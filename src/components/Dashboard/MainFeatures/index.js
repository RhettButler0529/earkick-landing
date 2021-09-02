import "./style.scss"
import FEATUREICON from "resources/images/feature_icon.png"

const MainFeatures = () => (
  <div>
    <div className="main-options flex flex-column">
      <p>Main features</p>
      <div className="main-options-items flex">
        <div>
          <img src={FEATUREICON} alt="feature-icons" height={20} style={{ marginRight: "10px" }} />
          Intuitive anxiety journal
        </div>
        <div>
          <img src={FEATUREICON} alt="feature-icons" height={20} style={{ marginRight: "10px" }} />
          Calming breathing exercises
        </div>
        <div>
          <img src={FEATUREICON} alt="feature-icons" height={20} style={{ marginRight: "10px" }} />
          Reassuring meditation sessions
        </div>
        <div>
          <img src={FEATUREICON} alt="feature-icons" height={20} style={{ marginRight: "10px" }} />
          Connection to Apple watch
        </div>
        <div>
          <img src={FEATUREICON} alt="feature-icons" height={20} style={{ marginRight: "10px" }} />
          Heart rate measurement during sessions
        </div>
        <div>
          <img src={FEATUREICON} alt="feature-icons" height={20} style={{ marginRight: "10px" }} />
          Personal goals to improve your anxiety
        </div>
      </div>
    </div>
  </div>

)

export default MainFeatures
