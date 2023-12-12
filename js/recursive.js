
// Função recursiva para Fatorial

const calcularFatorial = (n) => {
  // caso base: fatorial de 0 ou 1 é sempre 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calcularFatorial(n - 1);
  }
};

let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

// O calculo de fatorial, tem o tempo de execução O(n) onde 'n' é o número de operações. 
// Ou seja, ele itera sobre todos os elementos ate chegar ao resultado.

