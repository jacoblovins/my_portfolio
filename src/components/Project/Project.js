import React from 'react';
import project from '../../projects.json'
import ProjectCard from '../ProjectCard/ProjectCard'

function Project() {
    return (
        <section id="portfolio-box">
            <div className="row">
                <ProjectCard content={project[0]}/>
                <ProjectCard content={project[1]}/>
            </div>
            <div className="row">
                <ProjectCard content={project[2]}/>
                <ProjectCard content={project[3]}/>
            </div>
            <div className="row">
                <ProjectCard content={project[4]}/>
                <ProjectCard content={project[5]}/>
            </div>
        </section>
    )
}

export default Project
