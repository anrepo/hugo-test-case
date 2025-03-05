let burger = (function () {
  function init() {
    let btn = document.querySelector('.menu-btn')

    btn.addEventListener('click', function () {
      this.classList.toggle('is-active')
    })
  }

  return {
    init: init,
  };

})();

export { burger };