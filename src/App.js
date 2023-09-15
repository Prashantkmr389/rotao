// App.js
import React, { useState , useEffect} from 'react';

import Canvas from './components/Canvas';
import ControlPanel from './components/ControPanel';
// import css from home

function App() {
  const [components, setComponents] = useState([]);
  
  // Function to add a new component to the canvas
  const addComponent = (type, position) => {
    // Generate a unique key for each component
    const id = new Date().getTime().toString();
    setComponents([...components, { id, type, position}]);
    
  };

  return (
    <>
      <div className="Header">
        <h1>Zenskar App Builder</h1>
      </div>
      <div className="Screen">
        <Canvas components={components} />
        <ControlPanel addComponent={addComponent} components={components} />
      </div>
    </>
  );
}


export default App;
