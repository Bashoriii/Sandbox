// Generate random value using math.random() with value range between 0 - 100
const generateRandomArr = () => {
  const someArr = [];

  for (let i = 0; i < 30; i++) {
    const randomFloatNum = Math.random() * (100 - 1) + 1;
    someArr.push(randomFloatNum.toFixed(2));
  }

  const getResultValue = someArr.map((item) => {
    return item;
  });

  return getResultValue;
};

// Display it to the DOM
const displayArr = () => {
  const containerElem = document.querySelector('#arrContainer');
  const getRandomValue = generateRandomArr();
  containerElem.textContent = getRandomValue.join(', ');
};

// Trigger button for display an array
document.querySelector('#populateArr').addEventListener('click', displayArr);

// Note:
// Buat jumlahin semua yang ada di dalem array, pake reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
