const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];

    arr.splice(pivotIndex, 1);

    let leftIndex = [];
    let rightIndex = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftIndex.push(arr[i]);
        } else {
            rightIndex.push(arr[i]);
        }
    }

    return [...quickSort(leftIndex), pivot, ...quickSort(rightIndex)];
}

let arrayList = [44,32,10,22,54,88,39,45,90,76];
console.log("Ordenando o array utilizando o pivô como o elemento do meio");
console.log(quickSort(arrayList))