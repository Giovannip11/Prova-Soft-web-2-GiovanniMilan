// Criei a função para validação da senha, com as variáveis que a senha precisa ter para ser válida\\
function validacaoSenha() {
    var senha = prompt('Digite sua senha');
    var lengthValid = senha.length >= 8;
    var uppercaseValid = /[A-Z]/.test(senha);
    var lowercaseValid = /[a-z]/.test(senha);
    var numberValid = /[0-9]/.test(senha);
 // Com as variáveis criadas, as ifs foram criadas para analisar se a senha é válida com dois alerts avisando se a senha é segura ou não\\
    if (lengthValid && uppercaseValid && lowercaseValid && numberValid) {
        alert('A senha é segura');
    } else {
        alert('A senha não é segura');
    }
}


