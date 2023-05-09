// ++++++++++++++++++++++

// ---Start Store.html---

// show data as books in store 
let store = document.querySelector(".storeBooks");

// This is a Function
let generateItems = (x) => {
  return (store.innerHTML = storeBookData.map((x) => {
    let {id, name, author, levelC, level, image, desc, price} = x;
    return `
    <div id=book-id-${id} class="book all ${levelC}">
      <div class="outside">
        <img onclick="popup(${id})" width="230" height="355" src=${image} alt="">
        <span class="lvl">Level ${level}</span>
        <div class="info">
          <h3 onclick="popup(${id})">${name}</h3>
          <h4 onclick="popup(${id})">${author}</h4>
          <div class="price-qty">
            <div class="price">$${price}</div>
            <div title="Days" class="qtyBtns">
              <span>Days :</span>
              <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
              <div id=${id} class="qty">0</div>
              <i onclick="increment(${id})"  class="fa-solid fa-plus"></i>
            </div>
          </div>
          <div onclick="toCart(${id})" class="tocart">ADD TO CART</div>
        </div>
      </div>
      <div class="inside">
        <i onclick="closePop(this)" class="fa-solid fa-xmark"></i>
        <img src=${image} alt="">
        <div class="popDesc">
          <h3>${name}</h3>
          <div class="price">${price}$ per day</div>
          <p class="desc">${desc}</p>
          <div class="qty-addbtn">
            <div class="qtyBtns">
              <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
              <div class="qty">0</div>
              <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
            </div>
            <div onclick="toCart(${id})" class="tocart">ADD TO CART</div>
          </div>
        </div>
      </div>
    </div>
    `;
  }).join(""));
};

generateItems();

// Basket
let basket = [];

// if there is products in local storage bring them back
let loca = window.localStorage.getItem("products");
if (loca) {
  basket = JSON.parse(loca);
}

// The Filter
let switchersLi =  document.querySelectorAll(".switcher li");
let items2filter = document.querySelectorAll(".storeBooks .book");

switchersLi.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageitems)
})

function removeActive() {
  switchersLi.forEach((li) => {
    li.classList.remove("active");
  })
  this.classList.add("active");
}

function manageitems() {
  items2filter.forEach((item) => {
    item.style.display = "none";
  })
  document.querySelectorAll(this.dataset.cat).forEach((item) => {
    item.style.display = "block";
  })

}

// Increment and Decrement functionality
let increment = (id) => {
  // Get the element
  let Ele = document.getElementById(id.id);
  let eleQty = document.querySelectorAll(`#book-id-${id.id} .qty`);

  // Make the counter
  let counter = +id.textContent;
  counter += 1;

  // let Element number the same as counter
  eleQty.forEach((el) => el.textContent = counter);
}
let decrement = (id) => {
  // Get the element
  let Ele = document.getElementById(id.id);
  let eleQty = document.querySelectorAll(`#book-id-${id.id} .qty`);

  // Make the counter
  if (Ele.textContent == 0) return;
  else {
    let counter = +id.textContent;
    counter -= 1;

    // let Element number the same as counter
    eleQty.forEach((el) => el.textContent = counter);
  }
}

// Poping Up div.inside for details
let popup = (id) => {
  // Get The Book Element
  let bookEle = document.querySelector(`#book-id-${id.id} .inside`);
  bookEle.style.display = "flex";
}
// Closing the Pop Up details
let closePop = (e) => {
  e.parentElement.style.display = "none";
}

// -- //
// ADD TO CART Button Functionality
let toCart = (id) => {
  // the days
  let productDays = id.textContent;

  // Get Book name
  let productName = document.querySelector(`#book-id-${id.id} .outside h3`).innerHTML;

  // Get Book Image
  let productImg = document.querySelector(`#book-id-${id.id} .outside img`).src;

  // Get The Price 
  let productPrice = document.querySelector(`#book-id-${id.id} .outside .price`).textContent;

  // Done, now I want a way to store them in object
  basket.push({
    id: id.id,
    // img: productImg,
    // isim: productName,
    // price: productPrice,
    days: productDays,
  })

  // apply them in local storage
  localStorage.setItem("products", JSON.stringify(basket));
}


// ---End Store.html---