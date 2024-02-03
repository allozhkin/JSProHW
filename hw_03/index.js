"use strict";

const productName = document.querySelector(".product-name");
const productFeedback = document.querySelector(".product-feedback");
const btnEl = document.querySelector(".btn");
const ulEl = document.querySelector(".ul");
const feedbacks = [];
if (btnEl) {
  btnEl.addEventListener("click", addFeedback);

  function addFeedback() {
    let product = { name: "", feedback: "" };
    product.name = productName.value;
    product.feedback = productFeedback.value;
    feedbacks.push(product);
    localStorage.feedbacks = JSON.stringify(feedbacks);
  }
}

let products = localStorage.getItem("feedbacks");
let feedback = JSON.parse(products);
feedback.forEach((element) => {
  const liEl = document.createElement("li");
  const nameProduct = element.name;
  liEl.innerHTML = `имя товара: ${nameProduct}`;
  ulEl.appendChild(liEl);
  liEl.addEventListener("click", function (e) {
    const liFeedbacks = document.createElement("div");
    liFeedbacks.innerHTML = `отзыв: ${element.feedback}
    <button class="delete-button">delete</button>`;
    e.target.appendChild(liFeedbacks);
  });
  ulEl.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-button")) {
      const listIem = e.target.closest("div");
      listIem.parentNode.removeChild(listIem);
    }
  });
});
