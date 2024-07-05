


const navChange = document.getElementById("changeNavCol");
const imgCtrl = document.getElementById("imgCtrl");
const firstName = document.getElementById("hs-hero-name-1");
const lastName = document.getElementById("hs-hero-name-2");
const txt1 = document.getElementById("changeTxt-1");
const txt2 = document.getElementById("txt-2");
const txt3 = document.getElementById("txt-3");


document.addEventListener('scroll', () => {
if(scrollY > 56) {

navChange.classList.add("bg-white")
navChange.classList.add("shadow-lg")
txt1.classList.add("text-gray-700")
txt2.classList.add("text-gray-700")
txt3.classList.add("text-gray-700")
}
else{

navChange.classList.remove("bg-white")
navChange.classList.remove("shadow-lg")
txt1.classList.remove("text-gray-700")
txt2.classList.remove("text-gray-700")
txt3.classList.remove("text-gray-700")
}
});

// let page1 = document.getElementById("page-1");
// const page2 = document.getElementById("page-2");
// const page3 = document.getElementById("page-3");

// page1 = addEventListener('click', (event) => {
//     event.preventDefault()
// page1.style.color = 'red'
// })


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



