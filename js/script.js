$(document).ready(function () {
  $(".slider").slick({
    // arrows: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
//  скроллинг ссылок
document.getElementById("about_action").onclick = function () {
  document.getElementById("AboutUs").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("gallery_action").onclick = function () {
  document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("Gift_cards").onclick = function () {
  document.getElementById("outer").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("contact_action").onclick = function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
};
