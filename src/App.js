import React, { useState } from 'react';

import './App.css';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="app">
      <button className="action" onClick={() => setIsExpanded(!isExpanded)}>{`click to ${isExpanded ? 'hide' : 'show'} text`}</button>
      {isExpanded && <p className="text">Rock <b>music</b> is a broad genre of popular <b>music</b> that originated...</p>}
    </div>
  );
}

export default App;
