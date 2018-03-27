import React from 'react';

const ChirpsList = ({ chirps }) => {
  const chirpsListItems = chirps.map(({id, text, timeStamp}) =>
    (
      <li key={id} className="card horizontal">
        <div className="card card-content">
          {text}
        </div>
        <span className="card card-content">
          {timeStamp}
        </span>
      </li>
    )
  ).reverse()
  return (
    <ul>
      {chirpsListItems}
    </ul>
  )
}

export default ChirpsList;
