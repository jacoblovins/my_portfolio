import React from 'react';
import './projectCard.css';

function ProjectCard(props) {
    const {deployLink, imageLink, name, gitLink} = props.content
    return (
        <div className="col-md-6">
            <a href={deployLink}>
                <img src={imageLink} alt={name}/>
                <p>{name}</p>
            </a>
            <a className="gitLink" href={gitLink}>GitHub Repo</a>
        </div>
    )
}

export default ProjectCard
