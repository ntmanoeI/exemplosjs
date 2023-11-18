// Dados de receitas em um vetor de elementos JSON
var receitas = [
    {
        titulo: "Arroz de Couve-Flor",
        imagem: "/imagens/arroz.png",
        preparo: "Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar",
        ingredientes: ["Arroz", "Couve-Flor", "Cebola Média", "Azeite"]
    },
    {
        titulo: "Bolo de Café",
        imagem: "/imagens/bolo.png",
        preparo: "Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura.",
        ingredientes: ["Farinha de Trigo", "Açucar", "Café Coado", "Chocolate em Pó", "Ovos"]
    },{
        titulo: "Coxinha de Brigadeiro",
        imagem: "/imagens/coxinha.jpeg",
        preparo: "Junte o leite condensado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe no granulado.",
        ingredientes: ["Leite Condensado", "Chocolate em Pó", "Manteiga", "Morango", "Chocolate Granulado"]
    },
    // Adicione mais receitas conforme necessário
];

// Função para obter a lista de ingredientes em HTML
function getListaIngredientes(ingredientes) {
    return `<ul>${ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).reduce((a, b) => a + b, '')}</ul>`;
}

// Função para obter o card da receita em HTML
function getCard(receita) {
    return `
        <div class="card m-2" style="width: 250px;">
            <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
            <div class="card-body">
                <h5 class="card-title">${receita.titulo}</h5>
                <div class="card-text">
                    ${getListaIngredientes(receita.ingredientes)}
                    <hr>
                    ${receita.preparo}
                </div>
            </div>
        </div>
    `;
}

// Função para preencher o catálogo de receitas
function preencheCatalogo() {
    var pnlCatalogo = document.getElementById("pnlCatalogo");

    // Obtendo o texto HTML para os painéis de receita
    var htmlReceitas = receitas.map(receita => getCard(receita)).reduce((a, b) => a + b, '');

    // Alterando o innerHTML de pnlCatalogo
    pnlCatalogo.innerHTML = htmlReceitas;
}
