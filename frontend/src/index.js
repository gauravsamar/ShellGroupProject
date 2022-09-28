import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// // import Footprint from './components/FootprintCalc/Footprint';
import Dashboard from './components/Dashboard';
import LineGraph from './components/Graph';
import LoggedInNavbar from './components/LoggedInNavbar';
// import Userfetchsample from './components/Userfetchsample';
import 'bootstrap/dist/css/bootstrap.min.css';
import Transport from './components/FootprintCalc/Transport';
import Domestic from './components/FootprintCalc/Domestic';
import About from './components/About';
import Goals from './components/Goals';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LineGraph/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
