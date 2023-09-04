import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes/Routes';

function App() {
  return (
    <Router>
      <Routes/>
    </Router>
  );
}

export default App;
