const findMinimum = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const runningSum = (arr) => {
  let sum = 0;
  return arr.map((num) => (sum += num));
};

const evenNumOfChars = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 === 0) {
      count++;
    }
  }
  return count;
};

const smallerThanCurr = (arr) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        count++;
      }
    }
    array.push(count);
  }

  return array;
};

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }

  return false;
};

const secondLargest = (arr) => {};

const shuffle = (arr) => {};

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
//almost done
