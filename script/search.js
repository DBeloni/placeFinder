export function focarNoCep(mapa, coordenadas) {
    if (!mapa || !coordenadas) {
        throw new Error("Mapa ou coordenadas não foram fornecidos.");
    }

    try {
        const { lat, lon } = coordenadas;
        mapa.setView([lat, lon], 15);
    } catch (erro) {
        throw new Error("Falha ao focar a busca no mapa: " + erro.message);
    }
}

export async function buscarServicosAoRedor(coordenadas, categoriaHtml, raioKm) {
    if (!coordenadas || !categoriaHtml || !raioKm) {
        throw new Error("Parâmetros insuficientes para realizar a busca.");
    }

    const dicionarioCategorias = {
        academia: 'gym',
        supermercado: 'supermarket',
        posto: 'fuel',
        hospital: 'hospital',
        restaurante: 'restaurant',
        farmacia: 'pharmacy',
        igreja: 'place_of_worship'
    };

    const amenity = dicionarioCategorias[categoriaHtml];
    if (!amenity) {
        throw new Error("Categoria de serviço não reconhecida.");
    }

    const raioMetros = parseFloat(raioKm) * 1000;
    const { lat, lon } = coordenadas;

    const query = `[out:json][timeout:15];node(around:${raioMetros},${lat},${lon})["amenity"="${amenity}"];out;`;
    
    const servidoresOverpass = [
        'https://overpass-api.de/api/interpreter',
        'https://overpass.kumi.systems/api/interpreter',
        'https://overpass.nchc.org.tw/api/interpreter'
    ];

    let dados = null;

    for (const servidor of servidoresOverpass) {
        try {
            const url = `${servidor}?data=${encodeURIComponent(query)}`;
            const resposta = await fetch(url);

            if (resposta.ok) {
                dados = await resposta.json();
                break;
            }
        } catch (e) {
            console.warn(`Servidor ${servidor} indisponível ou bloqueado. Tentando o próximo...`);
        }
    }

    if (!dados) {
        throw new Error("Os servidores de mapa estão sobrecarregados no momento. Aguarde alguns segundos e tente novamente.");
    }

    if (!dados.elements || dados.elements.length === 0) {
        return [];
    }

    return dados.elements.map(local => ({
        id: local.id,
        lat: local.lat,
        lon: local.lon,
        nome: local.tags.name || "Estabelecimento sem nome informado"
    }));
}