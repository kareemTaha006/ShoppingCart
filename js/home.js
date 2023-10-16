var productList = []
const imgsArr = [

  'images/b.png',
  'images/c.png',
  'images/d.png',
  'images/a.png'
];



let i = 3
function prevHandler() {
  --i
  if (i < 0) {
    i = imgsArr.length - 1
  }
  myimg.src = imgsArr[i]
  console.log(i)
}

function nextHandler() {
  i++
  if (i > 3) {
    i = 0
  }
  myimg.src = imgsArr[i]
}
let intervalId;
function play() {

  clearInterval(intervalId);

  intervalId = setInterval(function () {
    i = (i + 1) % imgsArr.length

    myimg.src = imgsArr[i];
  }, 1200);


}

function stop() {



  clearInterval(intervalId);



}

//Define products

let productDom = document.getElementById("products")
let cartOfMenueDiv=document.querySelector(".carts-products div")
let cartProductsMenu=document.querySelector(" .carts-products")
let badgeCart=document.querySelector(".badge")
let shoppingCartIcon=document.querySelector(".shopping-cart")
let CategoriesContainerDom=document.querySelector(".categories-container")



//


// categor display 


function drawCategoriesUI(Categories) {

  CategoriesContainerDom.innerHTML =""
    Categories.forEach((category,index) => {
     const CategoryElementDiv = ` 
  
     <p class="category" onclick='Getproducts(${index})'>${category}</p>
      
    
    `;
    CategoriesContainerDom.innerHTML +=CategoryElementDiv
   }
 
 
   );
  
  
  }

   


// الى هتكون مختلفة للعرض فى الصفحات productsUIهنا هعوز احط براميتر عشان اعدل فى ال
 

//open button cart menu
shoppingCartIcon.addEventListener("click",openCartMenu)

//display products
function drawProductUI(ProuductHome) {

 productDom.innerHTML =""
   ProuductHome.forEach((item) => {
    const ProductElementDiv = ` 
 
       

   <div class="product-item">

      <img class="product-item-img" src="${item.image}" alt="image">
   

   
         
           <div class="product-item-description">
            <h2 class="product-title">${item.title}</h2>
              <br>
                <p class="product-description">${item.description}   </p>
   
      
               <span class="product-price" style="color: rgb(50, 49, 49);">${item.price}<span style="font-weight: bolder;"> EGP </span ></span>
      
      </div>
   
      
   
        <div class="product-item-action">
   
                <button class="add-to-cart" onclick="addToCart(${item.id})">Add To Cart</button>
   
        </div>
        </div>
     
   
   `;
   productDom.innerHTML +=ProductElementDiv
  }


  );



  // productDom.innerHTML = productsUI;




}
//call function that display products
drawProductUI(ProuductHome);


// check if there is items in local storage
//add to cart menu
let addedItem= localStorage.getItem("productsInCart")? JSON.parse(localStorage.getItem("productsInCart")):[];

if(addedItem){
  addedItem.map((item)=>{
    cartOfMenueDiv.innerHTML +=` <p>${item.title}</p>`
    

  

  }
  
     
  );
  badgeCart.style.display="block";
     badgeCart.innerHTML=addedItem.length;

}

//add to cart
function addToCart(item_id){
  console.log(productList);
  let chosenItem=productList.find((item)=>item_id === item.id);
   cartOfMenueDiv.innerHTML +=` <p class="product-title">${chosenItem.title}</p>`
   addedItem=[...addedItem,chosenItem];

   console.log(addedItem);
   console.log(chosenItem);
   localStorage.setItem("productsInCart",JSON.stringify(addedItem));
   let cartProductsLength=document.querySelectorAll(".carts-products div p");

   badgeCart.style.display="block";

   badgeCart.innerHTML=cartProductsLength.length;


}


//open cart menu
function openCartMenu(){

  if(cartOfMenueDiv.innerHTML !=" "){
    if(cartProductsMenu.style.display =="block"){
      cartProductsMenu.style.display="none";

    }
    else {
      cartProductsMenu.style.display ="block";
    }
  }

}


// fetch 

async function GetproductCategories() {
	let response = await fetch("https://fakestoreapi.com/products/categories");
	let data = await response.json();
  drawCategoriesUI(data);
   categories = data;
	console.log(data);
}
GetproductCategories();

async function Getproducts(index) {
	let response = await fetch("https://fakestoreapi.com/products/category/"+categories[index]);
	let data = await response.json();
  // productList= data
  drawProductUI(data);
	console.log(data);
}
// Getproducts('jewelery')

// 



async function GetAllproducts() {
	let response = await fetch("https://fakestoreapi.com/products");
	let data = await response.json();
  productList= data
  drawProductUI(data);
	console.log(data);
}

GetAllproducts();

let scrollToTopButton = document.getElementById("scrollToTopButton");
scrollToTopButton.addEventListener('click', function() {
  
  window.scrollTo({
    top: 0,
     behavior: 'smooth'
  });
});


