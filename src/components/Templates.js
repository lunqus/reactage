import React from "react";
import TemplatesData from "../json/templatesData.json";

const Templates = () => {

    return (

        <main role="main" className="inner cover">

            {TemplatesData.map((json, index) => {
                return <h1 className="cover-heading">{json.h1}</h1>
            })}

        </main>

    );
};

export default Templates;