// App.js
import React, { useState , useEffect} from 'react';

import Canvas from './components/Canvas';
import ControlPanel from './components/ControPanel';
// import css from home

function App() {
  const [components, setComponents] = useState([]);
  useEffect(()=>{
    const data = localStorage.getItem('components');
    const positiondata = localStorage.getItem("componentPositions");

    if(data && positiondata){
      const components = JSON.parse(data);
      const positions = JSON.parse(positiondata);
     
      for(let i=0; i<components.length; i++){
        if(!positions[components[i].id]) continue;
        components[i].x = positions[components[i].id].x;
        components[i].y = positions[components[i].id].y;
      }
      setComponents(components);
    }
  }, [components])

  // Function to add a new component to the canvas
  const addComponent = (type, position) => {
    // Generate a unique key for each component
    const id = new Date().getTime().toString();
    localStorage.setItem(
      "components",
      JSON.stringify([...components, { id, type, position, x: 0, y: 0 }])
    );
    setComponents([...components, { id, type, position, x:0, y:0}]);
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
