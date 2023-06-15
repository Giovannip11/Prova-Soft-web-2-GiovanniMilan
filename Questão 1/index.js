// Criei um função para identificar um número primo.\\
function identificarNumeroPrimo() {
    // Utilizei o var para armazenar o numero escolhido pelo usuário com uma mensagem para informar o que se deve fazer.\\
    var numeroEscolhido = parseFloat(prompt('Digite o número desejado'));
    // Com o número definido é importante definir se ele e menor ou igual a 1 ou 0, caso algo desse tipo aconteça ira surgir uma mensagem de número inválido.\\
    if (numeroEscolhido <= 1 || isNaN(numeroEscolhido)) {
      alert('Número inválido.');
      return;
    }
    // Criei um var para validar o valor, e em seguida a operação matemática para definir um numero primo em forma de loop.\\
    var ehPrimo = true;
    
    for (var i = 2; i <= Math.sqrt(numeroEscolhido); i++) {
      if (numeroEscolhido % i === 0) {
        ehPrimo = false;
        break;
      }
    }
    // Aqui um código para mostrar o resultado das operçãoes com uma mensagem se o número e primo ou não.\\
    if (ehPrimo) {
      alert('O número é primo.');
    } else {
      alert('O número não é primo.');
    }
  }