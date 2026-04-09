function rank(vitoria = 0, derrotas = 0){

    saldo = vitoria - derrotas

    if(saldo < 0 ){
        return "Valor inválido"
    }
    else if(saldo < 10){
        nivel = "Ferro"
    }
    else if(saldo > 10 && saldo <= 20){
        nivel = "Bronze"
    }
    else if(saldo > 20 && saldo <= 50){
        nivel = "Prata"
    }
    else if(saldo > 50 && saldo <= 80){
        nivel = "Ouro"
    }
    else if(saldo > 80 && saldo <= 90){
        nivel = "Diamante"
    }
    else if(saldo > 90 && saldo <= 100){
        nivel = "Lendário"
    }
    else if(saldo > 100){
        nivel = "Imortal"
    }

    return `O Herói tem um saldo de ${saldo} e está no nivel ${nivel}`
}


rankeada = rank()

console.log(rankeada)
