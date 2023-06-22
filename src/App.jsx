import './App.css';
import React, { useState } from 'react';
import NewBox from './components/NewBox';
import DisplayBoxes from './components/DisplayBoxes';
function App() {
  const [ boxes, setBoxes ] = useState([])

  return (
    <div className="App">
      <NewBox boxes={ boxes } setBoxes={ setBoxes } />
      <DisplayBoxes boxes={ boxes } />
    </div>
  );
}

export default App;