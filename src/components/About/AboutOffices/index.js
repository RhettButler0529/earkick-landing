import "./style.scss"
import OFFICES from '../../../resources/images/offices.png'

const AboutOffices = () => (
    <div className="about-offices flex flex-column">
      <p>Offices</p>
      <div className="about-offices-items flex">
        <div className="about-offices-items-photo flex-column">
          <div className="about-offices-items-photo-comment">
            We’re currently operating out of <br/>the US and Switzerland
          </div>
          <img src={OFFICES} alt="offices" />
        </div>
      </div>
    </div>

)

export default AboutOffices
