import React from "react";


import { LandingPage, Shop } from "./Pages";
import {makeStyles} from "@material-ui/styles";

import {Route, Link } from 'react-router-dom';

import './App.css';
const  App = () => {
    return(
        <div>
            <LandingPage />
            <Shop />
            
        </div>
    )
}
export default App;