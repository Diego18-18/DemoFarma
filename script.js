/* ********** Menu ********** */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn");
  $menu = d.querySelector(".menu");
  $curtain = d.querySelector(".curtain");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
    $curtain.classList.toggle("close");
  });

  $curtain.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
    $curtain.classList.add("close");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
    $curtain.classList.add("close");
  });
})(document);

/* ********** Slider ********** */

const d = document,
  $grande = d.querySelector(".grande"),
  $punto = d.querySelectorAll(".punto"),
  $flecha = d.querySelectorAll(".flecha");

$punto.forEach((cadaPunto, i) => {
  $punto[i].addEventListener("click", () => {
    let position = i,
      operacion = position * -50;

    $grande.style.transform = `translateX(${operacion}%)`;

    $punto.forEach((cadaPunto, i) => {
      $punto[i].classList.remove("activo");
    });
    $punto[i].classList.add("activo");
  });
});

$flecha.forEach((cadaFlecha, i) => {
  $flecha[i].addEventListener("click", (e) => {
    e.preventDefault();
    let position = i,
      operacion = position * -50;

    $grande.style.transform = `translateX(${operacion}%)`;

    $punto.forEach((cadaPunto, i) => {
      $punto[i].classList.remove("activo");
    });
    $punto[i].classList.add("activo");
  });
});
