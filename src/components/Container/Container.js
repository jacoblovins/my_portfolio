import React from 'react';
import './container.css';
import Links from '../Links/Links'

function Container(props) {
    return (
        <main id="maincontent" className="container">
            <section className="row">
                <div className="col-md-12">
                    <h1>{props.containerLabel}</h1>
                    {props.innerContent}
                </div>
            </section>
            <Links />
        </main>
    )
}

export default Container
