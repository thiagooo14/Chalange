//array splint
const arr = [12, -5, 45, 13, 48];

function sum(arr) {
  return arr.reduce((soma, i) => soma + i, 0);
}

function splitIntoTwo(arr) {
  let left = [];
  let right = [];
  let point = 0;
  for (let i = 0; i <= arr.length + 1; i++) {
    right = [];
    left.push(arr[0]);
    arr.shift();
    right.push(...arr);
    if (sum(left) > sum(right)) point++;
  }
  return point;
}

console.log(splitIntoTwo(arr));
