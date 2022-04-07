import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
//import { theme } from "./theme"


import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
{/* <ThemeProvider theme ={theme}>
    
</ThemeProvider> */}
<App />
</BrowserRouter>,
document.getElementById('root')
);


