let anchorSlider = (function () {
  function init() {
    // console.log("init anchorSlider");

    // Функционал для перехода по якорным ссылкам
    let singleTitlesItem = document.querySelectorAll(".goToAnchor");

    singleTitlesItem.forEach(function (item) {
      if (
        typeof item.hasAttribute("sub-href") !== "undefined" &&
        item.hasAttribute("sub-href") !== false
      ) {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          let hrefLink = $(this).attr("sub-href").substring(1);
          let offestY = $("#" + hrefLink).offset();

          let menuButton = this.closest(".header-nav").querySelector(".menu-btn");

          if (this.hasAttribute("sub-href") && menuButton.classList.contains("is-active")) {
            menuButton.classList.remove("is-active");
          }

          // скроллинг с плавной анимацией
          $("html, body")
            .stop()
            .animate({ scrollTop: offestY.top - heightHeader}, 300, "linear");
        });
      }
    });
  }

  return {
    init: init,
  };
})();

export { anchorSlider };
