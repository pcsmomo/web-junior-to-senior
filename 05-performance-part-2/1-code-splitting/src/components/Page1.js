import React from 'react';

const Page1 = ({ onRouteChange }) => (
  <div className="App">
    <header className="App-header">
      <p>This is Page1</p>
    </header>
    <button className="disabled">Page1</button>
    <button onClick={() => onRouteChange('page2')}>Page2</button>
    <button onClick={() => onRouteChange('page3')}>Page3</button>
  </div>
);

export default Page1;
