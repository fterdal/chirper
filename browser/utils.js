const fakeChirps = [
  'i just saw a duck-billed goose-heron-swallow',
  'is that daffy duck??!??!!!',
  'cluck cluck',
  'birds are so much cooler than goats, just sayin\'',
  'sign my petition to outlaw feather dusters',
]

export const appendChirp = (prevChirps, text) => {
  const nextId = prevChirps.reduce((highestId, { id }) => {
    return id > highestId ? id : highestId
  }, 0) + 1;
  return [...prevChirps, {
    id: nextId,
    text,
    timeStamp: new Date().toLocaleDateString('en-us', {
      hour: 'numeric', minute: 'numeric', second: 'numeric'
    }),
  }]
}

export const seedChirps = () => {
  return fakeChirps.reduce((chirpsList, chirp) => {
    return appendChirp(chirpsList, chirp);
  }, [])
};
