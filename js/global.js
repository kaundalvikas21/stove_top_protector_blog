const menu_off_canvas = document.querySelector(".menu_off_canvas");
const close_btn = document.querySelector(".close_btn");
const hamburger_btn = document.querySelectorAll(".hamburger_btn");
const overlay = document.querySelector(".overlay");

//menu_off_canvas_js
hamburger_btn.forEach(btn=>{
  btn.addEventListener("click", () => {
    menu_off_canvas.classList.add("open");
    overlay_add();
  });
})


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

// rate_article.addEventListener("click", () => {
//   model_rating.classList.add("open_rating_model");
//   overlay_add();
// });

// Frequently Asked Questions (FAQs)_js
const accordionCards = document.querySelectorAll(".accordion_card");

accordionCards.forEach((card) => {
  card.addEventListener("click", () => {
    // Remove 'active' class from all cards
    accordionCards.forEach((otherCard) => {
      otherCard.classList.remove("active");
   
    });

    // Add 'active' class to the clicked card
    card.classList.add("active");
  });
});


// mobile_filter_btn
const filterBtn = document.querySelector(".filter_btn");
const mobile_list_bar = document.querySelector(".mobile_list_bar");
const arrowDown = document.querySelector(".arrow_down");

filterBtn.addEventListener("click", function () {
  mobile_list_bar.classList.toggle("active");
  arrowDown.classList.toggle("rotate");
});

