import React from "react";

const Home = () => {

    return (
        <div>

            <main role="main" className="inner cover">
                <h1 className="cover-heading">Create Stunning Visual Media</h1>
                <p className="lead">Super simple tool to create trendy videos and pictures <br />  for your ads, social media, blogs and websites.<br />
                    Make your project stand out!</p>
                <p className="lead">
                    <a href="#popup1" className="btn btn-lg btn-secondary">Create Design &nbsp;<i className="fas fa-arrow-right"></i></a>
                </p>
            </main>
            <div id="popup1" className="overlay">
                <div className="popup">
                    <h2>Photoshop can fix anything</h2>
                    <a className="close" href="#">&times;</a>
                    <div className="content">
                        Creative process is started ... work begins ...
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;