export async function buscarCoordenadas(dadosEndereco) {
    if (!dadosEndereco || dadosEndereco.erro) {
        throw new Error("Dados de endereço inválidos para busca.");
    }

    const enderecoCompleto = `${dadosEndereco.logradouro}, ${dadosEndereco.bairro}, ${dadosEndereco.localidade} - ${dadosEndereco.uf}`;

    const query = encodeURIComponent(enderecoCompleto);
    const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'PlaceFinderAppCurso/1.0' 
            }
        });
        const dados = await response.json();

        if (!dados || dados.length === 0) {
            throw new Error("Nenhum local encontrado para este endereço.");
        }

        return {
            lat: parseFloat(dados[0].lat),
            lon: parseFloat(dados[0].lon),
            display_name: dados[0].display_name
        };

    } catch (erro) {
        throw new Error("Falha na comunicação com o Nominatim: " + erro.message);
    }
}