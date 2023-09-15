// Canvas.js
import React from 'react';

import Draggable from 'react-draggable'; // You can use a draggable library like 'react-draggable'
import ButtonComponent from './Button';
import InputComponent from './InputComponent';
import DropdownComponent from './Dropdown';
import TableComponent from './TableComponent';

function ControlPanel({ addComponent, components }) {
  function onselect (params) {
    console.log('params', params)
  } 
  return (
    <div className="ControlPanel"  style={{ position: 'relative', width: '100%', height: '100%' }}>
      <button className='addBtn' onClick={() => addComponent('ButtonComponent', { x: 130, y: 0 })}>Add Button</button>
      <button className='addBtn' onClick={() => addComponent('InputComponent', { x: 200, y: 0 })}>Add Input</button>
      <button className='addBtn' onClick={() => addComponent('DropdownComponent',  { x: 250, y: 0 })}>Add Dropdown</button>
      <button className='addBtn' onClick={() => addComponent('TableComponent', { x: 410, y: 0 })}>Add Table</button>
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
