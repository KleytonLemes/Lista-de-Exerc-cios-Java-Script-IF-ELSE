const form = document.querySelector('form');

const saida = document.getElementById('saida');

form.onsubmit = (evento) => {
    const inputs = new FormData(evento.target);

    let salario = parseFloat(inputs.get('salario')).toFixed(2);
    let piso = parseFloat(inputs.get('piso')).toFixed(2);

    // Calcular o salário mensal
    piso = salario / 12;
    

    // Verificar se o salário mensal está de acordo com o piso
    if (piso >= salario) {
        saida.textContent = "Salário mensal: " + piso + " - De acordo com o piso";
    }
    else {
        saida.textContent = "Salário mensal: " + piso + " - Abaixo do piso";
    }      

    return false;
}

