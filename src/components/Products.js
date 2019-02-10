import React, {Component} from 'react';
import ProductsData from "../json/productsData.json";

const Products = () => {

    return (

        <main role="main" className="inner cover">
            {ProductsData.map((json, index) => {
                return <h1 className="cover-heading">{json.h1}</h1>
            })}
        </main>

    );
};

export default Products;