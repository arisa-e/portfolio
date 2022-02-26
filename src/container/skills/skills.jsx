import React, { useEffect, useState } from 'react'
import "./skills.scss"
import { AppWrapper } from "../../wrapper"
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'

const Skills = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query =`*[_type == "skills"]`
    client.fetch(query)
    .then((data)=> setSkills(data))
  }, [])
  
  return (
    <div className='app__skills'>
      <motion.div
      whileInView={{x:[-100, 0], opacity:[0, 1]}}
      transition={{duration: 0.5}}
      >
        <h2 className="head-text">Skills</h2>
        <div className="app__skills-container">
          <motion.div
          className="app__skills-list"
          >
            {skills.map((skill)=>
              <motion.div
              whileInView={{opacity:[0, 1]}}
              transition={{duration: 0.5}}
              className="app__skills-item app__flex"
              key={skill.name}
              >
                <div className="app_flex" style={{backgroundColor: skill.bgColor}}>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default AppWrapper(Skills, "skills")