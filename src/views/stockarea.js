import html from './stockarea.html';
import './stockarea.css';
import { resolve } from 'path';
import widget_js from '!!raw-loader!./searchWarehouse.js';


let elements = [];
let body;




export function display() {
    // convert plain HTML string into DOM elements
    
    let temporary = document.createElement('div');
    temporary.innerHTML = html;
    
    let script = document.createElement('script');
    script.innerHTML = widget_js;
   
 
    // append elements to body
    body = document.getElementsByTagName('body')[0];
    body.appendChild(temporary);
    body.appendChild(script)
    
    
    
}

export function close() {
    while (elements.length > 0) {
        elements.pop().remove();
    }
    body.removeEventListener('click', close);
}

