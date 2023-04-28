alert("Vamos conhecer sobre vinhos!")

// Armazena as cores possíveis em uma matriz
var cores =  ["#5c3e90","#826ba9","#aa99c5"];

// Define o índice inicial da cor
var indiceCor = 0;

function alternarCores() {
  // Incrementa o índice da cor
  indiceCor++;

  // Se o índice for maior ou igual ao número de cores, volta para o início
  if (indiceCor >= cores.length) {
    indiceCor = 0;
  }

  // Define a nova cor de fundo do body
  document.body.style.backgroundColor = cores[indiceCor];
}

var pontos = 0;
if(prompt("Para a produção de vinho branco, é necessário: \n 1-Somente uvas de casca branca \n 2-Tanque com temperatura controlada \n 3-Necessário de determinada maceração ") == "3") {
    pontos = pontos+ 1;
}
if(prompt("Um elemento que NÃO influencia no envelhecimento do vinho é:\n 1-Calor\n 2-Luz\n 3-Nenhuma das Alternativas") == "1") {
    pontos = pontos+ 1;
}
if(prompt("São acessórios e estão relacionados com vinho, exceto:\n 1-Colméia\n 2-Rótulo\n 3-Salva-gotas") == "2") {
    pontos = pontos+ 1;
}
if(prompt(" O vinho do porto é um vinho português fortificado de qual região:\n 1-Douro\n 2-Alentejo\n 3-Porto") == "1") {
    pontos = pontos+ 1;
}
if(prompt(" Qual das alternativas abaixo traduz uma expressão usada por degustadores:\n 1-Magro = Sem corpo\n 2-Longo = De grande persistência\n 3-Oxidado = Vinho ao estilo de vinagre")  == "2") {
    pontos = pontos+ 1;
}
if(prompt(" Guardar as garrafas na horizontal ou vertical?:\n 1-Vertical \n 2- Horizontal \n 3-Ambas ")  == "2") {
    pontos = pontos+ 1;
}
if(prompt(" A origem do Champagne é de qual país: \n 1-Itália \n 2-Espanha \n 3-França ")  == "3") {
    pontos = pontos+ 1;
}
if(prompt(" Todas são uvas de origem francesa, exceto: \n 1-Riesling \n 2-Malbec \n 3-Cabernet Franc ")  == "1") {
    pontos = pontos+ 1;
}
if(prompt(" Termo blanc de blancs é utilizado frequentemente para referenciar um: \n 1-Vinho branco \n 2-Espumante \n 3-Vinho branco fortificado ")  == "2") {
    pontos = pontos+ 1;
}
if(prompt(" NÃO é considerado um crítico, especialista ou um avaliador do mundo dos vinhos: \n 1-Roberto Park \n 2-Wine Spectator \n 3-Jancis Robinson ")  == "2") {
    pontos = pontos+ 1;
}

document.getElementById("resultado").innerHTML=("Calculando...");
function mostrarResultado() {
    console.log('entrei na função')
    if(pontos == 10) {
        alert("Você acertou 10/10");
        document.getElementById('resultado'). innerHTML = pontos;
    }
    if(pontos == 9) {
        alert("Você acertou 09/10");
        document.getElementById('resultado'). innerHTML = pontos;
    }
    if(pontos == 8) {
        alert("Você acertou 08/10");
        document.getElementById('resultado'). innerHTML = pontos;
    }
    if(pontos == 7) {
        alert("Você acertou 07/10");
        document.getElementById('resultado'). innerHTML = pontos;
    }
    if(pontos == 6) {
        alert("Você acertou 06/10");
        document.getElementById('resultado'). innerHTML = pontos;
    }
    if(pontos == 5) {
        alert("Você acertou 05/10");
        document.getElementById('resultado'). innerHTML = pontos;
    }
    if(pontos == 4) {
        alert("Você acertou 04/10");
        document.getElementById('resultado'). innerHTML = pontos;
    }
    if(pontos == 3) {
        alert("Você acertou 03/10");
        document.getElementById('resultado'). innerHTML = pontos;
    }
    if(pontos == 2) {
        alert("Você acertou 02/10");
        document.getElementById('resultado'). innerHTML = pontos;
    }
    if(pontos == 1) {
        alert("Você acertou 01/10");
        document.getElementById('resultado'). innerHTML = pontos;
    }
    if(pontos == 0) {
        alert("Você acertou 0/10");
        document.getElementById('resultado'). innerHTML = pontos;
    }
}
setTimeout(mostrarResultado, 2000);

