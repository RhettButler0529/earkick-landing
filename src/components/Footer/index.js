import { Link } from "react-router-dom"
import "./style.scss"

import ROUTERS from "constants/Routers"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className='main-footer-social'>
          <a href={"https://www.facebook.com/groups/earkickgroup/"}><FontAwesomeIcon icon={faFacebookF} color={'#444444'}/></a>
          <a href={"https://twitter.com/earkickapp"}><FontAwesomeIcon icon={faTwitter} color={'#444444'}/></a>
          <a href={"https://www.instagram.com/earkick_anxiety_companion/"}><FontAwesomeIcon icon={faInstagram} color={'#444444'}/></a>
        </div>
        <div className='main-footer-made'>
          Made with <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#E11661"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> in Switzerland
        </div>
        <div className="main-footer-service flex">
          <Link to={ROUTERS.PRIVACYPOLICY}>Privacy Policy</Link>
          |
          <Link to={"/"}>Terms</Link>
        </div>
      </div>
    </>
  )
}

export default Footer
