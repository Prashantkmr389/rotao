// Canvas.js
import React from 'react';

function Canvas({showGrid}) {
  

  return (
    <div className="Canvas">
      {showGrid && (
        <div className="grid-container">
          {/* Render the grid of dots */}
          {Array.from({ length: 100 }, (_, row) => (
            Array.from({ length: 100 }, (_, col) => (
              <div
                key={`dot-${row}-${col}`}
                className="grid-dot"
                style={{ top: `${row * 2}%`, left: `${col * 2}%` }}
              />
            ))
          )
        )}
        </div>
      )}
    </div>
  );
}

export default Canvas;
