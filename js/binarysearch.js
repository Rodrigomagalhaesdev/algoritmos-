/* Construindo algoritmo de busca binária. */

const binarySearch = (list, item) => {
    let leftIndex = 0;
    let rightIndex = list.length - 1;
  
    while (leftIndex <= rightIndex) {
      middle = Math.floor((leftIndex + rightIndex) / 2);
      let kick = list[middle];
      if (kick === item) {
        return middle;
      }
      if (kick > item) {
        rightIndex = middle - 1;
      } else {
        leftIndex = middle + 1;
      }
    }
    return null;
  };
  
  const myList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  
  console.log(binarySearch(myList, 10));
  

// A busca binária otimiza a alocação de memória, e a rapidez do algoritmo
// binary search tem o tempo de execução O(log n). exemplo: em uma lista de 10 elementos
// o algoritmo no pior dos casos, vai percorrer 5 vezes ate encontar o elemento procurado.
// enquanto na busca linear, o algoritmo na mesma lista, vai percorrer os 10 elementos.
