class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `        
            <link rel="stylesheet" href="/style/css/components/footer.css">
            <div class="rodapeGeral">
                <div class="container">
                    <footer class="py-3 my-4">
                        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                            <li class="nav-item"><a href="/pages/index.html" class="nav-link px-2 text-body-secondary">Home</a></li>
                            <li class="nav-item"><a href="/pages/map.html" class="nav-link px-2 text-body-secondary">Map</a></li>
                            <li class="nav-item"><a href="/pages/signIn.html" class="nav-link px-2 text-body-secondary">Sign In</a></li>
                            <li class="nav-item"><a href="/pages/login.html" class="nav-link px-2 text-body-secondary">Login</a></li>
                            <li class="nav-item"><a href="/pages/about.html" class="nav-link px-2 text-body-secondary">About</a></li>
                        </ul>
                        <p class="text-center text-body-secondary">&copy; 2026 Company, Inc</p>
                    </footer>
                </div>        
            </div>`
    }
}

customElements.define('site-footer', SiteFooter)


