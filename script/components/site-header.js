class SiteHeader extends HTMLElement {
    connectedCallback() {
        // O JS olha para o nome do arquivo na URL atual do navegador
        const estaNaPaginaDoMapa = window.location.pathname.includes('map.html');
        
        // Se estiver na página map.html, considera logado automaticamente
        const estaLogado = this.hasAttribute('logado') || estaNaPaginaDoMapa;

        this.innerHTML = `
        <link rel="stylesheet" href="/style/css/components/header.css">
        <header class="cabecalho-principal p-3 border-bottom">
            <div class="container-fluid px-4">
                <div class="d-flex flex-wrap align-items-center justify-content-between">
                
                <a href="/" class="logo-site text-decoration-none">
                    PlaceFinder
                </a>

                <ul class="nav mx-auto mb-2 mb-md-0 lista-navegacao">
                    <li><a href="index.html" class="nav-link px-3 active">Home</a></li>
                    <li><a href="about.html" class="nav-link px-3">About</a></li>
                </ul>

                <div class="d-flex gap-2 bloco-botoes">
                    ${estaLogado ? `
                        <button class="btn btn-signout" id="btn-sair-sistema" style="background-color: var(--color2); color: var(--color5); border: 1px solid var(--color3);">Sign Out</button>
                    ` : `
                        <a href="login.html" class="btn btn-login">Login</a>
                        <a href="register.html" class="btn btn-signup">Register</a>
                    `}
                </div>

                </div>
            </div>
        </header>    
        `;

        // Se o botão de Sign Out existir na tela, programamos o clique dele para voltar à home
        const btnSair = this.querySelector('#btn-sair-sistema');
        if (btnSair) {
            btnSair.addEventListener('click', () => {
                window.location.href = 'index.html'; 
            });
        }
    }
}

customElements.define("site-header", SiteHeader);