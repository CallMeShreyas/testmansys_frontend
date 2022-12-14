import React from 'react'
import { Link } from "react-router-dom"


const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> {props.navbar_title} </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/login/student">Student Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/login/staff">Staff Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/signup">Signup</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li> */}
                            {props.about}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Header.defaultProps = {
    navbar_title: "Online Examination Management System",
    about:
        <div>
            <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
            </li>
        </div>
}

export default Header
