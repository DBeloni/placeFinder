import { mostrarNotificacao, getTexto } from '../utils/i18n.js';

class SiteHeader extends HTMLElement {
    connectedCallback() {
        const estaLogado = localStorage.getItem("usuarioLogado") === "true";
        const idiomaInicial = localStorage.getItem("idioma") || "en";

        this.innerHTML = `
        <link rel="stylesheet" href="../style/css/components/header.css">
        <header class="cabecalho-principal p-3 border-bottom">
            <div class="container-fluid px-4">
                <div class="d-flex flex-wrap align-items-center justify-content-between">
                <a href="/index.html" class="logo-site text-decoration-none">PlaceFinder</a>
                <ul class="nav mx-auto mb-2 mb-md-0 lista-navegacao">
                    <li><a href="/index.html" class="nav-link px-3" data-i18n="nav_home">Home</a></li>
                    <li><a href="about.html" class="nav-link px-3" data-i18n="nav_about">About</a></li>
                    ${estaLogado ? `<li><a href="map.html" class="nav-link px-3" data-i18n="nav_map">Map</a></li>` : ''}
                </ul>
                <div class="d-flex gap-3 align-items-center bloco-botoes">
                    <div class="lang-dropdown" id="langDropdown">
                        <button class="lang-btn" id="langBtn">
                            🌐 <span id="currentLangLabel">${idiomaInicial.toUpperCase()}</span> <span class="lang-arrow">▼</span>
                        </button>
                        <div class="lang-menu">
                            <button class="lang-item" data-lang="en">EN</button>
                            <button class="lang-item" data-lang="pt">PT</button>
                        </div>
                    </div>
                    ${estaLogado ? `
                        <button id="btn-logout" class="btn btn-login" data-i18n="nav_logout">Sign Out</button>
                    ` : `
                        <a href="login.html" class="btn btn-login" data-i18n="nav_login">Login</a>
                        <a href="register.html" class="btn btn-signup" data-i18n="nav_register">Register</a>
                    `}
                </div>
                </div>
            </div>
        </header>        
        `;

        const dropdown = this.querySelector('#langDropdown');
        const btnLang = this.querySelector('#langBtn');
        const labelLang = this.querySelector('#currentLangLabel');
        const langItems = this.querySelectorAll('.lang-item');

        btnLang.addEventListener('click', (event) => {
            event.stopPropagation();
            dropdown.classList.toggle('open');
        });

        document.addEventListener('click', () => dropdown.classList.remove('open'));

        langItems.forEach(item => {
            item.addEventListener('click', () => {
                const novoIdioma = item.getAttribute('data-lang');
                localStorage.setItem('idioma', novoIdioma);
                labelLang.textContent = novoIdioma.toUpperCase();
                dropdown.classList.remove('open');
                window.dispatchEvent(new CustomEvent('idiomaMudou', { detail: novoIdioma }));
            });
        });

        const btnLogout = this.querySelector('#btn-logout');
        if (btnLogout) {
            btnLogout.addEventListener('click', (event) => {
                event.preventDefault();
                localStorage.removeItem("usuarioLogado");
                mostrarNotificacao(getTexto('logout_success'), 'success');
                setTimeout(() => { window.location.href = "login.html"; }, 1000);
            });
        }
    }
}
customElements.define("site-header", SiteHeader);