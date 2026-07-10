const estaLogado = localStorage.getItem("usuarioLogado") === "true";

this.innerHTML = `
<link rel="stylesheet" href="/style/css/components/footer.css">
<footer class="rodapeGeral py-4">
    <div class="container text-center">
        <ul class="nav justify-content-center mb-3 lista-links-footer">
            <li><a href="/index.html" class="nav-link px-3">${getTexto('nav_home')}</a></li>
            <li><a href="/pages/about.html" class="nav-link px-3">${getTexto('nav_about')}</a></li>
            
            ${estaLogado ? `<li><a href="/pages/map.html" class="nav-link px-3">${getTexto('nav_map')}</a></li>` : ''}
            
            ${!estaLogado ? `
                <li><a href="/pages/register.html" class="nav-link px-3">${getTexto('nav_register')}</a></li>
                <li><a href="/pages/login.html" class="nav-link px-3">${getTexto('nav_login')}</a></li>
            ` : ''}
        </ul>
        <p class="mb-0">&copy; 2026 PlaceFinder, Inc</p>
    </div>
</footer>
`;