
/*
  DESAFIO DIO
  CLASSIFICADOR DE PATENTES
  FREE FIRE - CS RANQUEADO
*/

// Função que calcula o saldo e identifica a patente
function calcularPartidasRankeadas(vitorias, derrotas) {

    // Calculando o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    // Identificando o nível do jogador
    let nivel = "";

    if (vitorias <= 10) {
        nivel = "Bronze";
    }
    else if (vitorias <= 20) {
        nivel = "Prata";
    }
    else if (vitorias <= 50) {
        nivel = "Ouro";
    }
    else if (vitorias <= 80) {
        nivel = "Platina";
    }
    else if (vitorias <= 90) {
        nivel = "Diamante";
    }
    else if (vitorias <= 95) {
        nivel = "Mestre";
    }
    else if (vitorias <= 100) {
        nivel = "Elite";
    }
    else {
        nivel = "Desafiante";
    }

    // Retornando o resultado
    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel
    };
}

// Lista de personagens do Free Fire CS Ranqueado
let jogadores = [
    { nome: "Marrenta", vitorias: 8, derrotas: 3 },
    { nome: "Chefao", vitorias: 15, derrotas: 4 },
    { nome: "Nobru", vitorias: 25, derrotas: 5 },
    { nome: "Surtada", vitorias: 40, derrotas: 12 },
    { nome: "Bandida", vitorias: 55, derrotas: 10 },
    { nome: "Deusa", vitorias: 70, derrotas: 15 },
    { nome: "Fenix", vitorias: 85, derrotas: 12 },
    { nome: "Caveira", vitorias: 95, derrotas: 8 },
    { nome: "Pantera", vitorias: 98, derrotas: 6 },
    { nome: "Tropa", vitorias: 105, derrotas: 5 }
];

// Laço de repetição para classificar os jogadores
for (let i = 0; i < jogadores.length; i++) {

    // Chamando a função
    let resultado = calcularPartidasRankeadas(
        jogadores[i].vitorias,
        jogadores[i].derrotas
    );

    // Exibindo a classificação
    console.log(
        "O Herói " + jogadores[i].nome +
        " tem saldo de " + resultado.saldoVitorias +
        " e está no nível de " + resultado.nivel
    );
}
