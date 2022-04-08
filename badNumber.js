//badNumbers
const badNumbers = [37, 7, 22, 15, 49, 60];
const upper = 48;
const lower = 3;

function range(start, stop) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  if (start >= stop) return [];

  return new Array(stop - start).fill(start).map((el, i) => el + i);
}

function goodSegment(badNumbers, lower, upper) {
  let ranges = [];
  let subrange = [];
  let large = 0;

  for (let i = 0; i < upper; i++) {
    const bla = range(lower, upper + 1)[i];

    if (!badNumbers.includes(bla)) {
      if (subrange.length === 0) {
        subrange.push(bla);
      } else {
        if (bla === upper) {
          subrange.push(bla);
          ranges.push(subrange);

          if (range(subrange[0], subrange[1] + 1).length > large) {
            large = range(subrange[0], subrange[1] + 1).length;
          }
        }
      }
    } else {
      if (subrange.length === 1) {
        subrange.push(bla - 1);
        ranges.push(subrange);

        if (range(subrange[0], subrange[1] + 1).length > large) {
          large = range(subrange[0], subrange[1] + 1).length;
        }

        subrange = [];
      } else {
        subrange = [];
      }
    }
  }
  return large;
}

console.log(goodSegment(badNumbers, lower, upper));