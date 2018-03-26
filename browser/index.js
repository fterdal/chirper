import React from 'react';
import { render } from 'react-dom';

// import { ChirpsList } from './ChirpsList';
import Chirps from './Chirps';

const App = () => {
  return (
    <div className="container">
      <h1 className="center">Chirper!</h1>
      <Chirps />
    </div>
  )
}

render(
  <App />,
  document.getElementById('app')
);