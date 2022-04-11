import React from "react";

import {About ,Affiliations, Footer, Header, Highlights, Newsletter, Mediabar} from './container'
import { Navbar } from "./components";
import {makeStyles} from "@material-ui/styles";

import {Route, Link } from 'react-router-dom';

import './App.css';
const  App = () => {
    return(
        <div>
            <Mediabar />
            <Navbar />
            <Header />
            <About />
            <Highlights />
            <Affiliations />
            <Newsletter />
            <Footer />
            
        </div>
    )
}
export default App;