/* Construindo algoritmo de busca binária. */

const binarySearch = (list, item) => {
    let firstValue = 0;
    let lastValue = list.length - 1;
  
    while (firstValue <= lastValue) {
      middle = Math.floor((firstValue + lastValue) / 2);
      let kick = list[middle];
      if (kick === item) {
        return middle;
      }
      if (kick > item) {
        lastValue = middle - 1;
      } else {
        firstValue = middle + 1;
      }
    }
    return null;
  };
  
  const myList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  
  console.log(binarySearch(myList, 10));
  