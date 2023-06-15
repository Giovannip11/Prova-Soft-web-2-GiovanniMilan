//Criei uma função para calcular a fatorial do número desejado.\\
function calcularFatorial() {
    // Uma variável número para que seja armazenado o que foi digitado pelo usuário.\\
    var numero = parseInt(prompt('Digite o número desejado'));
    // Nessa parte foi criado um if para caso alguem bote um número menor que 0 ou algo que não seja um número .\\
    if (isNaN(numero) || numero < 0) {
      alert('Por favor, digite um número inteiro positivo.');
      return;
    }
   // Aqui foi criada uma fatorial para o número 1 \\
    if (numero === 0 || numero === 1) {
      alert('O fatorial de ' + numero + ' é 1.');
      return;
    }
  // Aqui vai ser feito o cálculo dos números a partir da variável declarada. \\
    let fatorial = 1;
    for (let i = numero; i >= 2; i--) {
      fatorial *= i;
    }
  // Um alert para mostrar o resultado do cálculo. \\
    alert('O fatorial de ' + numero + ' é: ' + fatorial);
  }
  
 
  