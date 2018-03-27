const fakeChirpsOLD = [
  {
    id: 1,
    text: 'i just saw a duck-billed goose-heron-swallow',
    timeStamp: new Date().toString(),
  },
  {
    id: 2,
    text: 'is that daffy duck??!??!!!',
    timeStamp: new Date().toString(),
  },
  {
    id: 3,
    text: 'cluck cluck',
    timeStamp: new Date().toString(),
  },
  {
    id: 4,
    text: 'birds are so much cooler than goats, just sayin\'',
    timeStamp: new Date().toString(),
  },
  {
    id: 5,
    text: 'sign my petition to outlaw feather dusters',
    timeStamp: new Date().toString(),
  },
];

const fakeChirps = [
  'i just saw a duck-billed goose-heron-swallow',
  'is that daffy duck??!??!!!',
  'cluck cluck',
  'birds are so much cooler than goats, just sayin\'',
  'sign my petition to outlaw feather dusters',
]

export const createChirp = (prevChirps, text) => {
  const nextId = prevChirps.reduce((highestId, { id }) => {
    return id > highestId ? id : highestId
  }, 0) + 1;
  return [...prevChirps, {
    id: nextId,
    text,
    timeStamp: new Date().toLocaleDateString('en-us', {week: 'short'}),
  }]
}

export const seedChirps = () => {
  return fakeChirps.reduce((chirpsList, chirp) => {
    return createChirp(chirpsList, chirp);
  }, [])
};

export const createChirpOLD = (id, text) => ({
  id,
  text,
  // timeStamp: new Date().toString(),
  timeStamp: new Date().toLocaleDateString('America/Chicago', {week: 'short'}),
})

export const createChirpOLDOLD = (chirpsList, text) => {
  const newChirp = {
    id: chirpsList.reduce((highestId, { id }) => {
      return id > highestId ? id : highestId
    }, 0) + 1,
    text,
    timeStamp: new Date().toString(),
  };
  return [...chirpsList, newChirp]
}
