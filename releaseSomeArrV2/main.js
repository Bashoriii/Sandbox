// Populate data with random value
const addDataToArray = () => {
  let myArray = [];
  myArray = JSON.parse(localStorage.getItem('myArray')) || [];

  const valueElem = document.getElementById('value').value;
  const selectorElem = document.getElementById('selectorId').checked;
  const secondCbElem = document.getElementById('secondCb').checked;
  const prioStatusElem = document.getElementById('prioStatus').value;

  const newObject = {
    value: parseFloat(valueElem),
    selector: selectorElem,
    secondCb: secondCbElem,
    prioStatus: parseInt(prioStatusElem),
  };

  myArray.push(newObject);
  localStorage.setItem('myArray', JSON.stringify(myArray));

  return myArray;
};

// Execute the function with a button click
const displayArr = () => {
  const myArray = addDataToArray();
  const displayArrElem = document.getElementById('displayContainer');
  myArray.forEach((item, index) => {
    displayArrElem.textContent = `${index + 1}. Value: ${item.value.toFixed(
      2
    )}, FirstCb: ${item.selector}, SecondCb: ${item.secondCb}, PrioStatus: ${
      item.prioStatus
    }`;
  });
};
