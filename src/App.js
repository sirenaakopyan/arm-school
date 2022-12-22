import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';

ReactDOM.render(<App />, document.getElementById('root'));


function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
