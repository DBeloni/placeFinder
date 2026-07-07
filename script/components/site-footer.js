class SiteFooter extends HTMLElement {
    connectedCallback() {
        // Verifica se está na página restrita do mapa
        const estaNaPaginaDoMapa = window.location.pathname.includes('map.html');
        const estaLogado = this.hasAttribute('logado') || estaNaPaginaDoMapa;

        this.innerHTML = `        
            <link rel="stylesheet" href="/style/css/components/footer.css">
            <div class="rodapeGeral">
                <div class="container">
                    <footer class="py-3 my-0">
                        ${estaLogado ? '' : `
                            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                                <li class="nav-item"><a href="/pages/index.html" class="nav-link px-2">Home</a></li>
                                <li class="nav-item"><a href="/pages/about.html" class="nav-link px-2">About</a></li>                            
                                <li class="nav-item"><a href="/pages/register.html" class="nav-link px-2">Register</a></li>
                                <li class="nav-item"><a href="/pages/login.html" class="nav-link px-2">Login</a></li>
                            </ul>
                        `}
                        <p class="text-center mb-0" style="color: var(--color2); font-size: 13px;">&copy; 2026 PlaceFinder, Inc</p>
                    </footer>
                </div>        
            </div>`;
    }
}

customElements.define('site-footer', SiteFooter);