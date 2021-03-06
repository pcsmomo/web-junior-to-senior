import React from 'react';

const Page2 = ({ onRouteChange }) => (
  <div className="App">
    <header className="App-header">
      <p>This is Page2</p>
    </header>
    <button onClick={() => onRouteChange('page1')}>Page1</button>
    <button className="disabled">Page2</button>
    <button onClick={() => onRouteChange('page3')}>Page3</button>
  </div>
);

export default Page2;
