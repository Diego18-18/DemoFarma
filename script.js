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
  $flechaLeft = d.querySelector("#flecha-left"),
  $flechaRight = d.querySelector("#flecha-right");

let ubication = 1;

$punto.forEach((cadaPunto, i) => {
  $punto[i].addEventListener("click", () => {
    let position = i,
      calculation = position * -50;

    ubication = i + 1;

    $grande.style.transform = `translateX(${calculation}%)`;

    $punto.forEach((cadaPunto, i) => {
      $punto[i].classList.remove("activo");
    });
    $punto[i].classList.add("activo");
  });
});

const next = () => {
  if (ubication < $punto.length) {
    calculation = ubication * -50;
    $grande.style.transform = `translateX(${calculation}%)`;

    $punto.forEach((cadaPunto, i) => {
      $punto[i].classList.remove("activo");
    });
    $punto[ubication].classList.add("activo");
    ++ubication;
  }
};

const prev = () => {
  if (ubication <= $punto.length && ubication > 1) {
    calculation = ubication * -50 + 100;
    $grande.style.transform = `translateX(${calculation}%)`;
    --ubication;

    $punto.forEach((cadaPunto, i) => {
      $punto[i].classList.remove("activo");
    });
    $punto[ubication - 1].classList.add("activo");
  }
};

$flechaRight.addEventListener("click", (e) => {
  e.preventDefault();
  next();
});

$flechaLeft.addEventListener("click", (e) => {
  e.preventDefault();
  prev();
});

let posX1, posX2;

$grande.addEventListener("mousedown", dragStart);

$grande.addEventListener("touchstart", dragStart);
$grande.addEventListener("touchmove", dragMove);
$grande.addEventListener("touchend", dragEnd);

function dragStart(e) {
  e.preventDefault();

  if (e.type === "touchstart") {
    posX1 = e.touches[0].clientX;
  } else {
    posX1 = e.clientX;

    d.onmouseup = dragEnd;
    d.onmousemove = dragMove;
  }
}

function dragMove(e) {
  if (e.type === "touchmove") {
    posX2 = posX1 - e.touches[0].clientX;
    posX1 = e.touches[0].clientX;
  } else {
    posX2 = posX1 - e.clientX;
    posX1 = e.clientX;
  }
}

function dragEnd() {
  if (posX2 >= 1) {
    next();
    posX2 = 0;
  } else if (posX2 <= -1) {
    prev();
    posX2 = 0;
  }

  d.onmouseup = null;
  d.onmousemove = null;
}
