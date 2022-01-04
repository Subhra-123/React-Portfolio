import React from 'react'
import { skillsData } from '../../../data/skills'
import Separator from '../../seperator/separator'
import SkillCard from './skill-card';
import './skills.css'

function Skills() {
    const skills=skillsData;
    return (
        <div className='skills'>
            <Separator/>
            <div className='skills-container'>
            {skills.map(skill=>{
                    return(
                        <div className='skills-section'>
                            <label className='skills-section-title'>
                                {skill.type}
                            </label>
                            <div className='skills-list'>
                                {skill.list.map(el=>{
                                    return(
                                        <SkillCard skill={el}/>)
                                }
                                    

                                    )}
                                </div>
                            </div>
                    )
                })}
            </div>
           
        </div>
    )
}

export default Skills
