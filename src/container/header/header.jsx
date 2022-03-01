import React from 'react'
import "./header.scss"
import { motion } from "framer-motion"
import { images } from "../../constants"
import { AppWrapper } from '../../wrapper'

const scaleVariants={
  whileInView:{
    scale:[0, 1],
    opacity:[0, 1],
    transition:{
      duration:1,
      ease:"easeInOut"
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
      whileInView={{x:[-100, 0], opacity:[0, 1]}}
      transition={{duration: 0.5}}
      className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cap app__flex">
            <div style={{marginLeft: 20}}>
              <p className="p-text">Hello I'm</p>
              <h1 className="head-text">ARISA</h1>
            </div>
          </div>
          <div className="tag-cap app__flex">
            <p className="p-text">Freelancerr</p>
            <p className="p-text">Software Engineer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
       whileInView={{ opacity:[0, 1]}}
       transition={{duration: 0.5, delayChildren: 0.5}}
       className="app__header-img"
      >
        <img src={images.arisa} alt="arisa" />
      </motion.div>
      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      >
        {[images.redux, images.reactIcon, images.sass].map((circle, index)=>(
        <div className='circle-cmp app_flex' key={`circle-${index}`}>
          <img src={circle} alt="circle" />
        </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrapper(Header, "home")