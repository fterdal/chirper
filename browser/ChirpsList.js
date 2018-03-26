import React from 'react';

const ChirpsList = ({ chirps }) => {
  const chirpsListItems = chirps.map(({id, text}) =>
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
