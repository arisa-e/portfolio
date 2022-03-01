// import React, { useEffect, useState } from 'react'
import "./skills.scss"
import { AppWrapper } from "../../wrapper"
import { images } from "../../constants"
import { motion } from 'framer-motion'


const skillss=[
  { title:"React", imgUrl: images.reactIcon},
  { title:"Scss", imgUrl: images.sass},
  { title:"Redux", imgUrl: images.redux},
  { title:"Figma", imgUrl: images.figmaIcon},
  { title:"git", imgUrl: images.git},
  { title:"typescript", imgUrl: images.typescript},
  { title:"javascript", imgUrl: images.javascript},
  { title:"html", imgUrl: images.html},
  { title:"css", imgUrl: images.css}
]

const Skills = () => {

  return (
    <div className="app__skills">
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        {skillss.map((skill, index)=>(
          <motion.div
            className="skills"
            key={skill.title + index}
          >
            <img src={skill.imgUrl} alt=""/>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default AppWrapper(Skills, "skills")