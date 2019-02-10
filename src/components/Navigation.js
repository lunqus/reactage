import React from 'react';
import NavData from '../json/navData.json'
import {NavLink} from "react-router-dom";
import FooterData from "../json/footerData";

const Navigation = () => {

    return (

        <header className="masthead mb-auto">
            <div className="inner">
                <h3 className="masthead-brand">VIZZY</h3>

                <nav className="nav nav-masthead justify-content-center">

                    {NavData.map((json, index) => {
                        return <NavLink to={json.goto}> <a className="nav-link" href="/">{json.meniu}</a> </NavLink>
                    })}

                </nav>

            </div>
        </header>

    );

}

export default Navigation;