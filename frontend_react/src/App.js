import React from "react";

import {About ,Affiliations, Footer, Header, Highlights} from './container'
import { Navbar } from "./components";

import './App.css';
const App = () => {
    return(
        <div className="App">
            <Navbar />
            <Header />
            <About />
            <Highlights />
            <Affiliations />
            <Footer />
            
        </div>
    )
}
export default App;