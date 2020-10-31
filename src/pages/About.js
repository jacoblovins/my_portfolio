import React from 'react'
import Container from '../components/Container/Container'
import AboutMe from '../components/AboutMe/AboutMe'

function About() {
    const label = "About Me"
    const content = <AboutMe />
    return (
        <div>
            <Container containerLabel = {label} innerContent = {content}/>
        </div>
    )
}

export default About
