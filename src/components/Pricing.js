import React from "react";
import PricingData from "../json/priceData.json";

const Pricing = () => {

    return (

        <main role="main" className="inner cover">
            {PricingData.map((json, index) => {
                return <h1 className="cover-heading">{json.h1}</h1>
            })}

        </main>

    );
};

export default Pricing;