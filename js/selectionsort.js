// Criando o algoritmo de seleção (Selection Sort)

function searchSmaller(arr) {
    smaller = arr[0];
     smallerIndex = 0;

     for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smaller) {
            smaller = arr[i];
            smallerIndex = i;
        }
    }
    return smallerIndex;

}

function selectionSort(arr) {
    const newArr = [];
    const count = arr.length;

    for (let i = 0; i < count; i++) {
        const smallerIndex = searchSmaller(arr);
        newArr.push(arr.splice(smallerIndex, 1)[0]);
    }
    return newArr;
}

console.log(selectionSort([11,5,22,12,4,3]));