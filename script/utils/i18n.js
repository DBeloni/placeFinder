export const traducoes = {
    en: {
        nav_home: "Home", nav_about: "About", nav_map: "Map", nav_login: "Login", nav_register: "Register", nav_logout: "Sign Out",
        hero_title: "Find the perfect places around you",
        hero_subtitle: "Quickly discover gyms, supermarkets, gas stations, and more using your zip code.",
        login_title: "Sign In", login_subtitle: "Welcome back! Please enter your details.",
        signup_title: "Sign Up", signup_subtitle: "Get started with a new experience.",
        label_email: "E-mail", placeholder_email: "Enter your email",
        label_password: "Password", placeholder_password: "Enter your password",
        label_confirm_password: "Confirm Password", placeholder_confirm_password: "Confirm your password",
        btn_register: "Register",
        contact_title: "Contact Us", contact_subtitle: "Get in touch",
        contact_desc: "If you have any questions, suggestions, feedback, or need support, please contact us.",
        contact_info_title: "Contact Information", contact_name_label: "Name:",
        form_title: "Send a Message", form_instruction: "Fill out the fields below and send your request.",
        form_label_name: "Name", form_ph_name: "Enter your full name",
        form_label_email: "Email Address", form_ph_email: "Your best email",
        form_label_subject: "Subject", form_ph_subject: "Reason for contact",
        form_label_message: "Message", form_ph_message: "Describe your question...",
        form_btn_send: "Send Message",
        map_searcher_title: "Search engine", map_label_cep: "Enter the location ZIP code:",
        map_label_category: "Choose the service to search for:", map_opt_placeholder: "What are you looking for nearby?",
        map_opt_gym: "Gym", map_opt_market: "Supermarket", map_opt_gas: "Gas Station",
        map_opt_hospital: "Hospital", map_opt_restaurant: "Restaurant", map_opt_pharmacy: "Pharmacy", map_opt_church: "Church",
        map_label_radius: "Enter the radius range from the ZIP Code:", map_ph_radius: "Radius in Km",
        map_btn_search: "Search", map_results_title: "Search results:",
        map_ai_warning: "PlaceFinder is not human, it can make mistakes!",
        
        // --- Novas chaves de Feedback e Erros ---
        logout_success: "You have logged out successfully!",
        error_passwords_dont_match: "Passwords do not match!",
        error_fill_all_fields: "Please fill in all form fields.",
        error_email_in_use: "This email is already registered! Try logging in.",
        error_weak_password: "The password must be at least 6 characters long.",
        error_invalid_email: "The email format is invalid.",
        error_user_not_found: "User not found or invalid password. Please check your data.",
        error_generic: "An error occurred. Please try again.",
        error_cep_not_found: "ZIP code not found.",
        error_invalid_address: "Invalid address data for search.",
        error_nominatim_failed: "Failed to communicate with map provider.",
        error_api_overloaded: "The map API is currently overloaded. Try again in a few seconds."
    },
    pt: {
        nav_home: "Início", nav_about: "Sobre", nav_map: "Mapa", nav_login: "Entrar", nav_register: "Cadastrar", nav_logout: "Sair",
        hero_title: "Encontre os lugares perfeitos perto de você",
        hero_subtitle: "Descubra rapidamente academias, supermercados, postos de combustível e mais usando seu CEP.",
        login_title: "Entrar", login_subtitle: "Bem-vindo de volta! Por favor, insira seus dados.",
        signup_title: "Cadastrar-se", signup_subtitle: "Comece uma nova experiência.",
        label_email: "E-mail", placeholder_email: "Digite seu e-mail",
        label_password: "Senha", placeholder_password: "Digite sua senha",
        label_confirm_password: "Confirmar Senha", placeholder_confirm_password: "Confirme sua senha",
        btn_register: "Cadastrar",
        contact_title: "Contate-nos", contact_subtitle: "Entre em contato",
        contact_desc: "Se você tiver dúvidas, sugestões, feedback ou precisar de suporte, entre em contato conosco.",
        contact_info_title: "Informações de Contato", contact_name_label: "Nome:",
        form_title: "Enviar uma Mensagem", form_instruction: "Preencha os campos abaixo e envie sua solicitação.",
        form_label_name: "Nome", form_ph_name: "Digite seu nome completo",
        form_label_email: "Endereço de E-mail", form_ph_email: "Seu melhor e-mail",
        form_label_subject: "Assunto", form_ph_subject: "Motivo do contato",
        form_label_message: "Mensagem", form_ph_message: "Descreva sua dúvida...",
        form_btn_send: "Enviar Mensagem",
        map_searcher_title: "Buscador", map_label_cep: "Digite o CEP do local:",
        map_label_category: "Escolha o serviço para buscar:", map_opt_placeholder: "O que você procura por perto?",
        map_opt_gym: "Academia", map_opt_market: "Supermarket / Mercado", map_opt_gas: "Posto de Combustível",
        map_opt_hospital: "Hospital", map_opt_restaurant: "Restaurante", map_opt_pharmacy: "Farmácia", map_opt_church: "Igreja",
        map_label_radius: "Digite o raio de distância a partir do CEP:", map_ph_radius: "Raio em Km",
        map_btn_search: "Buscar", map_results_title: "Resultados da pesquisa:",
        map_ai_warning: "O PlaceFinder não é humano, ele pode cometer erros!",

        // --- Novas chaves de Feedback e Erros ---
        logout_success: "Você saiu do sistema com sucesso!",
        error_passwords_dont_match: "As senhas não coincidem!",
        error_fill_all_fields: "Por favor, preencha todos os campos do formulário.",
        error_email_in_use: "Este e-mail já está cadastrado no sistema! Tente fazer o login.",
        error_weak_password: "A senha deve ter pelo menos 6 caracteres.",
        error_invalid_email: "O formato do e-mail digitado é inválido.",
        error_user_not_found: "Usuário não encontrado ou senha inválida. Verifique os dados.",
        error_generic: "Ocorreu um erro. Por favor, tente novamente.",
        error_cep_not_found: "CEP não encontrado.",
        error_invalid_address: "Dados de endereço inválidos para busca.",
        error_nominatim_failed: "Falha na comunicação com o Nominatim.",
        error_api_overloaded: "A API do mapa está sobrecarregada no momento. Tente novamente em alguns segundos."
    }
};

