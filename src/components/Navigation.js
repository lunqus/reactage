import React from 'react';
import NavData from '../json/navData.json'
import {NavLink} from "react-router-dom";

const Navigation = () => {

    return (

        <header className="masthead mb-auto">
            <div className="inner row">


                <nav className="nav nav-masthead justify-content-center">

                    <div className="logo">
                        <a href="#"><img src="../images/logo.svg" alt="vizzy"/></a>
                    </div>

                    {NavData.map((json, index) => {
                        return <NavLink to={json.goto}> <a className="nav-link" href="/">{json.meniu}</a> </NavLink>
                    })}

                    <div className="buttons">
                        <button type="button" className="btn btn-primary">sign in</button>
                        <button type="button" className="btn btn-primary">sign up</button>
                    </div>

                </nav>


            </div>
        </header>

    );

}

export default Navigation;