const displayArr = () => {
  const myArray = addDataToArray();
  const targetReleaseElem = document.getElementById('displayContainer');
  myArray.forEach((item, index) => {
    const itemParagraph = document.createElement('p');
    itemParagraph.textContent = `${index + 1}. Value: ${item.value.toFixed(
      2
    )}, FirstCb: ${item.selector}, SecondCb: ${item.secondCb}, PrioStatus: ${
      item.prioStatus
    }`;
    targetReleaseElem.appendChild(itemParagraph);
  });
};

// Dari subsetSum.js file
const sumLocalStorage = () => {
  const releaseTargetElem = document.getElementById('releaseTarget').value;
  const closestSubsetElem = document.getElementById('closestSubset');
  const closestSumElem = document.getElementById('closestSum');
  const inputReleaseNum = parseInt(releaseTargetElem);

  const dataArr = JSON.parse(localStorage.getItem('myArray')) || [];
  const resultSumUp = closestSubset(inputReleaseNum, dataArr);
  closestSubsetElem.textContent = resultSumUp.closestSubset.map((item) => {
    return item.value;
  });
  closestSumElem.textContent = resultSumUp.closestSum;
};

// Sum value in array and print if the release number found
const closestSubset = (releaseTarget, myArr) => {
  const n = myArr.length;
  let closestSum = Number.MAX_VALUE;
  let closestSubset = [];

  function findSubsets(subset, index) {
    if (index === n) {
      const sum = subset.reduce(
        (accumulator, currentVal) => accumulator + currentVal.value,
        0
      );

      if (
        Math.abs(releaseTarget - sum) < Math.abs(releaseTarget - closestSum)
      ) {
        closestSum = sum;
        closestSubset = subset.slice();
      }

      return 201;
    }
    // #3
    subset.push(myArr[index]);
    findSubsets(subset, index + 1);

    subset.pop();
    findSubsets(subset, index + 1);

    // #1
    // if (myArr[index].selector) {
    //   if (!myArr[index].secondCb) {
    //     subset.push(myArr[index]);
    //     findSubsets(subset, index + 1);
    //     subset.pop();
    //   } else {
    //     findSubsets(subset, index + 1);
    //   }
    // } else {
    //   findSubsets(subset, index + 1);
    // }

    // #2
    if (myArr[index].selector) {
      if (!myArr[index].secondCb) {
        if (myArr[index].priority === 1) {
          subset.push(myArr[index]);
          findSubsets(subset, index + 1);
        } else if (!myArr[index].priority || myArr[index].priority === 2) {
          if (!subset.find((item) => item.priority === 1)) {
            subset.push(myArr[index]);
            findSubsets(subset, index + 1);
          } else {
            findSubsets(subset, index + 1);
          }
        } else if (
          !subset.find((item) => item.priority === 1 || item.priority === 2)
        ) {
          subset.push(myArr[index]);
          findSubsets(subset, index + 1);
        }
      } else {
        findSubsets(subset, index + 1);
      }
    } else {
      findSubsets(subset, index + 1);
    }
  }

  findSubsets([], 0);
  // console.log(closestSubset);
  // console.log(closestSum);

  return { closestSubset, closestSum };
};

// const displayResultSum = () => {
//   const releaseTarget = 65;
//   const declareArr = [12, 50, 83, 94, 85, 12, 50, 83, 94, 85, 1, 2, 3];

//   const displayArrElem = document.getElementById('displayArr');
//   const displayTotalValueElem = document.getElementById('displayTotalValue');

//   const resultReleaseNum = closestSubset(releaseTarget, declareArr);

//   displayArrElem.textContent = resultReleaseNum.closestSubset;
//   displayTotalValueElem.textContent = resultReleaseNum.closestSum;
// };
