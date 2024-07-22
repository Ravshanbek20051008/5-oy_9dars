import { createcard } from "./function_index.js";
const wrapper = document.getElementById("wrapper");

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://strapi-store-server.onrender.com/api/products/")
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      }
    })
    .then((data) => {
      if (data.data.length) {
        data.data.forEach(function (product) {
          let card = createcard(product);
          wrapper.innerHTML += card;
        });
      }
      let cards = document.querySelectorAll(".card");
      cards.length &&
        cards.forEach(function (card) {
          card.addEventListener("click", function () {
            window.location.assign(
              "http://127.0.0.1:5500/index.html/pages/details.html"
            );
          });
        });
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(function () {
      loader.remove();
    });
});
