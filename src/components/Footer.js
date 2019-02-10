import React from 'react';
import FooterData from '../json/footerData.json';

const Footer = () => {

    return (

        <footer className="mastfoot mt-auto">
            <div className="inner">

                {FooterData.map((json, index) => {
                    return <p>{json.p} <a href={json.link}>{json.a}</a>, by <a href={json.link}>{json.by}</a>.</p>
                })}

            </div>
        </footer>

    );

}

export default Footer;