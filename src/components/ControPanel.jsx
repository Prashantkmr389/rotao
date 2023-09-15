// Canvas.js
import React, {useState} from 'react';


import Draggable from 'react-draggable'; // You can use a draggable library like 'react-draggable'
import ButtonComponent from './Button';
import InputComponent from './InputComponent';
import DropdownComponent from './Dropdown';
import TableComponent from './TableComponent';

function ControlPanel({ addComponent, components }) {
  function onselect (params) {
    console.log('params', params)
  } 
  const [dyButtton, setDyButton] = useState(0);
  const [dxButtton, setDxButton] = useState(0);
  const [dyInput, setDyInput] = useState(0);
  const [dxInput, setDxInput] = useState(0);
  const [dyDropdown, setDyDropdown] = useState(0);
  const [dxDropdown, setDxDropdown] = useState(0);
  const [dyTable, setDyTable] = useState(0);
  const [dxTable, setDxTable] = useState(0);
  function increaseButtonPixel(){
    setDyButton((dyButtton+5)%50)
    setDxButton((dxButtton+3)%30)
  }
  function increaseInputPixel(){
    setDyInput((dyInput+5)%50)
    setDxInput((dxInput+3)%30)
  }
  function increaseDropdownPixel(){
    setDyDropdown((dyDropdown+5)%50)
    setDxDropdown((dxDropdown+3)%30)
  }
  function increaseTablePixel(){
    setDyTable((dyTable+10)%100)
    setDxTable((dxTable+5)%50)
  }
  return (
    <div className="ControlPanel"  style={{ position: 'relative', width: '100%', height: '100%' }}>
      <button className='addBtn' onClick={() => {addComponent('ButtonComponent', { x: 130+dxButtton, y: dyButtton+0 }); increaseButtonPixel()}}>Add Button</button>
      <button className='addBtn' onClick={() => {addComponent('InputComponent', { x: 200+dxInput, y: 0+dyInput }); increaseInputPixel()}}>Add Input</button>
      <button className='addBtn' onClick={() => {addComponent('DropdownComponent',  { x: 250+dxDropdown, y: 0+dyDropdown }); increaseDropdownPixel()}}>Add Dropdown</button>
      <button className='addBtn' onClick={() => {addComponent('TableComponent', { x: 410+dxTable, y: 0 +dyTable}); increaseTablePixel()}}>Add Table</button>
      {components.map((component) => (
        <Draggable key={component.id}>
          <div className={`component ${component.type.toLowerCase()}`} style={{
            position: 'absolute',
            top: component.position.x, // Set the desired Y coordinate
            left: component.position.y, // Set the desired X coordinate
          }}>
            {(() => {
            switch (component.type) {
              case 'ButtonComponent':
                return <ButtonComponent />;
              case 'InputComponent':
                return <InputComponent />;
              case 'DropdownComponent':
                return <DropdownComponent options={['Option 1', 'Option 2', 'Option 3', 'Option 4']} onSelect={onselect}/>;
              case 'TableComponent':
                return <TableComponent />;
              default:
                return null; // Or handle unknown types as needed
            }
          })()}
          </div>
        </Draggable>
      ))}
    </div>
  );
}

export default ControlPanel;
