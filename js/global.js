const menu_off_canvas = document.querySelector(".menu_off_canvas");
const close_btn = document.querySelector(".close_btn");
const hamburger_btn = document.querySelector(".hamburger_btn");
const overlay = document.querySelector(".overlay");

//menu_off_canvas_js
hamburger_btn.addEventListener("click", () => {
  menu_off_canvas.classList.add("open");
  overlay_add();
});

close_btn.addEventListener("click", () => {
  menu_off_canvas.classList.remove("open");
  overlay_remove();
});

// functions_overlay
function overlay_add() {
  overlay.classList.add("open_overlay");
  overlay.addEventListener("click", overlay_remove);
  // document.body.style.overflow = "hidden";
}

function overlay_remove() {
  overlay.classList.remove("open_overlay");
  overlay.removeEventListener("click", overlay_remove);
  // document.body.style.overflow = "";
}
overlay.addEventListener("click", () => {
  menu_off_canvas.classList.remove("open");
  model_rating.classList.remove("open_rating_model");
  overlay_remove();
});

// rating_article
const rate_article = document.querySelector(".rate_article");
const model_rating = document.querySelector(".model_rating");

rate_article.addEventListener("click", () => {
  model_rating.classList.add("open_rating_model");
  overlay_add();
});

// Frequently Asked Questions (FAQs)_js
const accordion_card = document.querySelectorAll(".accordion_card");

accordion_card.addEventListener("click", () => {
  //  accordion_card.classList.toggle("active");
  console.log("hello");
});

