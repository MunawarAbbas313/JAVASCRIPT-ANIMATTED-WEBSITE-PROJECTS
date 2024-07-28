const wrap = document.querySelector(".slider-wrapper");
const menuItems = document.querySelectorAll(".MenuItem");
let currentIndex = localStorage.getItem("currentIndex") || 0;




//Array of Obejcts for Products 

const products =[
  {
    id: 1,
    title : "Air Force",
    price: "PKR 8500",
    textColor :"red",
    colors:[
      {
        code: "black",
        img:"./img/air.png",
      },
      {
        code: "red",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title : "Jorden",
    price: "PKR 7999",
    textColor:"green",
    colors:[
      {
        code: "black",
        img:"./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title : "Blazer",
    price: "PKR 6599",
    textColor:"blue",
    colors:[
      {
        code: "black",
        img:"./img/blazer.png",
      },
      {
        code: "blue",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title : "CREATER",
    price: "PKR 5999",
    textColor: "orange",
    colors:[
      {
        code: "black",
        img:"./img/crater.png",
      },
      {
        code: "orange",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title : "HIPPEE",
    price: "PKR 9999",
    textColor:"yellowgreen",
    colors:[
      {
        code: "black",
        img:"./img/hippie.png",
      },
      {
        code: "yellow",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productimg");
const currentProductTittle = document.querySelector(".prodcutTitle");
const currentProductPrice = document.querySelector(".productprice");
const currentProductcolor = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");

menuItems.forEach(function(item, index) {
  item.addEventListener("click", function() {
    wrap.style.transform = `translateX(${-100 * index}vw)`;
    localStorage.setItem("currentIndex", index); 
    // for choosen Product
    choosenProduct = products[index];
    // for changing title 
    currentProductTittle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price;
    currentProductPrice.style.color = choosenProduct.textColor;
    currentProductImg.src = choosenProduct.colors[0].img;

    // for colors 
    currentProductcolor.forEach((color, index)=>{
      color.style.backgroundColor = choosenProduct.colors[index].code;
    })
  });
});
currentProductcolor.forEach((color,index)=>{
  color.addEventListener("click",()=>{
    currentProductImg.src = choosenProduct.colors[index].img;
  })
})

wrap.style.transform = `translateX(${-100 * currentIndex}vw)`;
function scrollToBottom() {
  var page = document.getElementById('mypage');
  page.scrollIntoView({ behavior: 'smooth' });
}
currentProductSize.forEach((size, index)=>{
  size.addEventListener("click",function(){
   currentProductSize.forEach((size)=>{
    size.style.backgroundColor = 'white';
    size.style.color = 'black'
   })
    size.style.backgroundColor = 'black';
    size.style.color = 'white';
  })
})

//Payment Methods
const PaymentTab = document.getElementById("Pay");
const btnTabOpener = document.getElementById("TabOpner");
const closer = document.querySelector(".Close");
btnTabOpener.addEventListener("click", ()=>{
  PaymentTab.style.display = "flex";
})
closer.addEventListener("click",()=>{
  PaymentTab.style.display = 'none';
})
const mybtnn =document.getElementById("Mybtn");

const check = document.querySelectorAll("checker");

mybtnn.addEventListener("click", () => {
  let isValid = true;
  check.forEach((input) => {
    if (isNaN(input.value)) {
      isValid = false;
      alert("Error: Please enter a valid number in the field.");
    }
  });
  if (isValid) {
    alert(`Item name ${choosenProduct.title + " " + "id" + " " + choosenProduct.id + " "} purchased`);
  }
});
function presentState(){
  const state = PaymentTab.style.display === "flex" ? "open" : "closed";
  localStorage.setItem("state", state);
}

function restore (){
  const Paystate = localStorage.getItem("state");
  if(state === "open")
  {
    PaymentTab.style.display = "flex";
    
  }
  else{
    PaymentTab.style.display = "none";
  }
}
function scrollTotop() {
  var page2 = document.getElementById('nav');
  page2.scrollIntoView({ behavior: 'smooth' });
}

gsap.from("footer", {
  y:50,
  opacity:0,
   duration: 1.2,   
   scrollTrigger: {
     trigger: "footer",
     scroller: "body",
     start: "top 75%", 
     end: "top 70%",
    
     scrub: 4
   }
 })
 gsap.from(".features", {
  y:60,
  opacity:0,
   duration: 1.2,   
   scrollTrigger: {
     trigger: ".features",
     scroller: "body",
     start: "top 80%", 
     end: "top 75%",
    
     scrub: 2
   }
 }) 
 gsap.from(".gallery", {
  scale:0.8,
  opacity:0,
   duration: 1.8, 

   
   scrollTrigger: {
     trigger: ".gallery",
     scroller: "body",
     start: "top 60%", 
     end: "top 55%",
    
     scrub: 5
   }
 })
 