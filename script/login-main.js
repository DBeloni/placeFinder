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
                window.location.href = "/pages/map.html";
            } else {
                mostrarNotificacao(getTexto(resultado.erroKey), "error");
                if (btnSubmit) btnSubmit.disabled = false;
            }
        });
    }

    const alternarSenha = document.getElementById("alternar-senha");
    const campoSenha = document.getElementById("senha");

    const svgOlhoAberto = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
    const svgOlhoFechado = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 19c-7 0-10-7-10-7a13.16 13.16 0 0 1 2.18-3.18L12 12z"></path><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`;

    if (alternarSenha && campoSenha) {
        alternarSenha.addEventListener("click", () => {
            const ehSenha = campoSenha.type === "password";
            campoSenha.type = ehSenha ? "text" : "password";
            alternarSenha.innerHTML = ehSenha ? svgOlhoFechado : svgOlhoAberto;
        });
    }
});