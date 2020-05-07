import  React from 'react';
import ReactDom from 'react-dom';
import './style.css';
import App from './container/app';
import { createStore } from 'redux';
import comment from './reducer/commentReducer';



const initalState = () => {
    let state = localStorage.getItem('state');
    if(state) {
        return JSON.parse(state)
    } else {
        localStorage.setItem('state', JSON.stringify([]))
        return []
    }
}


const store = createStore(comment, initalState());

ReactDom.render(<App store = {store} />, document.getElementById('root'));