import React from 'react'
import { projectData } from '../../../data/projects'
import ProjectCard from '../../projectCard'
import Separator from '../../seperator/separator'
import './projects.css'

function Projects() {
    const projects=projectData
    return (
        <div className='projects'>
            <Separator/>
            <label className='section-title'>Projects</label>
            <div>
            {projects.map(project=>{
                return <ProjectCard project={project}/>
            })}
            </div>
            
            
                        
        </div>
    )
}

export default Projects
