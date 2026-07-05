export async function viaCep(cep) {
    if (!cep) return;

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        const dados = await resposta.json();

        if (dados.erro) {
            throw new Error("CEP não encontrado.");
        }

        return dados;

    } catch (error) {
        console.error(error.message);
        throw error;
    }
}