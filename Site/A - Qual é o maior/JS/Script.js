const form = document.querySelector('form');

const saida = document.getElementById('saida');

form.onsubmit = (evento) => {
    const inputs = new FormData(evento.target);

    // Converte os números para números inteiros
    const numero1 = parseFloat(inputs.get('numero1'));
    const numero2 = parseFloat(inputs.get('numero2'));

    // Verificar se os números são iguais
    if (numero1 === numero2) {
    saida.textContent = (numero1 + " é igual a " + numero2);
    } 
    // Verificar se o primeiro número é maior
    else if (numero1 > numero2) {
        saida.textContent = (numero1 + " é maior que " + numero2);
    } 
   // Se nenhum dos casos acima for verdadeiro, o segundo número deve ser maior
    else {
        saida.textContent = (numero2 + " é maior que " + numero1);
    }


    return false;
}