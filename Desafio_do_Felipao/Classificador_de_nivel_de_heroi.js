// # 1️⃣ Desafio Classificador de nível de Herói

//Declaração de Variaveis nome e quantidade de XP
//Nome
let nome = "João"

//XP  //Variar para testar
let qtd_XP = 10001

//declaração de variavel para defionir o nivel do Heroi, recebe string vazia para receber depois da condição
let nivel = ""


//Estrutura Condicionail para definir a classificação do Heroi

if(qtd_XP < 1000){
    nivel = "Ferro"
}
else if(qtd_XP > 1000 && qtd_XP <= 2000){
    nivel = "Bronze"
}
else if(qtd_XP > 2000 && qtd_XP <= 5000){
    nivel = "Prata"
}
else if(qtd_XP > 5000 && qtd_XP <= 7000){
    nivel = "Ouro"
}
else if(qtd_XP > 7000 && qtd_XP <= 8000){
    nivel = "Platina"
}
else if(qtd_XP > 8000 && qtd_XP <= 9000){
    nivel = "Ascendente"
}
else if(qtd_XP > 9000 && qtd_XP <= 10000){
    nivel = "Imortal"
}
else if(qtd_XP > 10000){
    nivel = "Radiante"
}


//Saida dos dados informando o nome do heroi e o nivel dele de acordo com a quantidade de XP
console.log(
    "O Heroi de nome "+nome+" está no nível "+nivel
)