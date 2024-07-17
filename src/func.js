const navChange = document.getElementById("changeNavCol");
const imgCtrl = document.getElementById("imgCtrl");
const firstName = document.getElementById("hs-hero-name-1");
const lastName = document.getElementById("hs-hero-name-2");
const txt1 = document.getElementById("changeTxt-1");
const changeNameColor = document.getElementById("getname");
const txt2 = document.getElementById("getname");
const txt3 = document.getElementById("txt-3");

document.addEventListener("scroll", () => {
  if (scrollY > 56) {
    navChange.classList.add("bg-white");
    navChange.classList.add("shadow-lg");
    changeNameColor.classList.remove("text-white");
    changeNameColor.classList.add("text-gray-700");
    txt1.classList.remove("text-white");
    txt1.classList.add("text-gray-700");
    txt2.classList.add("text-gray-700");
    txt3.classList.add("text-gray-700");
  } else {
    navChange.classList.remove("bg-white");
    navChange.classList.remove("shadow-lg");
    changeNameColor.classList.remove("text-gray-700");
    changeNameColor.classList.add("text-white");
    txt1.classList.remove("text-gray-700");
    txt1.classList.add("text-white");
    txt2.classList.remove("text-gray-700");
    txt3.classList.remove("text-gray-700");
  }
});

// ================Toggle variety of foods==================

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");
  const activeClass = [
    "bg-gradient-to-r",
    "from-orange-400",
    "via-orange-500",
    "to-orange-600",
    "hover:bg-gradient-to-br",
    "focus:ring-4",
    "focus:outline-none",
    "focus:ring-orange-300",
    "dark:focus:ring-orange-800",
  ];
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove the active class from all buttons
      buttons.forEach((btn) => btn.classList.remove(...activeClass));
      // Add the active class to the clicked button
      this.classList.add(...activeClass);
    });
  });
});

// ================Toggle variety of foods==================

// ========================================= CheckOut information =====================================
// const cartItem1 = document.getElementById("addEgusiSoup");
// const cartItem2 = document.getElementById("addOkraSoup");
// const cartItem3 = document.getElementById("addOraSoup");
// const cartItem4 = document.getElementById("addOnugboSoup");
// const cartItem5 = document.getElementById("addVegetableSoup");
// const cartItem6 = document.getElementById("addNsalaSoup");
// const cartItem7 = document.getElementById("addTomatoeStew");
// const cartItem8 = document.getElementById("addOfeAkwu");
// const cartItem9 = document.getElementById("addWhiteSauceStew");
// const cartItem10 = document.getElementById("addToJollofRIce");
// const cartItem11 = document.getElementById("addTofriedRice");
// const cartItem12 = document.getElementById("addToCoconutRice");
// const cartItem13 = document.getElementById("addtoGoatPepersoup");
// const cartItem14 = document.getElementById("addToChikenPepersoup");
// const cartItem15 = document.getElementById("addtoOxtailpepersoup");
// const cartItem16 = document.getElementById("cardtItem16");
// const cartItem17 = document.getElementById("cardtItem17");
// const cartItem18 = document.getElementById("cardtItem18");

class cartObj {
  constructor(id, foodName, tag, price, quantity, protein, swallow) {
    this.food = foodName;
    this.Id = id;
    this.Price = price;
    this.Tag = tag;
    this.Quantity = quantity;
    this.meat = protein;
    this.Swallow = swallow;
  }
}

const cartItems = [
  new cartObj("addEgusiSoup", "Egusi Soup", 1, 1600, 1, "Beef", "Garri"),
  new cartObj("addOkraSoup", "Okra Soup", 1, 1600, 1, "Beef", "Garri"),
  new cartObj("addOraSoup", "Ora Soup", 1, 1600, 1, "Beef", "Garri"),
  new cartObj("addOnugboSoup", "Onugbo Soup", 1, 1600, 1, "Beef", "Garri"),
  new cartObj(
    "addVegetableSoup",
    "Vegetable Soup",
    1,
    1600,
    2,
    "Beef",
    "Garri"
  ),
  new cartObj("addNsalaSoup", "Nsala/White Soup", 1, 1600, 1, "Beef", "Garri"),
  new cartObj("addTomatoeStew", "Tomatoe Stew", 1, 1600, 1, "Beef", "Garri"),
  new cartObj("addOfeAkwu", "Ofe akwu/Banga soup", 1, 1600, 1, "Beef", "Garri"),
  new cartObj(
    "addWhiteSauceStew",
    "White sauce Stew",
    1,
    1600,
    9,
    "Beef",
    "Garri"
  ),
  new cartObj("addToJollofRIce", "Jollof Rice", 1, 1600, 1, "Beef", "Garri"),
  new cartObj("addTofriedRice", "Fried Rice", 1, 1600, 1, "Beef", "Garri"),
  new cartObj("addToCoconutRice", "Coconut Rice", 1, 1600, 1, "Beef", "Garri"),
  new cartObj("addtoGoatPepersoup", "Goat Meat", 1, 1600, 1, "Beef", "Garri"),
  new cartObj(
    "addToChikenPepersoup",
    "Chicken Pepersoup",
    1,
    1600,
    14,
    "Beef",
    "Garri"
  ),
  new cartObj(
    "addtoOxtailpepersoup",
    "Oxtail pepersoup",
    1,
    1600,
    15,
    "Beef",
    "Garri"
  ),
  new cartObj("cardtItem16", "yjyhgt", 1, 1600, 1, "Beef", "Garri"),
  new cartObj("cardtItem17", "yjyiujhgt", 1, 1600, 1, "Beef", "Garri"),
  new cartObj("cardtItem18", "yjyhgt", 1, 1600, 1, "Beef", "Garri"),
];

