import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Products from "./components/Products";
import Templates from "./components/Templates";
import Pricing from "./components/Pricing";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (

        <BrowserRouter>

            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

                <Navigation />

                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/products" component={Products}/>
                    <Route path="/templates" component={Templates}/>
                    <Route path="/pricing" component={Pricing}/>
                    <Route component={Home}/>
                </Switch>

                <Footer />

            </div>

        </BrowserRouter>


    );
  }
}



export default App;
