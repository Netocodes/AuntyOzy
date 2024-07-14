const navChange = document.getElementById("changeNavCol");
const imgCtrl = document.getElementById("imgCtrl");
const firstName = document.getElementById("hs-hero-name-1");
const lastName = document.getElementById("hs-hero-name-2");
const txt1 = document.getElementById("changeTxt-1");
const changeNameColor = document.getElementById("getname");
const txt2 = document.getElementById("getname");
const txt3 = document.getElementById("txt-3");



document.addEventListener('scroll', () => {
if(scrollY > 56) {

navChange.classList.add("bg-white")
navChange.classList.add("shadow-lg")
changeNameColor.classList.remove("text-white")
changeNameColor.classList.add("text-gray-700")
txt1.classList.remove("text-white")
txt1.classList.add("text-gray-700")
txt2.classList.add("text-gray-700")
txt3.classList.add("text-gray-700")
}
else{

navChange.classList.remove("bg-white")
navChange.classList.remove("shadow-lg")
changeNameColor.classList.remove("text-gray-700")
changeNameColor.classList.add("text-white")
txt1.classList.remove("text-gray-700")
txt1.classList.add("text-white")
txt2.classList.remove("text-gray-700")
txt3.classList.remove("text-gray-700")
}
});



// ================Toggle variety of foods==================

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn');
  const activeClass = [
   
    'bg-gradient-to-r', 'from-orange-400', 'via-orange-500', 'to-orange-600',
    'hover:bg-gradient-to-br', 'focus:ring-4', 'focus:outline-none', 'focus:ring-orange-300',
    'dark:focus:ring-orange-800', 
  ];
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove the active class from all buttons
      buttons.forEach(btn => btn.classList.remove(...activeClass));
      // Add the active class to the clicked button
      this.classList.add(...activeClass);
    });
  });
});  

// ================Toggle variety of foods==================







// ========================================= CheckOut information =====================================
const cartItem1 = document.getElementById("addEgusiSoup");
const cartItem2 = document.getElementById("addOkraSoup");
const cartItem3 = document.getElementById("addOraSoup");
const cartItem4 = document.getElementById("addOnugboSoup");
const cartItem5 = document.getElementById("addVegetableSoup");
const cartItem6 = document.getElementById("addNsalaSoup");
const cartItem7 = document.getElementById("addTomatoeStew");
const cartItem8 = document.getElementById("addOfeAkwu");
const cartItem9 = document.getElementById("addWhiteSauceStew");
const cartItem10 = document.getElementById("addToJollofRIce");
const cartItem11 = document.getElementById("addTofriedRice");
const cartItem12 = document.getElementById("addToCoconutRice");
const cartItem13 = document.getElementById("addtoGoatPepersoup");
const cartItem14 = document.getElementById("addToChikenPepersoup");
const cartItem15 = document.getElementById("addtoOxtailpepersoup");
const cartItem16 = document.getElementById("cardtItem16");
const cartItem17 = document.getElementById("cardtItem17");
const cartItem18 = document.getElementById("cardtItem18");


class cartObj {
  constructor(foodName, id, price, quantity, protein, swallow) {
    this.food = foodName;
    this.Id = id;
    this.Price = price;
    this.Quantity = quantity;
    this.meat = protein;
    this.Swallow = swallow;
  }
} 

const cartItems = {
  cartItem1: new cartObj('Egusi Soup', 1, 1600, '', 'Beef', "Garri"),
  cartItem2: new cartObj('Okra Soup', 2, 1600, 2, 'Beef', "Garri"),
  cartItem3: new cartObj('Ora Soup', 3, 1600, 2, 'Beef', "Garri"),
  cartItem4: new cartObj('Onugbo Soup', 4, 1600, 2, 'Beef', "Garri"),
  cartItem5: new cartObj('Vegetable Soup', 5, 1600, 2, 'Beef', "Garri"),
  cartItem6: new cartObj('Nsala/White Soup', 6, 1600, 2, 'Beef', "Garri"),
  cartItem7: new cartObj('Tomatoe Stew', 7, 1600, 2, 'Beef', "Garri"),
  cartItem8: new cartObj('Ofe akwu/Banga soup', 8, 1600, 2, 'Beef', "Garri"),
  cartItem9: new cartObj('White sauce Stew', 1, 1600, 9, 'Beef', "Garri"),
  cartItem10: new cartObj('Jollof Rice', 1, 1600, 10, 'Beef', "Garri"),
  cartItem11: new cartObj('Fried Rice', 1, 1600, 11, 'Beef', "Garri"),
  cartItem12: new cartObj('Coconut Rice', 1, 1600, 12, 'Beef', "Garri"),
  cartItem13: new cartObj('Goat Meat', 1, 1600, 13, 'Beef', "Garri"),
  cartItem14: new cartObj('Chicken Pepersoup', 1, 1600, 14, 'Beef', "Garri"),
  cartItem15: new cartObj('Oxtail pepersoup', 1, 1600, 15, 'Beef', "Garri"),
  cartItem16: new cartObj('yjyhgt', 1, 1600, 16, 'Beef', "Garri"),
  cartItem17: new cartObj('yjyhgt', 1, 1600, 17, 'Beef', "Garri"),
  cartItem18: new cartObj('yjyhgt', 1, 1600, 18, 'Beef', "Garri"),
}

// ========================================= CheckOut information =====================================
cartItem1.addEventListener('click', (e) => {
  e.preventDefault()

  console.log(cartItems.cartItem1);
});
cartItem2.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(cartItems.cartItem2);
});     
cartItem3.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(cartItems.cartItem3);
});
cartItem4.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(cartItems.cartItem4);
});
cartItem5.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(cartItems.cartItem5);
});
cartItem6.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(cartItems.cartItem6);
});
cartItem7.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(cartItems.cartItem7);
});
cartItem8.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(cartItems.cartItem8);
});
cartItem9.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(cartItems.cartItem9);
});
cartItem10.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(cartItems.cartItem10);
});
cartItem11.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(cartItems.cartItem11);
});
cartItem12.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(cartItems.cartItem12);
});
cartItem13.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(cartItems.cartItem13);
});
cartItem14.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(cartItems.cartItem14);
});
cartItem15.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(cartItems.cartItem15);
});
cartItem16.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(cartItems.cartItem16);
});
cartItem17.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(cartItems.cartItem17);
});
cartItem18.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(cartItems.cartItem18);
});
