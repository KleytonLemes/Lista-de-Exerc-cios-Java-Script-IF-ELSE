const form = document.querySelector('form');

const saidaIMC = document.getElementById('saidaIMC');
const saidaSituacao = document.getElementById('saidaSituacao');

form.onsubmit = (evento) => {
    const inputs = new FormData(evento.target);

    const peso = inputs.get('peso');
    const altura = inputs.get('altura');

    const calcular_imc = peso / (altura * altura).toFixed(1);

    if(calcular_imc <= 18.5){
        saidaIMC.textContent = 'Seu IMC' + calcular_imc;
        saidaSituacao.textContent = 'Magreza';
    }
    else if(calcular_imc > 18.5 && calcular_imc <= 24.9){
        saidaIMC.textContent = calcular_imc;
        saidaSituacao.textContent = 'Normal';
    }
    else if(calcular_imc > 25 && calcular_imc <= 29.9){
        saidaIMC.textContent = calcular_imc;
        saidaSituacao.textContent = 'Sobrepeso';
    }
    else if(calcular_imc > 30 && calcular_imc <= 39.9){
        saidaIMC.textContent = calcular_imc;
        saidaSituacao.textContent = 'Obesidade';
    }
    else if(calcular_imc > 40){
        saidaIMC.textContent = calcular_imc;
        saidaSituacao.textContent = 'Morbido';
    }
    return false;
}