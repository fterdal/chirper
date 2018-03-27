import React from 'react';

const ChirpsList = ({ chirps }) => {
  return (
    <ul className="chirpsFeed">
      {chirps.map(({id, text, timeStamp}) =>
        (
          <li key={id} className="singleChirp">
            <blockquote>{text}</blockquote>
            <span>{timeStamp}</span>
          </li>
        )
      )}
    </ul>
  )
}

export default ChirpsList;
