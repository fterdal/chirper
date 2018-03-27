const fakeChirps = [
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

export const seedChirps = () => fakeChirps;

export const createChirp = (id, text) => ({
  id,
  text,
  timeStamp: new Date().toString(),
})

export const createChirpOLD = (chirpsList, text) => {
  const newChirp = {
    id: chirpsList.reduce((highestId, { id }) => {
      return id > highestId ? id : highestId
    }, 0) + 1,
    text,
    timeStamp: new Date().toString(),
  };
  return [...chirpsList, newChirp]
}
