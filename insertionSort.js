const insertionSort = (pairs) => {
  const arrLen = pairs.length;
  const arr = [];

  for (let i = 1; i < arrLen; i++) {
    let j = i - 1;

    while (j >= 0 && pairs[j].key > pairs[j + 1].key) {
      [pairs[j], pairs[j + 1]] = [pairs[j + 1], pairs[j]];
      j = j - 1;
    }

    arr.push([...pairs]);
  }

  return arr;
};

const pairs = [
  { key: 5, value: 'Satu' },
  { key: 4, value: 'Dua' },
  { key: 3, value: 'Tigas' },
  { key: 2, value: 'Empat' },
  { key: 1, value: 'Lima' },
];

console.log(insertionSort(pairs));
