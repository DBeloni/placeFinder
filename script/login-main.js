import { logarUsuario } from "/script/services/auth-service.js";

document.addEventListener("DOMContentLoaded", () => {
    // Procura o formulário da tela de login
    const formLogin = document.getElementById("form-login");

    if (formLogin) {
        formLogin.addEventListener("submit", async (event) => {
            event.preventDefault();

            // Pega os dados digitados na tela de login
            const email = document.getElementById("login-email").value.trim();
            const senha = document.getElementById("login-senha").value.trim();

            const resultado = await logarUsuario(email, senha);

            if (resultado.sucesso) {
                window.location.href = "/pages/map.html";
            } else {
                alert(resultado.erro);
            }
        });
    }
});