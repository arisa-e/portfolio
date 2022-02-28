import React, { useState } from 'react'
import "./footer.scss"
import { images } from "../../constants"
import { AppWrapper } from "../../wrapper"
import { client } from "../../client"

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
      <h2 className="head-text">We are ready when you are </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="" />
          <a href="maiito:emmanuelarisa7@gma.com" className='p-text'>emmanuelarisa7@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.phone} alt="" />
          <a href="tel :+254729928428" className='p-text'>+254729928428</a>
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
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </div>
  )
}

export default AppWrapper(Footer, "contact")