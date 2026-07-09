export async function viaCep(cep) {
    if (!cep) return;
    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resposta.json();
        if (dados.erro) {
            throw new Error("error_cep_not_found");
        }
        return dados;
    } catch (error) {
        if (error.message === "error_cep_not_found") throw error;
        throw new Error("error_generic");
    }
}