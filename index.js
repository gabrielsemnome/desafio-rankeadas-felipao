//Insira o número de vitórias e derrotas nas entradas abaixo
let vitorias = 0
let derrotas = 0

//Código
let nivel
let saldoVitorias = funcSaldo(vitorias, derrotas)

function funcSaldo(a, b) {
  return a - b
}

if (saldoVitorias <= 10){
  nivel = "Ferro"
} else if ((saldoVitorias > 10) && (saldoVitorias <= 20)){
  nivel = "Bronze"
} else if ((saldoVitorias > 20) && (saldoVitorias <= 50)){
  nivel = "Prata"
} else if ((saldoVitorias > 50) && (saldoVitorias <= 80)){
  nivel = "Ouro"
} else if ((saldoVitorias > 80) && (saldoVitorias <= 90)){
  nivel = "Diamante"
} else if ((saldoVitorias > 90) && (saldoVitorias <= 100)){
  nivel = "Lendário"
} else if (saldoVitorias > 100){
  nivel = "Imortal"
}

let mensagemSaida = "O Herói tem de saldo de " + saldoVitorias + " e está no nível " + nivel

for (let i = 1; i <= 10; i++){
  console.log(mensagemSaida)
}