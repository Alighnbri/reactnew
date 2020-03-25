import style from '../css/main.css';
import scss from '../scss/main.scss';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import jquery from 'jquery/dist/jquery.slim.js';
//import Image from '../images/pic.jpg';
import images from '../images/React.png';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app';


//ReactDOM.render(<App />, document.getElementById('boot'));

//for load without jsx
//const mycategory = React.createElement('h1', {}, 'i love jsx');
//ReactDOM.render(mycategory, document.getElementById('boot'));

//load with just index.js
/*
const mycategory=(
    <ul>
        <li>
            Lamborghini
        </li>
    </ul>
);
*/
const myElement = <App />;

ReactDOM.render(myElement, document.getElementById('root'));

//loading local time Zone
/*
function tick() {
    const Element = (
        <div>
            <h1>wlcome,React</h1>
            <h1>It is {new Date().toLocaleTimeString()}.</h1>
        </div>
    );
    ReactDOM.render(Element, document.getElementById('root'));

}
setInterval(tick, 1000);
*/
