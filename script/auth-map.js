import { deslogarUsuario } from "/script/services/auth-service.js";

document.addEventListener("DOMContentLoaded", () => {
    const btnLogout = document.getElementById("btn-logout");

    if (btnLogout) {
        btnLogout.addEventListener("click", async (event) => {
            event.preventDefault(); 

            const resultado = await deslogarUsuario();

            if (resultado.sucesso) {
                localStorage.removeItem("usuarioLogado");
                
                alert("Você saiu do sistema com sucesso!");
                window.location.href = "/pages/login.html";
            } else {
                alert(resultado.erro);
            }
        });
    }
});