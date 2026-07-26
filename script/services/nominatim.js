export async function buscarCoordenadas(dadosEndereco) {
    if (!dadosEndereco || dadosEndereco.erro) {
        throw new Error("error_invalid_address");
    }
    const enderecoCompleto = `${dadosEndereco.logradouro}, ${dadosEndereco.bairro}, ${dadosEndereco.localidade} - ${dadosEndereco.uf}`;
    const query = encodeURIComponent(enderecoCompleto);
    
    const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1&email=contato@placefinder.com`;

    try {
        const response = await fetch(url);
        const dados = await response.json();
        
        if (!dados || dados.length === 0) {
            throw new Error("error_cep_not_found");
        }
        return { lat: parseFloat(dados[0].lat), lon: parseFloat(dados[0].lon), display_name: dados[0].display_name };
    } catch (erro) {
        if (erro.message === "error_cep_not_found") throw erro;
        throw new Error("error_nominatim_failed");
    }
}