import React from "react";
import HomeData from "../json/homeData.json";

const Home = () => {

    return (

        <div>
            {HomeData.map((json, index) => {
                return (
                <div>

                    <main role="main" className="inner cover">
                        <h1 className="cover-heading">{json.h1}</h1>
                        <p className="lead">{json.p}</p>
                        <p className="lead">
                            <a href="#popup1" className="btn btn-lg btn-secondary">{json.button}<i className="fas fa-arrow-right"></i></a>
                        </p>
                    </main>
                    <div id="popup1" className="overlay">
                        <div className="popup">
                            <h2>{json.h2}</h2>
                            <a className="close" href="#">&times;</a>
                            <div className="content">
                                {json.content}
                            </div>
                        </div>
                    </div>

                </div>
                )
            })}

        </div>
    );
};

export default Home;