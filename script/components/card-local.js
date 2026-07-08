class CardLocal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['nome', 'nota', 'endereco', 'link-mapa'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const nome = this.getAttribute('nome') || 'Nome do Local';
        const nota = this.getAttribute('nota') || '0.0';
        const endereco = this.getAttribute('endereco') || 'Endereço não informado';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin-bottom: 14px;
                }
                
                .card {
                    background: var(--color1);
                    border: 1px solid var(--color2);
                    border-radius: 12px;
                    padding: 18px;
                    transition: all 0.25s ease-in-out;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    cursor: pointer;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
                }
                
                .card:hover {
                    border-color: var(--color3);
                    background: var(--color2);
                    transform: translateY(-2px);
                }
                
                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 12px;
                    margin-bottom: 10px;
                }
                
                .titulo {
                    font-size: 15px;
                    font-weight: 600;
                    color: var(--color5);
                    margin: 0;
                    line-height: 1.4;
                    letter-spacing: 0.3px;
                }
                
                .badge-nota {
                    background: var(--color3);
                    color: var(--color1);
                    font-size: 11px;
                    font-weight: 700;
                    padding: 4px 8px;
                    border-radius: 6px;
                    white-space: nowrap;
                }
                
                .endereco {
                    color: var(--color4);
                    font-size: 13px;
                    font-weight: 500;
                    margin: 0;
                }
            </style>

            <div class="card">
                <div class="header">
                    <h4 class="titulo">${nome}</h4>
                    <span class="badge-nota">★ ${nota}</span>
                </div>
                <p class="endereco">${endereco}</p>
            </div>
        `;
    }
}

customElements.define('card-local', CardLocal);