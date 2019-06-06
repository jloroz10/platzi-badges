// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);


import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

const container = document.getElementById('app');


// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge firstName="Jose" 
                       lastName="Orozco" 
                       jobTitle="Fronend Enginee" 
                       twitter="jloroz10"
                       footerMsg="#platziconf"
                       avatarUrl="https://www.gravatar.com/avatar/1b11e78f239b7ccf5b9071ff6f4f87ff"/>, container);
