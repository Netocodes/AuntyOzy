
 let cart = JSON.parse(sessionStorage.getItem("cart"));

console.table(cart)

let cartItems;
let cartDiv
const myCart = () => {
cartDiv = document.getElementById("createElement")
let cartCard = document.getElementById("createElement");
   cartCard = cart.forEach(element => {
cartItems = document.createElement("div")
cartItems.innerHTML = `<div class="grid grid-cols-3 items-start gap-4">
                <div class="col-span-2 flex items-start gap-4">
                    <div class="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                        <img alt="Product img" src='${element.image}' class="w-full h-full object-cover" />
                    </div>

                    <div class="flex flex-col">
                        <h2 class="text-base font-bold text-gray-800">${element.Name}</h2>
                        <p class="text-xs font-semibold text-gray-500 mt-0.5">Size: MD</p>

                        <button type="button" class="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-current inline" viewBox="0 0 24 24">
                                <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                            </svg>
                            REMOVE
                        </button>
                    </div>
                </div>

                <div class="ml-auto">
                    <h4 class="text-lg max-sm:text-base font-bold text-gray-800"> ₦ ${element.price}</h4>

                    <button type="button"
                        class="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 124 124">
                            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                        </svg>

                        <span class="mx-3 font-bold">2</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 42 42">
                            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                        </svg>
                    </button>
                </div>
            </div>  
             <hr class="border-gray-300" />`
cartDiv.appendChild(cartItems)
});
}
myCart()

//    cartDiv = document.createElement("p")
//    cartDiv.innerHTML = `  <div class="grid grid-cols-3 items-start gap-4">
//                 <div class="col-span-2 flex items-start gap-4">
//                     <div class="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
//                         <img alt="Product img" src='${element.image}' class="w-full h-full object-cover" />
//                     </div>

//                     <div class="flex flex-col">
//                         <h2 class="text-base font-bold text-gray-800">${element.Name}</h2>
//                         <p class="text-xs font-semibold text-gray-500 mt-0.5">Size: MD</p>

//                         <button type="button" class="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0">
//                             <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-current inline" viewBox="0 0 24 24">
//                                 <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
//                                 <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
//                             </svg>
//                             REMOVE
//                         </button>
//                     </div>
//                 </div>

//                 <div class="ml-auto">
//                     <h4 class="text-lg max-sm:text-base font-bold text-gray-800">$20.00</h4>

//                     <button type="button"
//                         class="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
//                         <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 124 124">
//                             <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
//                         </svg>

//                         <span class="mx-3 font-bold">2</span>
//                         <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 fill-current" viewBox="0 0 42 42">
//                             <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
//                         </svg>
//                     </button>
//                 </div>
//             </div>`
//   
//    cartDiv.appendChild(cart)