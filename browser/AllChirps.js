import React from 'react';
import { fakeChirps } from './utils';

export const AllChirps = () => {
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
