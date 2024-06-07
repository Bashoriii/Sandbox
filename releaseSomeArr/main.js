// Generate random value using math.random() with value range between 0 - 100
const getArr = (...arrayInputParam) => {
  const sumUpAllArray = arrayInputParam.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return { sumUpAllArray, arrayInputParam };
};

// Display it to the DOM
const displayArr = () => {
  const inputArrElem = document.querySelector('#inputArr');
  const totalValueElem = document.querySelector('#totalValue');
  const releaseTargetElem = document.querySelector('#releaseTarget');
  const releaseNumElem = document.querySelector('#subsetsId');
  const totalValueSumElem = document.querySelector('#totalSum');

  const inputArrayValue = inputArrElem.value.split(', ').map(Number);
  const inputReleaseNumber = parseInt(releaseTargetElem.value);

  const resultArr = getArr(...inputArrayValue);
  const resultRelease = closestSubset(inputReleaseNumber, inputArrayValue);

  totalValueElem.textContent = resultArr.sumUpAllArray;
  releaseNumElem.textContent = resultRelease.closestSubset;
  totalValueSumElem.textContent = resultRelease.closestSum;
};

const closestSubset = (releaseTargetParam, myArr) => {
  const n = myArr.length;
  let closestSum = Number.MAX_VALUE;
  let closestSubset = [];

  function findSubsets(subset, index) {
    if (index === n) {
      const sum = subset.reduce(
        (accumulator, currentVal) => accumulator + currentVal,
        0
      );

      if (
        Math.abs(releaseTargetParam - sum) <
        Math.abs(releaseTargetParam - closestSum)
      ) {
        closestSum = sum;
        closestSubset = subset.slice();
      }

      return 201;
    }

    subset.push(myArr[index]);
    findSubsets(subset, index + 1);

    subset.pop();
    findSubsets(subset, index + 1);
  }

  findSubsets([], 0);

  return { closestSubset, closestSum };
};

// Trigger button for display an array
document.querySelector('#getValueArr').addEventListener('click', displayArr);
