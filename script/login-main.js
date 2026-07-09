import { logarUsuario } from "./services/auth-service.js";
import { mostrarNotificacao, getTexto } from "./utils/i18n.js";

document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("login-form");

    if (formLogin) {
        formLogin.addEventListener("submit", async (event) => {
            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const senha = document.getElementById("senha").value.trim();

            const btnSubmit = formLogin.querySelector("button[type='submit']");
            if (btnSubmit) btnSubmit.disabled = true;

            const resultado = await logarUsuario(email, senha);

            if (resultado.sucesso) {
                localStorage.setItem("usuarioLogado", "true");
                window.location.href = "map.html";
            } else {
                mostrarNotificacao(getTexto(resultado.erroKey), "error");
                if (btnSubmit) btnSubmit.disabled = false;
            }
        });
    }
});