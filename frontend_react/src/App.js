import React from "react";


import { LandingPage, Shop } from "./Pages";
import {MediaBar} from "./components"
import {makeStyles} from "@material-ui/styles";
import {Header} from "./container"
import {Route, Link } from 'react-router-dom';

import './App.css';
const  App = () => {
    return(
        <div>
            <MediaBar />
            <Header />
            <LandingPage />
            <Shop />
            
        </div>
    )
}
export default App;