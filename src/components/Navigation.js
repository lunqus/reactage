import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {

    return (

        <header className="masthead mb-auto">
            <div className="inner">
                <h3 className="masthead-brand">VIZZY</h3>

                <nav className="nav nav-masthead justify-content-center">

                    <NavLink to="/">
                        <a className="nav-link" href="/">Home</a>
                    </NavLink>

                    <NavLink to="/products">
                        <a className="nav-link" href="/">Products</a>
                    </NavLink>

                    <NavLink to="/templates">
                        <a className="nav-link" href="/">Templates</a>
                    </NavLink>

                    <NavLink to="/pricing">
                        <a className="nav-link" href="/">Pricing</a>
                    </NavLink>

                </nav>

            </div>
        </header>

    );

}

export default Navigation;