class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="cabecalho">
                <div class="logo">PlaceFinder</div>

                <nav class="menu">
                    <ul>
                        <li><a href="/pages/index.html">Home</a></li>
                        <li><a href="/pages/mapa.html">Mapa</a></li>
                        <li><a href="/pages/inscreva.html">Inscreva-se</a></li>
                        <li><a href="/pages/contato.html">Contate-nos</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define("site-header", SiteHeader);