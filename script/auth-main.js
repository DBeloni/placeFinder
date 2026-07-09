import { cadastrarUsuario } from "/script/services/auth-service.js";
import { mostrarNotificacao, getTexto } from "/script/utils/i18n.js";

document.addEventListener("DOMContentLoaded", () => {
    const formCadastro = document.getElementById("cadastro");

    if (formCadastro) {
        formCadastro.addEventListener("submit", async (event) => {
            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const senha = document.getElementById("senha").value.trim();
            const confirmarSenha = document.getElementById("confirmar-senha").value.trim();

            if (senha !== confirmarSenha) {
                mostrarNotificacao(getTexto("error_passwords_dont_match"), "error");
                return;
            }

            const resultado = await cadastrarUsuario(email, senha);

            if (resultado.sucesso) {
                localStorage.setItem("usuarioLogado", "true");
                window.location.href = "/pages/map.html";
            } else {
                mostrarNotificacao(getTexto(resultado.erroKey), "error");
            }
        });
    }
});