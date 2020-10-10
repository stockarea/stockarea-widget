import html from './stockarea.html';
import './stockarea.css';
import { resolve } from 'path';


let elements = [];
let body;

export function display() {
    // convert plain HTML string into DOM elements
    
    let temporary = document.createElement('div');
    temporary.innerHTML = html;
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = resolve('./searchWarehouse.js');


    // append elements to body
    body = document.getElementsByTagName('body')[0];
    while (temporary.children.length > 0) {
        elements.push(temporary.children[0]);
        body.appendChild(temporary.children[0]);
    }
    body.appendChild(script)
    console.log(body)
    
    
}

export function close() {
    while (elements.length > 0) {
        elements.pop().remove();
    }
    body.removeEventListener('click', close);
}

