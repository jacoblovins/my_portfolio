import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header className="fixed-top">
            <nav className="navbar navbar-expand-md navbar-light bg-black">
                <Link to="/" id="yourname">Jacob Lovins</Link>

                {/* <!-- Collapsible links and hamburger button in header --> */}
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span><img src="images/pngbarn.png" alt="menu"/></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link to="/">About</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
