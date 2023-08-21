import { servicesProducts } from "../services/products";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const url = document.querySelector("[data-url").value;
  const name = document.querySelector("[data-nome").value;
  const price = document.querySelector("[data-preco").value;

  servicesProducts
    .createProducts(url, name, price)
    .then((response) => {
      window.location.href("../index.html");
    })
    .catch((error) => {
      console.log("error");
    });
});
