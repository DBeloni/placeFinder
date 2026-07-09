import { viaCep } from './services/viacep.js';
import { buscarCoordenadas } from './services/nominatim.js';
import { map, camadaMarcadores } from './map.js'; 
import { focarNoCep, buscarServicosAoRedor } from './search.js'; 
import { mostrarNotificacao, getTexto } from './utils/i18n.js';

const campoCep = document.querySelector('#cep');
const campoCategoria = document.querySelector('#categoria-servico');
const campoRaio = document.querySelector('#raio');
const botaoBuscar = document.querySelector('button[type="submit"]');

function renderizarResultados(listaDeLocais) {
    const container = document.querySelector('.lista-locais');
    if (!container) return;

    container.innerHTML = '';

    if (listaDeLocais.length === 0) {
        container.innerHTML = `<p style="text-align:center; opacity:0.6; font-size:0.9rem; margin-top:20px;">${getTexto('error_cep_not_found')}</p>`;
        return;
    }

    listaDeLocais.forEach((local, index) => {
        const card = document.createElement('card-local');
        const textoDistancia = local.distancia > 1000 
            ? `${(local.distancia / 1000).toFixed(1)} km` 
            : `${Math.round(local.distancia)} metros`;

        card.setAttribute('nome', `${index + 1}. ${local.nome}`);
        card.setAttribute('nota', '4.5');
        card.setAttribute('endereco', `📍 A ${textoDistancia}`);
        card.setAttribute('link-mapa', '#');

        card.addEventListener('click', () => { map.flyTo([local.lat, local.lon], 17); });
        container.appendChild(card);
    });
}

async function executarProcuraCompleta() {
    const cepBruto = campoCep.value;
    const categoriaSelecionada = campoCategoria.value;
    const raioInformado = campoRaio.value;

    if (!cepBruto || !categoriaSelecionada || !raioInformado) {
        mostrarNotificacao(getTexto("error_fill_all_fields"), "error");
        return;
    }

    try {
        camadaMarcadores.clearLayers();

        const dadosEndereco = await viaCep(cepBruto);
        const coordenadas = await buscarCoordenadas(dadosEndereco);
        
        focarNoCep(map, coordenadas);
        
        L.marker([coordenadas.lat, coordenadas.lon]).addTo(camadaMarcadores)
            .bindPopup("<b>Você está aqui!</b>").openPopup();

        const locaisEncontrados = await buscarServicosAoRedor(coordenadas, categoriaSelecionada, raioInformado);
        
        const pontoUsuario = L.latLng(coordenadas.lat, coordenadas.lon);
        
        const listaProcessada = locaisEncontrados.map(local => {
            const pontoLocal = L.latLng(local.lat, local.lon);
            const distancia = pontoUsuario.distanceTo(pontoLocal);
            return { ...local, distancia };
        });

        listaProcessada.sort((a, b) => a.distancia - b.distancia);
        renderizarResultados(listaProcessada);

        listaProcessada.forEach(local => {
            const textoDistancia = local.distancia > 1000 
                ? `${(local.distancia / 1000).toFixed(1)} km` 
                : `${Math.round(local.distancia)} metros`;

            L.marker([local.lat, local.lon])
                .addTo(camadaMarcadores)
                .bindPopup(`<b>${local.nome}</b><br>Distância: ${textoDistancia}`);
        });

    } catch (erro) {
        mostrarNotificacao(getTexto(erro.message), "error");
    }
}

botaoBuscar.addEventListener('click', (evento) => {
    evento.preventDefault();
    executarProcuraCompleta();
});