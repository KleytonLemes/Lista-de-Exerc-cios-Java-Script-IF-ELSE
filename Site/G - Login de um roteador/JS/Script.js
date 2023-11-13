const form = document.querySelector('form');

const saida = document.getElementById('saida');

form.onsubmit = (e) => {
    const inputs = new FormData(e.target);

    let usuario = inputs.get('usuario');
    let senha = inputs.get('senha');

    // Definir o nome de usuário e a senha corretos
    let usuarioCorreto = "adm";
    let senhaCorreta = "123";

    // Verificar se o nome de usuário e a senha estão corretos
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        saida.textContent = ("Login efetuado!");
    }
    else if (usuario === usuarioCorreto) {
      saida.textContent =  ("Senha incorreta. Login falhou!");
    }
    else if (senha === senhaCorreta) {
      saida.textContent = ("Nome de usuário incorreto. Login falhou!");
    }
    else {
      saida.textContent = ("Nome de usuário e senha incorretos. Login falhou!");
    }

    return false;
}