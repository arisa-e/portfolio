import React, { useState,useEffect } from 'react'
import "./about.scss" 
import { motion } from "framer-motion"
import { AppWrapper } from "../../wrapper"
import { urlFor, client } from '../../client'


const About = () => {

  const [about, setAbout] = useState([])

  useEffect(() => {
    const query =`*[_type == "about"]`
    client.fetch(query)
    .then((data)=> setAbout(data))
  }, [])
  


  return (
    <div className='app__about'>
      <motion.div
       whileInView={{x:[-100, 0], opacity:[0, 1]}}
       transition={{duration: 0.5}}
      >
    <h2 className='head-text'>You <span>Think</span> It
      <br />
      I <span>Design</span> it
      </h2>

      <div className="app__profile">
        {about.map((about, index)=>
        <motion.div
        whileInView={{opacity: 1}}
        whileHover={{scale:1.1}}
        transition={{duration:0.5, type:"tween"}}
        className="app__profile-item"
        key={about.title + index}
        >
          <img src={urlFor(about.imgUrl)} alt={about.title} />
          <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop:10}}>{about.description}</p>
        </motion.div>
        )}
      </div> 
      </motion.div>     
    </div>
  )
}

export default AppWrapper(About, "about")