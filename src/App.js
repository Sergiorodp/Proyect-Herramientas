import React from 'react';
import './App.css';

import Card from './components/container-cards/container-card'
import Datarender from './components/data/data'

import{ Route } from 'wouter'


function App() {
  return (
    <div className="App">
      <section className="App-content col-md-10 offset-md-1">
        <Route path="/Proyect-Herramientas/sensor/:key" component = {Card} />
        <Route path = '/Proyect-Herramientas/' component = {Datarender}/>
      </section>
    </div>
  );
}

export default App;
