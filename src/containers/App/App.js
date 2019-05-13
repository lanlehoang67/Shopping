import React from 'react';
import  Home  from '../../components/HomePage/Home'
import './App.css';
import { Route } from 'react-router-dom'
function App() {
  return (

   <Route path='/' component={Home}></Route>

  );
}

export default App;
