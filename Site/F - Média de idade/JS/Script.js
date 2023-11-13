const form = document.querySelector('form');

const saida1 = document.getElementById('saida1');
const saida2 = document.getElementById('saida2');

form.onsubmit = (evento) => {
    const inputs = new FormData(evento.target);

    var numeroDePessoas = 5;
    var somaIdades = 0;
    var maiorIdade = -Infinity;

    for (var i = 0; i < numeroDePessoas; i++) {
        var nome = prompt("Digite o nome da pessoa " + (i++) + ":");
        var idade = parseInt(prompt("Digite a idade de " + nome + ":"));

        somaIdades += idade;

        if (idade > maiorIdade) {
            maiorIdade = idade;
        }
    }

var mediaIdades = somaIdades / numeroDePessoas;

    saida1.textContent = "A média de idade das pessoas é: " + mediaIdades.toFixed(1);
    saida2.textContent = "A maior idade entre essas pessoas é: " + maiorIdade.toFixed(1);



    return false;
}