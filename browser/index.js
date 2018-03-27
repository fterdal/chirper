import React from 'react';
import { render } from 'react-dom';

import Chirps from './Chirps';

const App = () => {
  return (
    <div className="container">
      <h1>Chirper!</h1>
      <Chirps />
    </div>
  )
}

render(
  <App />,
  document.getElementById('app')
);
