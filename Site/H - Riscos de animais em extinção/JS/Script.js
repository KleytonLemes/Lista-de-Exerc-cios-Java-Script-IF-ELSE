function verificarRisco() {
    // Obtém o nome da espécie e a população digitada pelo usuário
    const nomeEspecie = document.getElementById('nomeEspecie').value;
    const populacao = document.getElementById('populacao').valueAsNumber;

    // Verifica se o valor é um número válido
    if (!isNaN(populacao)) {
        let mensagem = '';

        // Classifica o risco com base na população
        if (populacao >= 200 && populacao < 500) {
            mensagem = 'Espécie criticamente em perigo!';
        } else if (populacao >= 500 && populacao < 1000) {
            mensagem = 'Espécie em perigo';
        } else if (populacao >= 1000 && populacao < 5000) {
            mensagem = 'Espécie vulnerável!';
        } else {
            mensagem = 'População dentro de níveis aceitáveis.';
        }

        // Exibe o resultado no HTML
        document.getElementById('resultado').innerHTML = `
            <strong>Espécie:</strong> ${nomeEspecie}<br>
            <strong>População:</strong> ${populacao}<br>
            <strong>Risco:</strong> ${mensagem}
        `;
    } else {
        alert("Por favor, digite uma população válida.");
    }
}