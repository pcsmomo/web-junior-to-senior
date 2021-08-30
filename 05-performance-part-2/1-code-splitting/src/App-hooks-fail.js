import React, { useState } from 'react';
import './App.css';

import Page1 from './components/Page1';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';

function App() {
  const [route, setRoute] = useState('page1');
  const [PageComponent, setPageComponent] = useState(<div></div>);

  const onRouteChange = (route) => {
    // No Code Splitting:
    // setRoute(route);
    // No Code Splitting:
    setRoute(route);
    if (route === 'page1') {
    } else if (route === 'page2') {
      import('./components/Page2').then((page2) => {
        console.log(page2);
        setPageComponent(page2.default);
      });
    } else if (route === 'page3') {
      import('./components/Page3').then((page3) => {
        setPageComponent(page3.default);
      });
    }
  };

  // if (route === 'page1') {
  //   return <Page1 onRouteChange={onRouteChange} />;
  // } else if (route === 'page2') {
  //   return <Page2 onRouteChange={onRouteChange} />;
  // } else if (route === 'page3') {
  //   return <Page3 onRouteChange={onRouteChange} />;
  // }

  if (route === 'page1') {
    return <Page1 onRouteChange={onRouteChange} />;
  } else {
    console.log(PageComponent);
    if (!PageComponent) return '';
    return <PageComponent onRouteChange={onRouteChange} />;
  }
}

export default App;
