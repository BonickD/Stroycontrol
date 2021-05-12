//<ПОДКЛЮЧЕНИЕ JS ФАЙЛОВ>=======================================================================================================================================================>
;
;
function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support === true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;
;
;
;
new Swiper('.swiper-choose__container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  spaceBetween: 50,
});
;
;
//</ПОДКЛЮЧЕНИЕ JS ФАЙЛОВ>=======================================================================================================================================================>

document.querySelector('.icon-menu').addEventListener('click', () => {
  document.querySelector('.icon-menu').classList.toggle('_active');
  document.querySelector('.header__menu').classList.toggle('_active');
  document.querySelector('body').classList.toggle('_lock');
});

//=======================================================================================================================================================>
function order() {
  const btn = document.querySelectorAll('.order');
  const pop = document.querySelector('.popup');
  const cancel = document.querySelector('.popup__cancel');
  btn.forEach((el) => {
    el.addEventListener('click', () => {
      pop.classList.add('_active');
      document.querySelector('body').classList.add('_lock');
    });
  });
  function hide() {
    pop.classList.remove('_active');
    document.querySelector('body').classList.remove('_lock');
  }
  cancel.addEventListener('click', hide);
  pop.addEventListener('click', (log) => {
    if (log.target.classList.contains('popup')) hide();
  });
}
order();
//=======================================================================================================================================================>
function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.querySelector('.header__progress-bar').style.width = scrolled + '%';
}
function myHeader() {
  if (document.documentElement.scrollTop > 96) document.querySelector('.header').classList.add('_scroll');
  else document.querySelector('.header').classList.remove('_scroll');
}

window.onscroll = function () {
  myFunction();
  myHeader();
};
