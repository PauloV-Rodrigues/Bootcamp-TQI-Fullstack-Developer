/*
Um número natural é um inteiro não-negativo (0, 1, 2, 3, 4, 5,...). 
A sua tarefa neste problema é calcular a soma dos números naturais que 
estão presentes em um determinado intervalo [A, B] inclusive.

Por exemplo, a soma dos números naturais no intervalo [2, 5] é 14 = (2+3+4+5).
*/

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

const A = parseInt(gets());
const B = parseInt(gets());
const total = (B - A + 1) * (A + B)/2;
print(total);