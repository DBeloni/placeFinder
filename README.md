# PlaceFinder 📍

O **PlaceFinder** é um sistema web modular para busca e localização de serviços e estabelecimentos ao redor de um CEP específico. A aplicação foi desenhada com foco em componentização pura (Web Components nativos) e design responsivo, integrada futuramente com APIs de autenticação.

---

## 🎨 Paleta de Cores (Identity)

O projeto utiliza um tema escuro e tecnológico baseado estritamente nas seguintes variáveis CSS:

* **Fundo Principal / Contêineres Escuros:** `--color1: #0d0f36;`
* **Bordas e Elementos Secundários:** `--color2: #294380;`
* **Destaques e Links Ativos:** `--color3: #69d2cd;`
* **Badges e Confirmações:** `--color4: #b9f1d6;`
* **Textos de Destaque / Contraste:** `--color5: #f1f6ce;`

---

## 📁 Estrutura do Projeto

A arquitetura do repositório está organizada de forma modular, separando as visões, componentes reutilizáveis e serviços de API:

```text
├── pages/
│   ├── about.html          # Página institucional sobre o projeto
│   ├── index.html          # Landing page / Home de visitantes
│   ├── login.html          # Tela de autenticação (Sign In)
│   ├── map.html            # Área restrita (Buscador & Mapa interativo)
│   └── register.html       # Tela de cadastro de novos usuários
│
├── script/
│   ├── components/         # Web Components nativos (Shadow DOM livre)
│   │   ├── card-local.js   # Card customizado para exibição de locais localizados
│   │   ├── site-footer.js  # Rodapé dinâmico (adapta-se pós-login)
│   │   └── site-header.js  # Cabeçalho dinâmico (chaveia entre Login/Sign Out)
│   │
│   └── services/           # Regras de negócio e consumo de APIs
│       ├── auth-service.js # Gerenciamento de sessão e integração auth
│       ├── cep.js          # Maestro responsável pela orquestração do CEP
│       ├── map.js          # Inicialização e renderização do mapa (Leaflet)
│       ├── nominatim.js    # Integração com a API Nominatim (Geocoding)
│       ├── search.js       # Busca de serviços ao redor das coordenadas
│       └── viacep.js       # Integração com a API ViaCEP
│
└── style/
    └── css/                # Arquivos de estilização segmentados
        ├── components/     # CSS exclusivo dos componentes reutilizáveis
        ├── general.css     # Estilos globais e variáveis de cor
        └── grid.css        # Estrutura de layout e utilitários
