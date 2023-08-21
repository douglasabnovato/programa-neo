const newProduct = (name, imageUrl, price, id, alt, section, description) => {
  const card = document.createElement("div");
  const content = `
        <div class="produto">
            <img src="${newProduct.imageUrl}" alt="produto">
            <h1 class="product-name">${newProduct.name}</h1>
            <p class="preco">${newProduct.price}</p>
            <a href="../views/produto.html?id${newProduct.id}" class="ver-produto">Ver Produto</a>
        </div>
        `;
  card.innerHTML = content;

  return card;
};

const products = document.querySelector(["data-product"]);
