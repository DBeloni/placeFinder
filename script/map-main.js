// Importamos a função de logout que acabamos de criar lá no serviço
import { deslogarUsuario } from "/script/services/auth-service.js";

document.addEventListener("DOMContentLoaded", () => {
    // Procuramos o botão de sair na página pelo ID "btn-logout"
    const btnLogout = document.getElementById("btn-logout");

    // Se o botão existir na tela, ficamos esperando o clique dele
    if (btnLogout) {
        btnLogout.addEventListener("click", async (event) => {
            event.preventDefault(); // Impede a página de atualizar do nada

            // Chama o Firebase para deslogar
            const resultado = await deslogarUsuario();

            if (resultado.sucesso) {
                alert("Você saiu com sucesso!");
                // Manda o usuário de volta para a tela de login
                window.location.href = "/pages/login.html";
            } else {
                alert(resultado.erro);
            }
        });
    }
});