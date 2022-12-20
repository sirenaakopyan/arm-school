import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index.js';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default App;
