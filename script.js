const bancoDeProdutos = [
  {
    id: 1,
    nome: "bracelete sol",
    preco: "6,00",
    categoria: "pulseiras",
    imagem: "imagens/braceletesun.jpeg"
  },
  {
    id: 2,
    nome: "bracelete azul estrela ",
    preco: "6,00",
    categoria: "pulseiras",
    imagem: "imagens/braceleteblustar.jpeg"
  },
  {
    id: 3,
    nome: "pulseira rosa ursinho",
    preco: "6,00",
    categoria: "pulseiras",
    imagem: "imagens/pulseirapink.jpeg"
  },
  {
    id: 4,
    nome: "pulseira simples",
    preco: "4,00",
    categoria: "pulseiras",
    imagem: "imagens/pulseirasimples.jpeg"
  },
  {
    id: 5,
    nome: "chaveiro verde",
    preco: "5,00",
    categoria: "chaveiros",
    imagem: "imagens/chaveirogreen.jpeg"
  },
  {
    id: 6,
    nome: "chaveiropink",
    preco: "5,00",
    categoria: "chaveiros",
    imagem: "imagens/chaveiropink.jpeg"
  },
  {
    id: 7,
    nome: "bracelete rosa estrela",
    preco: "6,00",
    categoria: "pulseiras",
    imagem: "imagens/braceletepink.jpeg"
  },
  {
    id: 8,
    nome: "pulseira regulavel star",
    preco: "6,00",
    categoria: "pulseiras",
    imagem: "imagens/pulseiraregulavelstar.jpeg"
  },
  {
    id: 9,
    nome: "anelrubi",
    preco: "3,00",
    categoria: "aneis",
    imagem: "imagens/anelrubi.jpeg"
  },
  {
    id: 10,
    nome: "anel perola",
    preco: "3,00",
    categoria: "aneis",
    imagem: "imagens/anelperola.jpeg"
  },
  {
    id: 11,
    nome: "colar regulaver estrela",
    preco: "7,00",
    categoria: "colares",
    imagem: "imagens/colarregulavelstar.jpeg"
  },
  {
    id: 12,
    nome: "correntinha simples",
    preco: "5,00",
    categoria: "colares",
    imagem: "imagens/correntinhasimples.jpeg"
  }
];



function renderizarProdutos(listaDeProdutos) {
  const container = document.getElementById("container-produtos");
  container.innerHTML = ""; // Limpa os cards anteriores

  if (listaDeProdutos.length === 0) {
    container.innerHTML = `
      <p style="grid-column: 1/-1; text-align: center; color: #fff; padding: 20px;">
        Nenhum produto encontrado nesta categoria.
      </p>
    `;
    return;
  }

  listaDeProdutos.forEach(produto => {
    const cardHTML = `
      <div class="product-card">
        <img src="${produto.imagem}" alt="${produto.nome}" class="product-image" />
        <button class="buy-btn" onclick="comprarProduto('${produto.nome}', '${produto.preco}')">
          R$ ${produto.preco}<br>tenho interesse!
        </button>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}




function filtrarProdutos(categoriaSelecionada) {
  if (categoriaSelecionada === "todos") {
    renderizarProdutos(bancoDeProdutos);
  } else {
    const produtosFiltrados = bancoDeProdutos.filter(
      produto => produto.categoria === categoriaSelecionada
    );
    renderizarProdutos(produtosFiltrados);
  }
}




function comprarProduto(nomeProduto, precoProduto) {
  const numeroTelefone = "5568984053618";
  const mensagem = encodeURIComponent(`Olá! Tenho interesse no produto: ${nomeProduto} (R$ ${precoProduto})`);
  const url = `https://wa.me/${numeroTelefone}?text=${mensagem}`;
  
  window.open(url, "_blank");
}


document.addEventListener("DOMContentLoaded", () => {
  renderizarProdutos(bancoDeProdutos);
});