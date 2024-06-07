const sumLocalStorage = () => {
  const releaseTargetElem = document.getElementById('releaseTarget').value;
  const closestSubsetElem = document.getElementById('closestSubset');
  const closestSumElem = document.getElementById('closestSum');
  const inputReleaseNum = parseInt(releaseTargetElem);

  const dataArr = JSON.parse(localStorage.getItem('myArray')) || [];
  const resultSumUp = closestSubset(inputReleaseNum, dataArr);
  closestSubsetElem.textContent = resultSumUp.closestSubset
    .map((item) => {
      return item.value;
    })
    .join(', ');
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

      return;
    }

    // #1
    // if (myArr[index].selector) {
    //   if (!myArr[index].secondCb) {
    //     subset.push(myArr[index]);
    //     findSubsets(subset, index + 1);
    //     subset.pop();
    //   }
    // }
    // findSubsets(subset, index + 1);

    if (myArr[index].selector && !myArr[index].secondCb) {
      if (myArr[index].prioStatus === 1) {
        subset.push(myArr[index]);
        findSubsets(subset, index + 1);
        subset.pop();
      } else if (myArr[index].prioStatus === 2) {
        subset.push(myArr[index]);
        findSubsets(subset, index + 1);
        subset.pop();
      } else if (myArr[index].prioStatus === 3) {
        subset.push(myArr[index]);
        findSubsets(subset, index + 1);
        subset.pop();
      }
    }
    findSubsets(subset, index + 1);
  }

  findSubsets([], 0);
  console.log('Closest Subset:', closestSubset);
  console.log('Closest Sum:', closestSum);

  return { closestSubset, closestSum };
};
