class SiteHeader extends HTMLElement {
    connectedCallback() {
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
                    <li><a href="map.html" class="nav-link px-3">Map</a></li>
                    <li><a href="about.html" class="nav-link px-3">About</a></li>
                </ul>

                <div class="d-flex gap-2 bloco-botoes">
                    <a href="login.html" class="btn btn-login">Login</a>
                    <a href="signIn.html" class="btn btn-signup">Sign In</a>
                </div>

                </div>
            </div>
        </header>    
        
        `;
    }
}

customElements.define("site-header", SiteHeader);