import React from 'react';
import logo from './logo.svg';
import Build from './Build';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path = "/build" component = {Build} />

      </div>
    </BrowserRouter>
  );
}


export default App;
