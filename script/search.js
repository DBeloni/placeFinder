export function focarNoCep(mapa, coordenadas) {
    if (!mapa || !coordenadas) {
        throw new Error("Mapa ou coordenadas não foram fornecidos.");
    }

    try {
        const { lat, lon } = coordenadas;
        mapa.setView([lat, lon], 15);
        L.marker([lat, lon]).addTo(mapa);
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

    const query = `[out:json][timeout:25];node(around:${raioMetros},${lat},${lon})["amenity"="${amenity}"];out;`;

    try {
        const resposta = await fetch('https://overpass-api.de/api/interpreter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `data=${encodeURIComponent(query)}`
        });

        const textoResposta = await resposta.text();

        let dados;
        try {
            dados = JSON.parse(textoResposta);
        } catch (e) {
            throw new Error("A API do mapa está sobrecarregada no momento. Tente novamente em alguns segundos.");
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

    } catch (erro) {
        throw new Error("Falha ao consultar os serviços: " + erro.message);
    }
}