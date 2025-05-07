// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  num1 = 20
  num2 = 20
  operador = "*"
  // TODO: implementar função
  if (typeof(num1) || typeof(num2) != Number) {
    return ("Erro: parâmetros inválidos")
  }
  if (operador == 0 && num1 || num2 == 0) {
    return ("Erro: divisão por zero")
  }
  if (operador != `+`, `-`, `*`, `/`) {
    return ("Erro: operação inválida")
  }

  switch(operador){
    case '+':
    return(num1 + num2);

    case '-':
    return(num1 - num2);

    case '*':
    return(num1 + num2);

    case '/':
    return(num1 / num2)
  }
}




//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };