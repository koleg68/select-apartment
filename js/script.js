
function showMobMenu() {
  const mobMenuBtn = document.querySelector(".humburger span");
  const mobMenu = document.querySelector('header nav');
  mobMenuBtn.addEventListener('click', ()=> {
    mobMenu.classList.toggle('show');
  })
}
showMobMenu();


$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".scrollUp").fadeIn();
    } else {
      $(".scrollUp").fadeOut();
    }
  });

  $(".scrollUp").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      700
    );
    return false;
  });
});

document.querySelector(".toggle input").checked = true;

//================== сортировка ===========================//

let myCont = document.querySelector(".card-row");
let arrow = document.querySelector(".arrow-price");

  let sortPrice = document.querySelector(".sort-click-price");
  sortPrice.addEventListener('click', function(e){ 
  e.target.classList.toggle("active");
  if (e.target.classList.contains("active")) {
    sortPrice = sortPriceUp();
    arrow.classList.remove("rotate");
  } else {
    sortPrice = sortPriceDown();
    arrow.classList.add("rotate");
  }
});

function sortPriceUp() {
  for (let i = 0; i < myCont.children.length; i++) {
    for (let j = i + 1; j < myCont.children.length; j++) {
      if (
        +myCont.children[i].getAttribute("data-price") >
        +myCont.children[j].getAttribute("data-price")
      ) {
        replacedNode = myCont.replaceChild(
          myCont.children[j],
          myCont.children[i]
        );
        insertAfter(replacedNode, myCont.children[i]);
      }
    }
  }
}

function sortPriceDown() {
  for (let i = 0; i < myCont.children.length; i++) {
    for (let j = i + 1; j < myCont.children.length; j++) {
      if (
        +myCont.children[i].getAttribute("data-price") <
        +myCont.children[j].getAttribute("data-price")
      ) {
        replacedNode = myCont.replaceChild(
          myCont.children[j],
          myCont.children[i]
        );
        insertAfter(replacedNode, myCont.children[i]);
      }
    }
  }
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

// ================ выбор и отмена избранного =========== //

let images = document.querySelectorAll(".img");
let count = 0;
let amountItems = document.querySelector('.control-number');

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", (e) => {
    if (images[i] == e.target && !images[i].classList.contains("changeImage")) {
      images[i].src = "../img/star_bg.png";
      images[i].classList.add("changeImage");
      count++;
      amountItems.innerHTML = count;
      btnActivityOnOff();
    } else if (
      images[i] == e.target &&
      images[i].classList.contains("changeImage")
    ) {
      images[i].src = "../img/star.png";
      images[i].classList.remove("changeImage");
      count--;
      amountItems.innerHTML = count;
      btnActivityOnOff();
    }
  });
}

let btnFavorites = document.querySelector("button.favorites");

function btnActivityOnOff() {
  return count == 0
    ? btnFavorites.classList.add("btn-disabled")
    : btnFavorites.classList.remove("btn-disabled");
}

btnFavorites.addEventListener("click", function () {
  if (btnFavorites.classList.contains("btn-disabled")) {
    alert("нужно что-то выбрать");
  } else {
    for (let i = 0; i < images.length; i++) {
      if (!images[i].classList.contains("changeImage")) {
        images[i].parentNode.parentNode.remove();
        btnFavorites.textContent = "Выбрано";
        removeCurrentCard();
        showAmountApartments();
      }
    }
  }
});

function removeCurrentCard() {
  if (btnFavorites.textContent == "Выбрано") {
    let selectedCards = document.querySelectorAll("img.changeImage");

    for (let i = 0; i < selectedCards.length; i++) {
      selectedCards[i].addEventListener("click", (e) => {
        if (selectedCards[i] == e.target) {
          selectedCards[i].parentNode.parentNode.remove();
        }
      });
    }
  }
}

function dischargeAll() {
  window.location.reload();
}

function showAmountApartments() {
  let cards = document.querySelectorAll(".card-container").length;
    quantityOfCards = document.querySelector("h1");
  quantityOfCards.innerHTML = `Найдено ${cards} квартир`;

  let changeAmount = document.querySelector('.control-number');
  changeAmount.addEventListener('change', (e)=> {
    console.log(e.target.innerHTML);
  })
}
showAmountApartments();



// 1981641ab96419f3869737739b234754d9631b20
