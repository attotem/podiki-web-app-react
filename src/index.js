import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Card from './Components/Card';
import liquid from './Photos/liquid.png'
import vape from './Photos/vape.png'
// import cartridge from './Photos/cartridge.png'
import disposable from './Photos/disposable.png'
import liquid_sol from './Photos/liquid _sol.png'
import diy from './Photos/diy.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <Card img={liquid_sol} title="Ситсеми нагрівання тютюну"/>
    <Card img={liquid} title="Iqos"/>
    <Card img={diy} title="GLO"/>
    <Card img={disposable} title="JOUZ"/>
    <Card img={vape} title="Павербанки та зар. станції"/>
    {/* <Card img={cartridge} title="Картриджи/Випаровувачі"/> */}
    
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
