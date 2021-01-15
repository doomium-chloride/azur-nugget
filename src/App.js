import React from 'react';
import Build from './pages/build/Build';
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './NavBar';
import Juustagram from './pages/juust/Juustagram';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Route path = "/build" component = {Build} />
        <Route path = "/juustagram" component = {Juustagram} />
      </div>
    </BrowserRouter>
  );
}


export default App;
