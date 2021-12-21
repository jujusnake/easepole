// vanilla JS
// init with element
var grid = document.querySelector(".sub-pics");

imagesLoaded(grid, function () {
  // init Isotope after all images have loaded
  msnry = new Masonry(grid, {
    itemSelector: ".sub-pic",
    columnWidth: ".grid-sizer",
    percentPosition: true,
  });
});

var msnry = new Masonry(".grid", {
  // options...
});

const toTop = document.querySelector(".btn-top");

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

toTop.addEventListener("click", scrollToTop);

const modal = document.querySelector(".modal");

function onClick(element) {
  document.getElementById("modalImg").src = element.src;
  modal.classList.add("modal-visible");
  document.body.classList.add("stop-scroll");
}

const closeModal = () => {
  modal.classList.remove("modal-visible");
  document.body.classList.remove("stop-scroll");
};

modal.addEventListener("click", closeModal);
