import "./footer.scss"
import { SiMinutemailer } from "react-icons/si"
import { FcPhone } from "react-icons/fc"
import { ImLocation } from "react-icons/im"
import { FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa"
const Footer = () => {

  return (
    <div className='app__footer' id="contact">
      <div className="app__footer-cards app__flex">
        <div className="app__footer-card">
          <div className="app__icons">
            <SiMinutemailer size={40}/>
          </div>
          <a href="maiito:emmanuelarisa7@gma.com" className='p-text'>emmanuelarisa7@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <div className="app__icons">
            <FcPhone size={40}/>
          </div>
          <a href="tel :+254729928428" className='p-text'>+254729928428</a>
        </div>
        <div className="app__footer-card">
          <div className="app__icons">
            <ImLocation size={40}/>
          </div>
          <a href="location : Niarobi Kenya" className='p-text'>Niarobi<br/> Kenya</a>
        </div>
        
      </div>
      <div className="column"> 
           <h3 className="title">Living, learning, &amp; leveling up one day at a time.</h3>
       </div>
        <div className="socialIcons" >
              <a href="https://github.com/arisa-e" >
                <span class="icon is-small">
                  <FaGithub style={{color:"black"}} size={25}/>
                </span>
              </a>
              <a href="https://www.linkedin.com/in/emmanuel-arisa-01103b148/" >
                <span class="icon is-small">
                  <FaLinkedinIn style={{color:"#1689f5"}} size={25}/>
                </span>
              </a>
              <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=emmanuelarisa7@gmail.com" >
                <span class="icon is-small">
                  <FaEnvelope style={{color:"#f14850"}} size={25}/>
                </span>
              </a>
        </div>
        <div className="copyright">
          <p>©{(new Date()).getFullYear()}</p>
        </div>
    </div>
  )
}

export default Footer