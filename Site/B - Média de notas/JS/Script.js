const form = document.querySelector('form');

const saidaHistoricoNota1 = document.getElementById('saidaHistoricoNota1');
const saidaHistoricoNota2 = document.getElementById('saidaHistoricoNota2');
const saidaHistoricoNota3 = document.getElementById('saidaHistoricoNota3');
const saidaMedia = document.getElementById('saidaMedia');



form.onsubmit = (evento) => {
    const inputs = new FormData(evento.target);

    const nota1 = parseFloat(inputs.get('nota1'));
    const nota2 = parseFloat(inputs.get('nota2'));
    const nota3 = parseFloat(inputs.get('nota3'));

    // Declarar as variáveis
    let media = (nota1 + nota2 + nota3) / 3;

    let notaMinima

    // Verificar se o aluno está aprovado
    if (media >= nota1 && nota2 && nota3) {
        saidaHistoricoNota1.textContent = ("nota 1" + nota1)
        saidaHistoricoNota2.textContent = ("nota 2" + nota1)
        saidaHistoricoNota3.textContent = ("nota 3" + nota1)
        saidaMedia.textContent = ("Aprovado! Média: " + media);
    } else {
        saidaHistoricoNota1.textContent = ("nota 1" + nota1)
        saidaHistoricoNota2.textContent = ("nota 2" + nota1)
        saidaHistoricoNota3.textContent = ("nota 3" + nota1)
        saidaMedia.textContent = ("Reprovado! Média: " + media);
    }        

    return false;
}