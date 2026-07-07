import { cadastrarUsuario } from "/script/services/auth-service.js";

document.addEventListener("DOMContentLoaded", () => {
    const formCadastro = document.getElementById("cadastro");

    if (formCadastro) {
        formCadastro.addEventListener("submit", async (event) => {
            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const senha = document.getElementById("senha").value.trim();
            const confirmarSenha = document.getElementById("confirmar-senha").value.trim();

            if (senha !== confirmarSenha) {
                alert("As senhas não coincidem!");
                return;
            }

            const resultado = await cadastrarUsuario(email, senha);

            if (resultado.sucesso) {
                window.location.href = "/pages/map.html";
            } else {
                alert(resultado.erro);
            }
        });
    }
});