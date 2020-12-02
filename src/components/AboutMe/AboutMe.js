import React from 'react'
import './aboutMe.css'

function AboutMe() {
    return (
        <section className="row">
            <div className="col-md-12">
                <img id="aboutMePic" src="images/me.jpg" alt="Jacob Lovins"/>
                <p>Hi! I'm Jacob Lovins and I'm a React developer with creative problem solving experience educated at Georgia Tech, focused on full stack web technologies. I have developed skills in JavaScript, Node.js, Express.js, React.js, MySQL, MongoDB, HTML, CSS, Tensorflow.js and ML5. My strengths include communication, organization, discipline, leadership, following documentation and protocol, and collaboration. I’ve led teams on many projects and have experience in servers and handling multiple internet devices. My latest team projects include facial expression recognition, 3D rendering for an interactive, virtual reality web app, and building a neural network to maintain a sterile environment in the healthcare industry.</p>  
                <p>I’m fascinated by the design and use of neural networks inside the browser and learning the newest and most interesting technologies in the tech field. I love sorting through problems and finding unique solutions. I’m excited to build projects with new and innovative technologies and to be in an environment that has great developers that challenge me to become the best I can be.</p>
            </div>
        </section>
    )
}

export default AboutMe
