import React from 'react';
import { render } from 'react-dom';

import { ChirpsList } from './ChirpsList';

const App = () => {
  return (
    <div className="container">
      <h1>Chirper!</h1>
      <ChirpsList />
    </div>
  )
}

render(
  <App />,
  document.getElementById('app')
);
