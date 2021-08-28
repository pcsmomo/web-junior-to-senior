import React, { useState } from 'react';
import './App.css';

import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {
  const [route, setRoute] = useState('page1');

  const onRouteChange = (route) => {
    setRoute(route);
  };

  if (route === 'page1') {
    return <Page1 onRouteChange={onRouteChange} />;
  } else if (route === 'page2') {
    return <Page2 onRouteChange={onRouteChange} />;
  } else if (route === 'page3') {
    return <Page3 onRouteChange={onRouteChange} />;
  }
}

export default App;
