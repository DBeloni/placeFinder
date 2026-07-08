import { logarUsuario } from "./services/auth-service.js";

document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("login-form");

    if (formLogin) {
        formLogin.addEventListener("submit", async (event) => {
            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const senha = document.getElementById("senha").value.trim();

            // Desabilita o botão temporariamente para evitar duplo clique ávido
            const btnSubmit = formLogin.querySelector("button[type='submit']");
            if (btnSubmit) btnSubmit.disabled = true;

            const resultado = await logarUsuario(email, senha);

            if (resultado.sucesso) {
                // Seta a Única Fonte de Verdade que o Header, Footer e Mapa usam para segurança
                localStorage.setItem("usuarioLogado", "true");
                
                // Manda direto para a tela do mapa (estão na mesma pasta /pages/)
                window.location.href = "map.html";
            } else {
                // Mostra o erro tratado em português
                alert(resultado.erro);
                if (btnSubmit) btnSubmit.disabled = false;
            }
        });
    }
});