import "./style.scss"
import KARIN from '../../../resources/images/karin.png'
import HERBERT from '../../../resources/images/herbert.png'

const AboutLeadership = () => (
    <div className="about-leadership flex flex-column">
      <p>Leadership</p>
      <div className="about-leadership-items flex">
        <div className="about-leadership-items-photo flex-column">
          <img src={HERBERT} alt="Herbert" style={{borderRadius: '50%'}}/>
          <div className="about-leadership-items-photo-name">
            Herbert
          </div>
          <div className="about-leadership-items-photo-job">
            CEO & Co-founder
          </div>
        </div>
        <div className="about-leadership-items-photo flex-column">
          <img src={KARIN} alt="Karin" style={{borderRadius: '50%'}} />
          <div className="about-leadership-items-photo-name">
            Karin Stephan
          </div>
          <div className="about-leadership-items-photo-job">
            COO & Co-founder
          </div>
        </div>
      </div>
    </div>

)

export default AboutLeadership
