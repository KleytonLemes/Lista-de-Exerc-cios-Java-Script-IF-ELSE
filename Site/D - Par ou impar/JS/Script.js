const form = document.querySelector('form');

const saidaParImpar = document.getElementById('saidaParImpar');
const saidaPositivoNegativo = document.getElementById('saidaPositivoNegativo');

form.onsubmit = (evento) => {
    const inputs = new FormData(evento.target);

    let numero = inputs.get('numero');

    // Verificar se o número é par
    if (numero % 2 === 0) {
        saidaParImpar.textContent = "O número " + numero + " é par";
    }
    else {
        saidaParImpar.textContent = "O número " + numero + " é ímpar";
    }
  
    // Verificar se o número é positivo
    if (numero >= 0) {
       saidaPositivoNegativo.textContent = "O número " + numero + " é positivo";
    }
    else {
        saidaPositivoNegativo.textContent = "O número " + numero + " é negativo";
    }
    return false;
}