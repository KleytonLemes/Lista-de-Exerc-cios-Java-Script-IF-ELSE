function calcularDensidade() {
    // Obtém a população e a área digitadas pelo usuário
    const populacao = document.getElementById('populacao').valueAsNumber;
    const area = document.getElementById('area').valueAsNumber;

    // Verifica se os valores são números válidos
    if (!isNaN(populacao) && !isNaN(area) && area > 0) {
        // Calcula a densidade demográfica
        const densidade = populacao / area;

        // Classifica a densidade
        let mensagem = '';
        if (densidade >= 100) {
            mensagem = 'Densidade Alta!';
        } else if (densidade >= 25) {
            mensagem = 'Densidade Média.';
        } else {
            mensagem = 'Densidade Baixa.';
        }

        // Exibe o resultado no HTML
        document.getElementById('resultado').innerHTML = `
            População: ${populacao}<br>
            Área: ${area} metros quadrados<br>
            Densidade: ${densidade.toFixed(2)} habitantes por quilômetro quadrado<br>
            ${mensagem}
        `;
    } else {
        alert("Por favor, digite valores válidos para população e área.");
    }
}