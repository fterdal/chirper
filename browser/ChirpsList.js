import React from 'react';
import { fakeChirps } from './utils';

const ChirpsList = () => {
  const chirpsListItems = fakeChirps.map(({id, text}) =>
    (
      <li key={id} className="card horizontal">
        <div className="card card-content">
          {text}
        </div>
      </li>
    )
  )
  return (
    <ul>
      {chirpsListItems}
    </ul>
  )
}

export default ChirpsList;
