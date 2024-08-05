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
      console.log("4et6f gfd" ,product)
    } else {
      cart.push(product);
    }
    updateCartIcon();
  }
  
  let itemNumber;
  
  
  function updateCartIcon() {
    const cartIcon = document.getElementById("cart-item");
    let totalItems = cart.reduce((total, item) => total + item.Tag, 0);
    itemNumber = totalItems;
   let total = itemNumber.toString();
  
  
    cartIcon.innerText = totalItems.toString();
    let ping = document.getElementById("ping");
    ping.style.display = "block";
    return total;
  }
  
  
  
  
  // Function to handle button clicks
  export function handleButtonClick(event) {
    event.preventDefault();
    const buttonId = event.target.dataset.id;
     let product =  cartItems.find((p) => p.Id === buttonId);
  let Price = cartItems.find((pri) => pri.Price != null)
  console.log(Price)
    if (product) {
      addToCart(product);
  
      iziToast.success(
        {
          title: "Successfully Created",
          message: ` Click on the cart button on the top to choose your prefered protein`,
          position: "topLeft",
          messageSize: "30px",
          messageColor: "black",
        },
        2000
      );
  
      return product;
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
  
  export let classHandle = document.querySelectorAll(".addTocart");
  classHandle.forEach((button) => {
    button.addEventListener("click", (e) => {
      handleButtonClick(e);
    });
  });
  const person = {
    Age: 12,
  };
  
  
  // ========================================= ADDTOCART =====================================
  
  console.log(navigator.cookie)