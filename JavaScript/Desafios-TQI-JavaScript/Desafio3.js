/* 
Papaleguas é um corredor exemplar, sua especialidade é a prova dos 100 metros rasos. 
Diariamente, ele treina para realizar as provas no menor tempo possível e se tornar 
recordista mundial na categoria. Pode se perceber que, dependendo da quantidade de 
tentativas, o seu desempenho melhora ou piora. Diante disso, ele te desafia para calcular 
a tentativa mais rápida de cada treino diário.
*/

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let input = gets()

let qtdEntradas = parseInt(input)
let melhor = 999

for(let i = 0; i < qtdEntradas; i++){
    
    input = gets()
    let tempo = parseFloat(input)
    if (tempo <= melhor) {
      melhor = tempo;
    }    	
}
print(melhor)