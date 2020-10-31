import React from 'react'
import Container from '../components/Container/Container'
import Project from '../components/Project/Project';

function Portfolio() {
    const label = "Portfolio"
    const content = <Project />
    return (
        <div>
            <Container containerLabel = {label} innerContent = {content}/>
        </div>
    )
}

export default Portfolio
