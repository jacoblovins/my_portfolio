import React from 'react';
import './links.css';

function Links() {
    return (
        <section className="container" id="socialMedia">
            <div className="row" id="socialRow">
                <div className="col-md-3" id="gitHub">
                    <a href="https://github.com/jacoblovins" target="_blank" rel="noopener noreferrer" >
                        <img src="images/icons8-github-60.png" alt="gitHub logo"/>
                    </a>
                </div>
                <div className="col-md-3" id="linkedIn">
                    <a href="https://www.linkedin.com/in/jacob-lovins-1970767a/" target="_blank" rel="noopener noreferrer" >
                        <img src="images/icons8-linkedin-60.png" alt="linkedIn logo"/>
                    </a>
                </div>
                <div className="col-md-3" id="facebook">
                    <a href="https://www.facebook.com/jacob.lovins.9" target="_blank" rel="noopener noreferrer" >
                        <img src="images/icons8-facebook-60.png" alt="Facebook logo"/>
                    </a>
                </div>
                <div className="col-md-3" id="resume">
                    <a href="images/resume.pdf" target="_blank">
                        <img src="images/icons8-resume-60.png" alt="Resume logo"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Links
