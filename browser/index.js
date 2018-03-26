import React from 'react';
import { render } from 'react-dom';

import { AllChirps } from './AllChirps';

const App = () => {
  return (
    <div className="container">
      <h2>Chirper!</h2>
      <AllChirps />
    </div>
  )
}

render(
  <App />,
  document.getElementById('app')
);