let cart = [];

// Function to add a product to the cart
function addToCart(product) {
  const existingProduct = cart.find((item) => item.id === product.Id);

  if (existingProduct) {
    existingProduct.Quantity += product.Quantity;
  } else {
    cart.push(product);
  }
  updateCartIcon();
}
function updateCartIcon() {
  const cartIcon = document.getElementById("cart-item");
  const totalItems = cart.reduce((total, item) => total + item.Quantity, 0);
  cartIcon.innerText = totalItems.toString();
  let ping = document.getElementById("ping");
  ping.style.display = "block";
}

// Function to handle button clicks
function handleButtonClick(event) {
  const buttonId = event.target.dataset.id;
  console.log(`This is the Selected ID ${buttonId}`);
  const product = cartItems.find((p) => p.Id === buttonId);
  if (product) {
    addToCart(product);
    console.log(product);
  } else {
    iziToast.error(
      {
        title: "Caution",
        message: "Error adding to cart, Try clicking again!!!",
        position: "topLeft",
        messageSize: "30px",
        messageColor: "black",
      },
      3000
    );
  }
}
let classHandle = document.querySelectorAll(".addTocart");
classHandle.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
// document.addEventListener('click', (e) => {
//   e.preventDefault();
//    let cart = document.querySelectorAll('.addTocart')

//    cart.forEach(button => {
//     cart = handleButtonClick();

//   });
// })

// Attach event listeners to all buttons with the class 'addToCartBtn'

