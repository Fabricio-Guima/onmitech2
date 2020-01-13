/*constantes */
const $header = document.querySelector("header");
const $logo = document.querySelectorAll(".logo")[0];
const $navBar = document.querySelectorAll(".nav-bar")[0];
const $intLinks = document.querySelectorAll(".int-link a");
const $toTop = document.querySelectorAll(".to-top")[0];
const $menuHamburguer = document.querySelectorAll(".menu")[0];

/* menu dinâmico */

window.addEventListener("scroll", toggleHeader, false);

function toggleHeader() {
  if (window.pageYOffset > 60 && $header.classList.contains("max-header")) {
    $header.classList.remove("max-header");
    $header.classList.add("min-header");
    $logo.firstElementChild.setAttribute("src", "img/logo-2.png");
    $logo.classList.remove("max-logo");
    $logo.classList.add("min-logo");
    $navBar.classList.remove("max-nav");
    $navBar.classList.add("min-nav");
    $menuHamburguer.firstElementChild.classList.remove("max-hamburguer");
    $menuHamburguer.firstElementChild.classList.add("min-hamburguer");
  } else if (
    window.pageYOffset <= 59 &&
    $header.classList.contains("min-header")
  ) {
    $header.classList.remove("min-header");
    $header.classList.add("max-header");
    $logo.firstElementChild.setAttribute("src", "img/logo-1.png");
    $logo.classList.add("max-logo");
    $logo.classList.remove("min-logo");
    $navBar.classList.remove("min-nav");
    $navBar.classList.add("max-nav");
    $menuHamburguer.firstElementChild.classList.add("max-hamburguer");
    $menuHamburguer.firstElementChild.classList.remove("min-hamburguer");
  }
}

/*scroll suave para links internos 
$intLinks.forEach(function(cur, idx) {
  cur.addEventListener(
    "click",
    function(e) {
      e.preventDefault();
      window.scrollTo({
        top:
          document.querySelector(cur.getAttribute("href")).offsetTop -
          $navBar.offsetHeight,
        left: 0,
        behavior: "smooth"
      });
    },
    false
  );
});
*/

/*menu mobile click de abrir e fechar */

$menuHamburguer.addEventListener("click", toggleMenu, false);
let isOpen = false;
function toggleMenu() {
  if (!isOpen) {
    $navBar.classList.add("menu-opened");
    isOpen = true;
  } else {
    $navBar.classList.remove("menu-opened");
    isOpen = false;
  }
}
/*ao clicar no link mobile, o menu fecha para vc ver em que seção está*/
$navBar.addEventListener("click", navClick, false);

function navClick(evt) {
  if (evt.target.tagName == "A") {
    toggleMenu();
  }
}

/*botao que leva ao topo (scroll 0) */

window.addEventListener(
  "scroll",
  () => {
    if (window.pageYOffset > 500) {
      $toTop.classList.add("active");
    } else {
      $toTop.classList.remove("active");
    }
  },
  false
);

$toTop.addEventListener(
  "click",
  function() {
    evt.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth
    });
  },
  false
);
