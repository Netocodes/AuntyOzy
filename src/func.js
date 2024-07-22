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

// main.js



// ========================================= ADDTOCART =====================================
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
    1,
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
    1,
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
    1,
    "Beef",
    "Garri"
  ),
  new cartObj(
    "addtoOxtailpepersoup",
    "Oxtail pepersoup",
    1,
    1600,
    1,
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
  
  console.log("cartString")
  updateCartIcon();
}


let itemNumber;

function updateCartIcon() {
  const cartIcon = document.getElementById("cart-item");
  const totalItems = cart.reduce((total, item) => total + item.Quantity, 0);
   itemNumber = totalItems.toString()
   console.log(itemNumber)
  
  cartIcon.innerText = totalItems.toString();
  let ping = document.getElementById("ping");
  ping.style.display = "block";

}



// Function to handle button clicks
function handleButtonClick(event) {
  event.preventDefault();
  const buttonId = event.target.dataset.id;
  console.log(`This is the Selected ID ${buttonId}`);
  const product = cartItems.find((p) => p.Id === buttonId);

  console.log(product.food)
  

  if (product) {
    addToCart(product);
    iziToast.success(
      {
        title: "Successfully Created",
        message:` Click on the cart button on the top to choose your prefered protein`,
        position: "topLeft",
        messageSize: "30px",
        messageColor: "black",
      },
      2000
    );
    
 
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

// ========================================= ADDTOCART =====================================

   let cartbtn = document.getElementById("linkCard")
   cartbtn.addEventListener("click", (e) => {
   e.preventDefault();
    window.location.href = './Checkout/checkout.html'
 });
