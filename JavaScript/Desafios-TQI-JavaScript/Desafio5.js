/*
Você recebe um inteiro n, o número de equipes em um torneio que tem regras estranhas:

** Se o número atual de equipes for par , cada equipe será emparelhada com outra equipe. 
Um total de n / 2 partidas são jogadas e n / 2 as equipes avançam para a próxima rodada.

** Se o número atual de equipes for ímpar , uma equipe avança aleatoriamente no torneio e o 
restante é emparelhado. Um total de (n - 1) / 2 partidas são jogadas e (n - 1) / 2 + 1
as equipes avançam para a próxima rodada.

Retorna o número de partidas jogadas no torneio até que um vencedor seja decidido.
*/

let lines = gets().split("\n");
 
var numberOfMatches = parseInt(lines.shift);
 
let n = parseInt(lines.shift());
let totalMatches = 0;
    while(n>1){
        if(n%2 == 0){
            numberOfMatches = n / 2;
            totalMatches = totalMatches + numberOfMatches;
            n = n / 2;
        }
        
        else{
            numberOfMatches = (n - 1) / 2;
            totalMatches = totalMatches + numberOfMatches;
            n = (n - 1) / 2 + 1;
        }
    }

print(totalMatches)