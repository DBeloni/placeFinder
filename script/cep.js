import { viaCep } from './services/viacep.js';
import { buscarCoordenadas } from './services/nominatim.js';
import { map } from './map.js'; 
import { focarNoCep, buscarServicosAoRedor } from './search.js'; 

const campoCep = document.querySelector('#cep');
const campoCategoria = document.querySelector('#categoria-servico');
const campoRaio = document.querySelector('#raio');
const botaoBuscar = document.querySelector('button[type="submit"]');

async function executarProcuraCompleta() {
    const cepBruto = campoCep.value;
    const categoriaSelecionada = campoCategoria.value;
    const raioInformado = campoRaio.value;

    if (!cepBruto || !categoriaSelecionada || !raioInformado) {
        alert("Por favor, preencha todos os campos do formulário.");
        return;
    }

    try {
        const dadosEndereco = await viaCep(cepBruto);
        
        const coordenadas = await buscarCoordenadas(dadosEndereco);
        
        focarNoCep(map, coordenadas);
        
        const locaisEncontrados = await buscarServicosAoRedor(coordenadas, categoriaSelecionada, raioInformado);
        
        console.log("Locais encontrados ao redor:", locaisEncontrados);
        
        locaisEncontrados.forEach(local => {
            L.marker([local.lat, local.lon])
                .addTo(map)
                .bindPopup(`<b>${local.nome}</b>`);
        });

    } catch (erro) {
        console.error("Erro no fluxo orquestrado:", erro.message);
        alert(erro.message);
    }
}

botaoBuscar.addEventListener('click', (evento) => {
    evento.preventDefault();
    executarProcuraCompleta();
});