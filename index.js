
let nome = "Aragorn"; 
let experiencia = 6500; 


let nivel;


let faixaXP;

if (experiencia < 1000) {
    faixaXP = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000) {
    faixaXP = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    faixaXP = "Prata";
} else if (experiencia >= 5001 && experiencia <= 7000) {
    faixaXP = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000) {
    faixaXP = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000) {
    faixaXP = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
    faixaXP = "Imortal";
} else {
    faixaXP = "Radiante";
}


switch (faixaXP) {
    case "Ferro":
        nivel = "Ferro";
        break;
    case "Bronze":
        nivel = "Bronze";
        break;
    case "Prata":
        nivel = "Prata";
        break;
    case "Ouro":
        nivel = "Ouro";
        break;
    case "Platina":
        nivel = "Platina";
        break;
    case "Ascendente":
        nivel = "Ascendente";
        break;
    case "Imortal":
        nivel = "Imortal";
        break;
    case "Radiante":
        nivel = "Radiante";
        break;
    default:
        nivel = "Desconhecido"; 
}


console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

