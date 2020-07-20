import React from 'react';
import './App.css';
import {route} from 'react-router-dom';
import home from './component/home.js';
import category from './component/category.js';
import products from './component/products.js';
import AdminArea from './component/AdminArea.js';



function App() {
  return (
   <>
      <route path="/home"component={ home}/>
      <route path="/category"component={category }/>
      <route path="/products"component={products }/>
      <route path="/AdminArea"component={AdminArea }/>
  
   <h1> welcome admin </h1>
   
   </>
  );
}

export default App;
