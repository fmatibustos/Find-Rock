import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/* 





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  

//Onda la estructura basica de react para escribir es asi en estos pasos: 
/* let elemento = <p> Hola desde JSX </p>
let container = document.getElementById("root");
ReactDOM.render(elemento,container); */

/* let nombre = "Mati";
let apellido = "Bustos";
let profesion = "programador";

let jsxMultiple = (
  <div>
  <h1>React</h1>
  <h3>Hola mundo, soy {nombre} {apellido} y soy el mejor {profesion} que existe. </h3>
  <p>Esto es un parrafo ah re</p>
  </div>

);

let container = document.getElementById ("root");
ReactDOM.render(jsxMultiple,container);
 

*/