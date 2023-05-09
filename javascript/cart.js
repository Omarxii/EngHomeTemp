// // ---Start Cart.html---

// // Start Design Cart IF local Is Empty
// let cart = document.querySelector(".cartjs");

// // Create Books Container and insert in cart
// let booksCont = document.createElement("div");
// booksCont.classList.add("books");

// let generateCartItems = () => {
//   if (!localStorage.getItem("products")) {
//     // Create this design
//     let cartEmpP = document.createElement("p");
//     cartEmpP.textContent = "Your cart is currently empty.";
//     cart.appendChild(cartEmpP);

//     let cartEmpBtn = document.createElement("a");
//     cartEmpBtn.textContent = "Return to shop";
//     cartEmpBtn.setAttribute("href", "store.html"); // !!CHANGE LATER!!
//     cart.appendChild(cartEmpBtn);
//   } else {// Start Showing Data In Shop
//     let productsFromLocal = JSON.parse(localStorage.getItem("products"));

//     let cartTotal = () => {
//       let endTot = 0;
//       for(let i = 0; i < productsFromLocal.length; i++) {
//         let moa = productsFromLocal[i].days * productsFromLocal[i].price.replace(/\D/g, '');
//         endTot = endTot + moa;
//       }
//       return endTot;
//     }

//     cart.innerHTML = `
//     <table>
//       <thead>
//         <tr>
//           <td></td>
//           <td></td>
//           <td>Product</td>
//           <td>Price</td>
//           <td>Period</td>
//           <td>Subtotal</td>
//         </tr>
//       </thead>
//       <tbody id="tbody">
//       </tbody>
//     </table>

//     <div class="total">
//       <p>Cart Totals</p>
//       <table>
//         <tbody>
//           <tr>
//             <th>Subtotal</th>
//             <td>$${cartTotal()}</td>
//           </tr>
//           <tr>
//             <th>Total</th>
//             <td>$${cartTotal()}</td>
//           </tr>
//         </tbody>
//       </table>
//       <button>Proceed to Checkout</button>
//     </div>
//     `

//     let tbody = document.getElementById("tbody");





//     tbody.innerHTML = productsFromLocal.map((x) => {
//       let {id, img, isim, price, days} = x;
//       return `
//       <tr>
//         <td><i onclick="removeItem(${id})" class="fa-solid fa-xmark"></i></td>
//         <td><img src="${img}" alt=""></td>
//         <td>${isim}</td>
//         <td>${price}</td>
//         <td>${days}</td>
//         <td>$${days * price.replace(/\D/g, '')}</td>
//       </tr>
//     `
//     }).join("") ;

//     let removeItem = (id) => {
      
//     }
//   }// End Showing Data In Shop
// }

// generateCartItems();



// // End Design Cart IF local Is Empty

// // ---End Cart.html---


let cart = document.querySelector(".cartjs");
let table = document.getElementById("mainTable");
let tableBdy = document.getElementById("tbody");
let totalEle = document.querySelector(".total");
let totalBdy = document.querySelector(".total tbody");
let basket = JSON.parse(localStorage.getItem("products")) || [];


let generateCartItems = () => {
  if(basket.length !== 0){
    table.style.display = "table";
    
    totalEle.style.display = "block";

    totalBdy.innerHTML = `
    <tr>
      <th>Subtotal</th>
      <td>$80</td>
    </tr>
    <tr>
      <th>Total</th>
      <td>$80</td>
    </tr>
    `;

    return (tableBdy.innerHTML = basket.map((x) => {
      let { id, days} = x;
      let search = storeBookData.find((y) => y.id === id) || [];
      return `
      <tr id="${id}">
        <td><i onclick="removeItem(${id})" class="fa-solid fa-xmark"></i></td>
        <td><img src=${search.image} alt=""></td>
        <td>${search.name}</td>
        <td>$${search.price}</td>
        <td>${days} days</td>
        <td>$${(search.price * days).toFixed(2)}</td>
      </tr>
      `
    }).join(""));

  } else{
    table.style.display = "none";
    totalEle.style.display = "none";
    
    let cartEmpP = document.createElement("p");
    cartEmpP.textContent = "Your cart is currently empty.";
    cart.appendChild(cartEmpP);

    let cartEmpBtn = document.createElement("a");
    cartEmpBtn.textContent = "Return to shop";
    cartEmpBtn.setAttribute("href", "store.html"); // !!CHANGE LATER!!
    cart.appendChild(cartEmpBtn);
  }
}


let removeItem = (id) => {
  let selectedItem = id;
  basket = basket.filter((x) => x.id !== selectedItem.id);
  
  localStorage.setItem("products", JSON.stringify(basket));
  generateCartItems();
}

generateCartItems();