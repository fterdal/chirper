import React from 'react';

const ChirpsList = ({ chirps }) => {
  const chirpsListItems = chirps.map(({id, text, timeStamp}) =>
    (
      <li key={id} className="singleChirp">
        <blockquote>{text}</blockquote>
        <span>{timeStamp}</span>
      </li>
    )
  )
  return (
    <ul className="chirpsFeed">
      {chirpsListItems}
    </ul>
  )
}

export default ChirpsList;
