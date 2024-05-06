const menu_off_canvas = document.querySelector(".menu_off_canvas");
const close_btn = document.querySelector(".close_btn");
const hamburger_btn = document.querySelector(".hamburger_btn");
const overlay = document.querySelector(".overlay");


hamburger_btn.addEventListener("click", () => {
  menu_off_canvas.classList.add("open");
  overlay_add();
});

close_btn.addEventListener("click", () => {
  menu_off_canvas.classList.remove("open");
  overlay_remove();
});

function overlay_add() {
  overlay.classList.add("open_overlay");
  overlay.addEventListener("click", overlay_remove);
};

function overlay_remove() {
  overlay.classList.remove("open_overlay");
  overlay.removeEventListener("click", overlay_remove);
};

overlay.addEventListener("click", ()=>{
  menu_off_canvas.classList.remove("open");
  overlay_remove();
});



