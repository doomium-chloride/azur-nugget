import React from 'react';
import Build from './Build';
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './NavBar';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Route path = "/build" component = {Build} />
      </div>
    </BrowserRouter>
  );
}


export default App;
