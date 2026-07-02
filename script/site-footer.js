class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <footer class="rodape">
        
    <div class="coluna">
            <h4><strong>Place Finder</strong></h4>
            <p>Alta Credibilidade, Dirigo J. Jonah Jameson</p>
        </div>
        
        <h4>Editoriais</h4>
        
        <nav class="menu">
            <ul>
                <li><a href="/pages/index.html">Home</a></li>
                <li><a href="/pages/mapa.html">Mapa</a></li>
                <li><a href="/pages/inscreva.html">Inscreva-se</a></li>
                <li><a href="/pages/contato.html">Contate-nos</a></li>
            </ul>
        </nav>
        
        <h4>Institucional</h4>
        
        <nav class="menu">
            <ul>
                <li><a href="/pages/mapa.html">Mapa</a></li>
                <li><a href="/pages/inscreva.html">Inscreva-se</a></li>
                <li><a href="/pages/contato.html">Contate-nos</a></li>
            </ul>
        </nav>
    </footer>`
  }
}

customElements.define('site-footer', SiteFooter)


