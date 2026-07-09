class SiteFooter extends HTMLElement {
    connectedCallback() {
        // Mesma regra de segurança unificada
        const estaLogado = localStorage.getItem("usuarioLogado") === "true";

        this.innerHTML = `
        <link rel="stylesheet" href="/style/css/components/footer.css">
        <footer class="rodapeGeral py-4">
            <div class="container text-center">
                <ul class="nav justify-content-center mb-3 lista-links-footer">
                    <li><a href="/index.html" class="nav-link px-3">Home</a></li>
                    <li><a href="/pages/about.html" class="nav-link px-3">About</a></li>
                    
                    ${estaLogado ? `<li><a href="/pages/map.html" class="nav-link px-3">Map</a></li>` : ''}
                    
                    ${!estaLogado ? `
                        <li><a href="/pages/register.html" class="nav-link px-3">Register</a></li>
                        <li><a href="/pages/login.html" class="nav-link px-3">Login</a></li>
                    ` : ''}
                </ul>
                <p class="mb-0">© 2026 PlaceFinder, Inc</p>
            </div>
        </footer>
        `;
    }
}

customElements.define("site-footer", SiteFooter);