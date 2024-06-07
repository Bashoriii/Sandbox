const displayThrowData = () => {
  const closestSubsetElem = document.getElementById('closestSubset');
  const closestSumElem = document.getElementById('closestSum');
};

const displayDataCollection = () => {
  const dataArr = JSON.parse(localStorage.getItem('myArray')) || [];
  const displayDataElem = document.getElementById('displayData');
  dataArr.forEach((item, index) => {
    const itemParagraph = document.createElement('p');
    itemParagraph.textContent = `${index + 1}. Value: ${item.value.toFixed(
      2
    )}, Selector: ${item.selector}, CB: ${item.secondCb}, PrioStatus: ${
      item.prioStatus
    }`;
    displayDataElem.appendChild(itemParagraph);
  });
};
