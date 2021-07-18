import React from 'react';
import './App.css';

// Importing Components
import Increment from './components/increment';
import Decrement from './components/decrement';
import Count from './components/displayCount';

function App() {
  return (
    <div className="App">
      <Increment />
      <Count />
      <Decrement />
    </div>
  );
}

export default App;
