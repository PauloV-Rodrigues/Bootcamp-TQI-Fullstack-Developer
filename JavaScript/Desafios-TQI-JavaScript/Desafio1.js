/*
Daenerys é a khaleesi dos Dothraki. Juntamente com Drogon, eles vão atrás do Tyrion, 
para tentar dominar Westeros. Ela possui, além do seu dragãozinho, um rastreador 
que mede o nível de energia de qualquer ser vivo. Todos os seres com o nível menor 
ou igual a 8000, ela considera como se fosse um inseto. Quando passa deste valor, que 
foi o caso do Drogon, ela se espanta e grita “Mais de 8000”. Baseado nisso, utilize a 
mesma tecnologia e analise o nível de energia dos seres vivos.
*/

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let input = gets();

let qtdEntradas = parseInt(input);
let nivelEnergia;

for(let i = 0; i < qtdEntradas; i++){
    input = gets();
    nivelEnergia = parseInt(input);
    
    if(nivelEnergia <= 8000){
        print("Inseto!")
    }else{
        print("Mais de 8000!")
    }
}