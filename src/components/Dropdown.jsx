
import React, { useState } from 'react';

const DropdownComponent = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    console.log('toggleDropdown')
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([ option]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    }
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="multi-select-dropdown">
    {selectedOptions.length > 0
          ? selectedOptions.join(', ')
      : 'Select option'}
      <button className="dropdown-toggle" onClick={toggleDropdown}>
  
      <i className={`fas fa-caret-up dropdown-arrow ${isOpen ? 'open' : ''}`}></i>
</button>

      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li
              key={option}
              className={`dropdown-option ${
                selectedOptions.includes(option) ? 'selected' : ''
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownComponent;
