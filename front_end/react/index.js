
//IMPORTANDO REACT
import React from 'react';
import ReactDOM from 'react-dom';

const h1 = <h1>Hello world</h1>;

let myArticle = <article></article>

const p1 = <p id='large'>foo</p>
const p2 = <p id='small'>bar</p>

let myDv = (<div><h1>Hello world</h1></div>)
//Or
let myDiv = (
    <div>
        <h1>Hello world</h1>
    </div>);

//Quando tiver elementos iguais dentro do jsx, coloque um Div por cima
const paragraphs = (
    <div>
        <p>I am a paragraph.</p>
        <p>I, too, am a paragraph.</p>
    </div>
);

//RENDERIZAR JSX
ReactDOM.render(<h1>Hello world</h1>,
    document.getElementById('app'));