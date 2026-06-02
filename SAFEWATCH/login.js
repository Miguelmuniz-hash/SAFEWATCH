
function estilizarbotao() {
  

  let nomezinha = document.getElementById("bloco-1").value;
  let senhazinha = document.getElementById("bloco").value;

  let emailDoCadastro = localStorage.getItem("usuarioNome");
  let senhaDoCadastro = localStorage.getItem("usuarioSenha");

  if (nomezinha == emailDoCadastro && senhazinha == senhaDoCadastro) {
    console.log("Usuário autêntico!");
    alert("Usuário autêntico!");
    window.location.href = "index.html"; 
  } else {
    console.log("E-mail ou senha incorretos!");
    alert("E-mail ou senha incorretos! Digite os mesmos dados que você usou no cadastro.");
  }
}