// ========================================= CheckOut information =====================================
// cartItem1.addEventListener('click', (e) => {
//   e.preventDefault()
//   let fun;
//   fun = cartItems.cartItem1.food;
//   console.log(fun)
//   iziToast.success({
//     title: 'OK',
//     message: `Added ${fun} to your cart`,
//     position: 'topCenter',
//     timeout: 4000,
// });
// window.location.href = './Checkout/checkout.html'
//   console.log(cartItems.cartItem1);
// });
// cartItem2.addEventListener('click', (e) => {
//   e.preventDefault()
//   let fun;
//   fun = cartItems.cartItem2.food;
//   console.log(fun)
//   iziToast.success({
//     title: 'OK',
//     message: `Added ${fun} to your cart`,
//     position: 'topCenter',
//     timeout: 4000,
// });
// window.location.href = './Checkout/checkout.html'
//   console.log(cartItems.cartItem3);
// });
// cartItem3.addEventListener('click', (e) => {
//   e.preventDefault()
//   let fun;
//   fun = cartItems.cartItem3.food;
//   console.log(fun)
//   iziToast.success({
//     title: 'OK',
//     message: `Added ${fun} to your cart`,
//     position: 'topCenter',
//     timeout: 4000,
// });
// window.location.href = './Checkout/checkout.html'
//   console.log(cartItems.cartItem3);
// });
// cartItem4.addEventListener('click', (e) => {
//   e.preventDefault()
//   let fun;
//   fun = cartItems.cartItem4.food;
//   console.log(fun)
//   iziToast.success({
//     title: 'OK',
//     message: `Added ${fun} to your cart`,
//     position: 'topCenter',
//     timeout: 4000,
// });
// window.location.href = './Checkout/checkout.html'
//   console.log(cartItems.cartItem4);
// });
// cartItem5.addEventListener('click', (e) => {
//   e.preventDefault()
//   let fun;
//   fun = cartItems.cartItem5.food;
//   console.log(fun)
//   iziToast.success({
//     title: 'OK',
//     message: `Added ${fun} to your cart`,
//     position: 'topCenter',
//     timeout: 4000,
// });
// window.location.href = './Checkout/checkout.html'
//   console.log(cartItems.cartItem5);
// });
// cartItem6.addEventListener('click', (e) => {
//   e.preventDefault()
//   let fun;
//   fun = cartItems.cartItem6.food;
//   console.log(fun)
//   iziToast.success({
//     title: 'OK',
//     message: `Added ${fun} to your cart`,
//     position: 'topCenter',
//     timeout: 4000,
// });
// window.location.href = './Checkout/checkout.html'
//   console.log(cartItems.cartItem6);
// });
// cartItem7.addEventListener('click', (e) => {
//   e.preventDefault()
//   let fun;
//   fun = cartItems.cartItem7.food;
//   console.log(fun)
//   iziToast.success({
//     title: 'OK',
//     message: `Added ${fun} to your cart`,
//     position: 'topCenter',
//     timeout: 4000,
// });
// window.location.href = './Checkout/checkout.html'
//   console.log(cartItems.cartItem7);
// });
// cartItem8.addEventListener('click', (e) => {
//   e.preventDefault()
//   let fun;
//   fun = cartItems.cartItem8.food;
//   console.log(fun)
//   iziToast.success({
//     title: 'OK',
//     message: `Added ${fun} to your cart`,
//     position: 'topCenter',
//     timeout: 4000,
// });
// window.location.href = './Checkout/checkout.html'
//   console.log(cartItems.cartItem8);
// });
// cartItem9.addEventListener('click', (e) => {
//   e.preventDefault()
//   let fun;
//   fun = cartItems.cartItem9.food;
//   console.log(fun)
//   iziToast.success({
//     title: 'OK',
//     message: `Added ${fun} to your cart`,
//     position: 'topCenter',
//     timeout: 4000,
// });
// window.location.href = './Checkout/checkout.html'
//   console.log(cartItems.cartItem9);
// });
// cartItem10.addEventListener('click', (e) => {
//   e.preventDefault()
//   let fun;
//   fun = cartItems.cartItem10.food;
//   console.log(fun)
//   iziToast.success({
//     title: 'OK',
//     message: `Added ${fun} to your cart`,
//     position: 'topCenter',
//     timeout: 4000,
// });
// window.location.href = './Checkout/checkout.html'
//   console.log(cartItems.cartItem10);
//   window.location.href = '../Checkout/checkout.html'
// });
// cartItem11.addEventListener('click', (e) => {
//   e.preventDefault()
//   let fun;
//   fun = cartItems.cartItem11.food;
//   console.log(fun)
//   iziToast.success({
//     title: 'OK',
//     message: `Added ${fun} to your cart`,
//     position: 'topCenter',
//     timeout: 4000,
// });
// window.location.href = './Checkout/checkout.html'
//   console.log(cartItems.cartItem11);
// });
// cartItem12.addEventListener('click', (e) => {
//   e.preventDefault()
//   let fun;
//   fun = cartItems.cartItem12.food;
//   console.log(fun)
//   iziToast.success({
//     title: 'OK',
//     message: `Added ${fun} to your cart`,
//     position: 'topCenter',
//     timeout: 4000,
// });
// window.location.href = './Checkout/checkout.html'
//   console.log(cartItems.cartItem12);
// });
// cartItem13.addEventListener('click', (e) => {
//   e.preventDefault()
//   let fun;
//   fun = cartItems.cartItem13.food;
//   console.log(fun)
//   iziToast.success({
//     title: 'OK',
//     message: `Added ${fun} to your cart`,
//     position: 'topCenter',
//     timeout: 4000,
// });
// window.location.href = './Checkout/checkout.html'
//   console.log(cartItems.cartItem13);
// });
// cartItem14.addEventListener('click', (e) => {
//   e.preventDefault()
//   let fun;
//   fun = cartItems.cartItem14.food;
//   console.log(fun)
//   iziToast.success({
//     title: 'OK',
//     message: `Added ${fun} to your cart`,
//     position: 'topCenter',
//     timeout: 4000,
// });
// window.location.href = './Checkout/checkout.html'
//   console.log(cartItems.cartItem14);
// });
// cartItem15.addEventListener('click', (e) => {
//   e.preventDefault()
//   let fun;
//   fun = cartItems.cartItem15.food;
//   console.log(fun)
//   iziToast.success({
//     title: 'OK',
//     message: `Added ${fun} to your cart`,
//     position: 'topCenter',
//     timeout: 4000,
// });
// window.location.href = './Checkout/checkout.html'
//   console.log(cartItems.cartItem15);
// });
// cartItem16.addEventListener('click', (e) => {
//   e.preventDefault()
//   let fun;
//   fun = cartItems.cartItem16.food;
//   console.log(fun)
//   iziToast.success({
//     title: 'OK',
//     message: `Added ${fun} to your cart`,
//     position: 'topCenter',
//     timeout: 4000,
// });
// window.location.href = './Checkout/checkout.html'
//   console.log(cartItems.cartItem16);
// });
// cartItem17.addEventListener('click', (e) => {
//   e.preventDefault()
//   let fun;
//   fun = cartItems.cartItem17.food;
//   console.log(fun)
//   iziToast.success({
//     title: 'OK',
//     message: `Added ${fun} to your cart`,
//     position: 'topCenter',
//     timeout: 4000,
// });
// window.location.href = './Checkout/checkout.html'
//   console.log(cartItems.cartItem17);
// });
// cartItem18.addEventListener('click', (e) => {
//   e.preventDefault()
//   let fun;
//   fun = cartItems.cartItem18.food;
//   console.log(fun)
//   iziToast.success({
//     title: 'OK',
//     message: `Added ${fun} to your cart`,
//     position: 'topCenter',
//     timeout: 4000,
// });
// window.location.href = './Checkout/checkout.html'
//   console.log(cartItems.cartItem18);
// });
