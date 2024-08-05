window.addEventListener("DOMContentLoaded", () => {
  // ========================================= Delared/assigned variable =====================================

  const navChange = document.getElementById("changeNavCol");
  const txt1 = document.getElementById("changeTxt-1");
  const changeNameColor = document.getElementById("getname");
  const txt2 = document.getElementById("getname");
  const txt3 = document.getElementById("txt-3");

  // ========================================= Delared/assigned variable =====================================

  // ========================================= NavBar Functions =====================================>

  document.addEventListener("scroll", () => {
    if (scrollY > 56) {
      navChange.classList.add("bg-white");
      navChange.classList.add("shadow-lg");
      navChange.classList.add("py-1.5");
      changeNameColor.classList.remove("text-white");
      changeNameColor.classList.add("text-gray-700");
      txt1.classList.remove("text-white");
      txt1.classList.add("text-gray-700");
      txt2.classList.add("text-gray-700");
      txt3.classList.add("text-gray-700");
    } else {
      navChange.classList.remove("bg-white");
      navChange.classList.remove("shadow-lg");
      navChange.classList.remove("py-1.5");
      changeNameColor.classList.remove("text-gray-700");
      changeNameColor.classList.add("text-white");
      txt1.classList.remove("text-gray-700");
      txt1.classList.add("text-white");
      txt2.classList.remove("text-gray-700");
      txt3.classList.remove("text-gray-700");
    }
  });

  // ========================================= NavBar Functions =====================================

  // ================Toggle varieties of food section ==================

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
      button.addEventListener("click", () => {
        // Remove the active class from all buttons
        buttons.forEach((btn) => btn.classList.remove(...activeClass));
        // Add the active class to the clicked button
        this.classList.add(...activeClass);
      });
    });
  });

  // ================Toggle variety of foods==================
});
  // hey you stupid little bug, I challenge YOU, only one of us shall emerge Victorious tommorow
  //* cart ID's

  // let cartItems1 = document.getElementById("1");
  // let cartItems2 = document.getElementById("2");
  // let cartItems3 = document.getElementById("3");
  // let cartItems4 = document.getElementById("4");
  // let cartItems5 = document.getElementById("5");
  // let cartItems6 = document.getElementById("6");
  // let cartItems7 = document.getElementById("7");
  // let cartItems8 = document.getElementById("8");
  // let cartItems9 = document.getElementById("9");
  // let cartItems10 = document.getElementById("10");
  // let cartItems11 = document.getElementById("11");
  // let cartItems12 = document.getElementById("12");
  // let cartItems13 = document.getElementById("13");
  // let cartItems14 = document.getElementById("14");
  // let cartItems15 = document.getElementById("15");
  // let cartItems16 = document.getElementById("16");
  // let cartItems17 = document.getElementById("17");
  // let cartItems18 = document.getElementById("18");

  //* cart ID's

  // ========================================= Product Section (Where the magic is made) =====================================

  // This is the code used to crete new objects by using a blueprint by using the consturctor method and reUsing the code
  class cartData {
    constructor(id, name, image, price, tag) {
      this.id = id;
      this.Name = name;
      this.image = image;
      this.price = price;
      this.tag = tag;
    }
  }

  // This section covers the hard coded Food product by using an array object ie.
  // adding values to our blue-print multiple times and puttimg securing it with an array
  const cartShop = [
    new cartData(
      "1",
      "Egusi Soup",
      "https://miro.medium.com/v2/resize:fit:1400/1*n-K7Ji8Tl6W8jErCHXeoDw.jpeg",
      1600,
      "soups"
    ),

    new cartData(
      "2",
      "Okra Soup",
      "https://cheflolaskitchen.com/wp-content/uploads/2015/10/DSC0066-okro-soup-.jpg",
      1600,
      "soups"
    ),

    new cartData(
      "3",
      "Ora Soup",
      "https://img-global.cpcdn.com/recipes/a8f05f620ae3bfed/680x482cq70/oha-soup-recipe-main-photo.jpg",
      1600,
      "soups"
    ),

    new cartData(
      "4",
      "Onugbo Soup",
      "https://i2.wp.com/www.afrolems.com/wp-content/uploads/2015/03/bitter-leaf-soup-recipe.jpg?ssl=10",
      1600,
      "soups"
    ),

    new cartData(
      "5",
      "Vegetable Soup",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpjRCjPD4DzloTztvZ4fE6WoIXHsbYy-Uhw&s",
      1800,
      "soups"
    ),

    new cartData(
      "6",
      "Nsala Soup",
      "https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/ofe-nsala-nsala-soup.jpg",
      3000,
      "soups"
    ),

    new cartData(
      "7",
      "Tomato Stew and Rice",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QSAKrFr2urRDnh2OmHz6BDQHftRRWukWXg&s",
      1500,
      "Rice"
    ),

    new cartData(
      "8",
      "Ofe Akwu and Rice",
      "https://i.ytimg.com/vi/3n2lYmpzGKg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDbRnOerCEtAK-kMfz_IE9PpFDy0Q",
      1500,
      "Rice"
    ),

    new cartData("9", "White Sauce Stew And Rice", "", 1500, "Rice"),

    new cartData("10", "Jollof Rice", "", 1500, "Rice"),
    new cartData("11", "Fried Rice", "", 1500, "Rice"),
    new cartData("12", "Coconut Rice", "", 1800, "Rice"),
    new cartData("13", "GoatMeat Pepersoup", "", 2000, "Protein"),
    new cartData("14", "Chiken Pepersoup", "", 2500, "Protein"),
    new cartData("15", "Oxtail Pepersoup", "", 2500, "Protein"),
    new cartData("16", "Sauced Mangala Fish", "", 2000, "Protein"),
    new cartData("17", "Chefs Special", "", 3000, "Special"),
  ];

  export let cart = [];

  //this code is used to add/check if the id of the button clicked is the same with the id of the cartData then give it a variable to use/manipulate with...

  let SelectedFood;

  // ========================================= this blobk of code handles both the checking and adding data into the cart and initialises the cart using a callback function =====================================
  const cards = document.querySelectorAll(".cartCollection");
  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      event.preventDefault();
      try {
        let buttonId = event.target.dataset.id;
        SelectedFood = cartShop.find((product) => product.id === buttonId);
        // ========================================= this code is used to check if the product was added sucessfully =====================================
      
        if (  SelectedFood === undefined) {
          iziToast.error({
            theme: "light",
            title: "Error adding Product",
            message: "Try Clicking on the product again!!!",
            position: "bottomRight", // bottomRight, bottomLeft, topRight, topLeft, , bottomCenter
            titleColor: "black",
            messageColor: "black",
          })
        } else {
          iziToast.success({
            theme: "light",
            title: "Added SuccsessFully",
            message: "Click on the cart Icon to add Choose yor Protein",
            position: "bottomRight", // bottomRight, bottomLeft, topRight, topLeft, , bottomCenter
            titleColor: "black",
            messageColor: "black",
          })
          initProduct(SelectedFood);
         
        }

      } catch (error) {
        console.log(error.message)
        console.log(error.code)
      }
     
      // ========================================= this code is used to check if the product was added sucessfully =====================================
    
    });
  });
  // ========================================= this blobk of code handles both the checking and adding data into the cart and initialises the cart using a callback function =====================================
  let cartObj;
  
  // ========================================= this stores the selected order to our browsers storage using sessionStorage  =====================================
 export const initProduct = (SelectedFood) => {
    try {
      let Store;
      Store = cart.push(SelectedFood).toString()
     document.getElementById("cart-item").innerText = Store
     let ping = document.getElementById("ping")
     ping.style.display = "flex";
     ping.style.display = 'background-color:black'
     cartObj = cart ;
     sessionStorage.setItem("cart", JSON.stringify(cartObj))
    } catch (error) {
      console.log(error);
    }
  };
  // ========================================= this stores the selected order to our browsers storage using sessionStorage  =====================================
