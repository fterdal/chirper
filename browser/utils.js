// Credit to Twitter account @ProBirdsRights for the excellent tweets
// The tweets marked with /* @ProBirdsRights */ are from that account
const fakeChirps = [
  'i just saw a duck-billed goose-heron-swallow',
  'did i just see that daffy duck??!??!!!',
  'cluck cluck',
  'sign my petition to outlaw feather dusters',
  'There were a cheeto. now there aren’t and I cover in orange dust. mystery abound', /* @ProBirdsRights */
  'Beak Mirror epersode: there a mirror an ANOTHER BIRB ON OTHER SIDE COMIN RIGHT AT ME GET EM ATTANCK', /* @ProBirdsRights */
  'A poem: i a robin not a tarkey so this Thanksgobin do no eat me', /* @ProBirdsRights */
  "psst i was the bord who ate Hamsel and Grattel's breabcrumbs don't regert it.", /* @ProBirdsRights */
  'Hello Mr. Bank can I deposit these crumb will they arccrue muffinterest? escrow divisidends broth IRA.' /* @ProBirdsRights */
]

export const appendChirp = (prevChirps, text) => {
  console.log('text', text);
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
