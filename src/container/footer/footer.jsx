import React, { useState } from 'react'
import "./footer.scss"
import { client } from "../../client"
import { motion } from "framer-motion" 
import { AppWrapper } from "../../wrapper"
import { SiMinutemailer } from "react-icons/si"
import { FcPhone } from "react-icons/fc"
import { ImLocation } from "react-icons/im"
import { FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa"
const Footer = () => {

  const [formData, setFormData] = useState({name:"", email:"", message:""})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const{name, email, message}=formData
  // being able to distructure 

  const handleChangeInput=(e)=>{
    const{ name, value }=e.target

    setFormData({...formData, [name] :value })
  }

  const handleSubmit=()=>{
    setLoading(true)
  }
  
  const contact ={
    _type:"conact",
    name:name,
    email:email,
    message:message
  }

  client.create(contact)
  .then(()=>{
    setLoading(false)
    setIsFormSubmitted(true)
  })



  return (
    <div className='app__footer'>
      <motion.div
       whileInView={{x:[-100, 0], opacity:[0, 1]}}
       transition={{duration: 0.5}}
      >
      <h2 className="head-text">I'm ready when you are </h2>

      <div className="app__footer-cards">
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

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        // <div>
        //   <h3 className="head-text">
        //     Thank you for getting in touch!
        //   </h3>
        // </div>
         <div className="column"> 
              <h3 className="title">Living, learning, &amp; leveling up one day at a time.</h3>
          </div>
      )}
        <div className="socialIcons" >
              <a href="https://github.com/arisa-e" ><span class="icon is-small"><FaGithub size={30}/></span></a>
              <a href="https://www.linkedin.com/in/emmanuel-arisa-01103b148/" ><span class="icon is-small"><FaLinkedinIn size={30}/></span></a>
              <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=emmanuelarisa7@gmail.com" ><span class="icon is-small"><FaEnvelope size={30}/></span></a>
        </div>
          <p>Copyright © 2019 Arisa. All rights reserved</p>
      </motion.div>
    </div>
  )
}

export default AppWrapper(Footer, "contact")