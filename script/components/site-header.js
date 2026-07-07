class SiteHeader extends HTMLElement {
    connectedCallback() {
        // Apenas lê a memória real do navegador, sem brechas!
        const estaLogado = localStorage.getItem("usuarioLogado") === "true";

        this.innerHTML = `
        <link rel="stylesheet" href="../style/css/components/header.css">
        <header class="cabecalho-principal p-3 border-bottom">
            <div class="container-fluid px-4">
                <div class="d-flex flex-wrap align-items-center justify-content-between">
                
                <a href="index.html" class="logo-site text-decoration-none">
                    PlaceFinder
                </a>

                <ul class="nav mx-auto mb-2 mb-md-0 lista-navegacao">
                    <li><a href="index.html" class="nav-link px-3">Home</a></li>
                    <li><a href="about.html" class="nav-link px-3">About</a></li>
                    ${estaLogado ? `<li><a href="map.html" class="nav-link px-3">Map</a></li>` : ''}
                </ul>

                <div class="d-flex gap-2 bloco-botoes">
                    ${estaLogado ? `
                        <button id="btn-logout">Sign Out</button>
                    ` : `
                        <a href="login.html" class="btn btn-login">Login</a>
                        <a href="register.html" class="btn btn-signup">Register</a>
                    `}
                </div>

                </div>
            </div>
        </header>    
        `;

        const btnLogout = this.querySelector('#btn-logout');
        if (btnLogout) {
            btnLogout.addEventListener('click', (event) => {
                event.preventDefault();
                localStorage.removeItem("usuarioLogado");
                alert("Você saiu do sistema!");
                window.location.href = "login.html";
            });
        }
    }
}

customElements.define("site-header", SiteHeader);