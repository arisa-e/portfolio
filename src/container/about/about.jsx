import React from 'react'
import "./about.scss" 
import { motion } from "framer-motion"
import { images } from '../../constants'
import { AppWrapper } from "../../wrapper"

const about=[
  {title: "Web Development", description:"I'm Good at creating responsive websites with react ", imgUrl: images.reactjs },
  {title:"Web Design", description:"Able to work with different frameworks to make your web experience amazing ", imgUrl: images.design},
  {title:"UI/UX", description:"i understand how figma works ", imgUrl: images.figma},
  {title:"Web Animation", description:"having motion framer as my friend which i'm using in this website ", imgUrl: images.design2}
]

const About = () => {
  return (
    <div className='app__about'>
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
          <img src={about.imgUrl} alt={about.title} />
          <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop:10}}>{about.description}</p>
        </motion.div>
        )}
      </div>      
    </div>
  )
}

export default AppWrapper(About, "about")