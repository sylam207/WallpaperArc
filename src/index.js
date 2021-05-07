import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom'
import Main from './Components/Main'

  
ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));



