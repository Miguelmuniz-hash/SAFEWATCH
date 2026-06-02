function salvarCadastro(event) {
    event.preventDefault();
    
   
    let emailCadastrado = document.getElementById("cadastro-email").value;
    let senhaCadastrada = document.getElementById("cadastro-senha").value;
    let termaoAceito = document.getElementById("termos").checked;

    if (emailCadastrado === "" && senhaCadastrada === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }
    if (termaoAceito) {
        alert("Você precisa aceitar os Termos!");
        return;
    }

    localStorage.setItem("usuarioNome", emailCadastrado);
    localStorage.setItem("usuarioSenha", senhaCadastrada);

    alert("Cadastro realizado com sucesso!");
    
    window.location.href = "login.html"; /*IGual ao href*/
}