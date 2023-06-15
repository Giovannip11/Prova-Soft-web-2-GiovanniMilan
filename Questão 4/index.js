// Criei uma function par verificar se um número e ou não um quadrado perfeito. \\
function verificarQuadradoPerfeito() {
    // Aqui uma variável para digitar o número que o usuário deseja descobrir se é um quadrado perfeito.\\
    var numero = prompt('Digite um número:');
    // Um if para caso o número digitado seja um número negativo.\\
    if (numero < 0) {
        alert('Esse número é negativo, digite um número positivo.');
        return false;
    }
    // Uma variável que cálcula a raiz quadrada do número \\
    var raiz = Math.sqrt(numero);
   // Aqui os ifs com avisos de cada um dos possíveis resultados o número ser ou não um quadrado perfeito.\\
    if (raiz === Math.floor(raiz)) {
        alert('Esse número é um quadrado perfeito.');
        return true;
    } else {
        alert('Esse número não é um quadrado perfeito.');
        return false;
    }
  }