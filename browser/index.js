import React from 'react';
import { render } from 'react-dom';

render(
  <h1>
    {console.log('hello')}
    Hello, World!
  </h1>,
  document.getElementById('app')
);
