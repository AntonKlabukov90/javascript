//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.

const compute = (chain1, chain2) => {
  let count = 0;

  if (chain1.length !== chain2.length) {
    throw new Error('strands must be of equal length');
  } else {
    for (let i = 0; i < chain1.length; i += 1) {
      if (chain1[i] !== chain2[i]) {
        count += 1;
      }
    }
  }
  return count;
};
export default compute;