export function getTexto(chave) {
    const idiomaAtual = localStorage.getItem('idioma') || 'en';
    return traducoes[idiomaAtual]?.[chave] || chave;
}

export function mostrarNotificacao(mensagem, tipo = 'error') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = 'position:fixed; top:20px; right:20px; z-index:10000; display:flex; flex-direction:column; gap:10px; font-family:sans-serif;';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.style.cssText = `background:${tipo === 'error' ? '#ff4d4d' : '#2ecc71'}; color:white; padding:14px 24px; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.15); font-size:14px; font-weight:600; opacity:0; transform:translateY(-20px); transition:all 0.3s ease;`;
    toast.textContent = mensagem;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '1'; toast.style.transform = 'translateY(0)'; }, 10);
    setTimeout(() => {
        toast.style.opacity = '0'; toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

export function aplicarTraducao() {
    const idiomaAtual = localStorage.getItem('idioma') || 'en';
    const elementos = document.querySelectorAll('[data-i18n]');
    elementos.forEach(el => {
        const chave = el.getAttribute('data-i18n');
        if (traducoes[idiomaAtual] && traducoes[idiomaAtual][chave]) {
            if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && el.hasAttribute('placeholder')) {
                el.placeholder = traducoes[idiomaAtual][chave];
            } else {
                el.textContent = traducoes[idiomaAtual][chave];
            }
        }
    });
}
window.addEventListener('idiomaMudou', aplicarTraducao);
document.addEventListener('DOMContentLoaded', aplicarTraducao);