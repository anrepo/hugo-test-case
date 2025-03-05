let actualYear = (function () {
  function init() {
    document.querySelectorAll(".js--set-actual-year").forEach(function (item) {
      item.innerHTML = new Date().getFullYear();
    });
  }

  return {
    init: init,
  };

})();

export { actualYear };