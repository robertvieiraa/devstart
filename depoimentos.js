let depoimentos = []

async function buscarDepoimentos() {
    try {
        let response = await fetch('cards.json')
        depoimentos = await response.json()
        exibirDepoimentos(depoimentos)
    } catch {
        alert('Erro ao buscar e exibir depoimentos.')
    }
}

document.addEventListener('DOMContentLoaded', buscarDepoimentos)

function exibirDepoimentos(depoimentos) {
    let containerDepoimentos = document.querySelector('.container-depoimentos')
    depoimentos.forEach(depoimento => {
        containerDepoimentos.innerHTML += `
        <div class="card-depoimento">
                            <div>
                                <img src="imagens/aspas.svg">
                                <p class="body3">${depoimento.conteudo}</p>
                            </div>
                        <div class="dados-depoimento">
                            <img src="${depoimento.imagem}">
                            <div class="dados-depoimento-texto">
                                <h6>${depoimento.autor}</h6>
                                <p class="cargo">${depoimento.profissao}</p>
                            </div>
                        </div>
        `
    });
}