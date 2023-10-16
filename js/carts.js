
let productDom = document.getElementById("products")


function   drawCartProductUI(allproducts=[]){
let ProuductHome=JSON.parse(localStorage.getItem("productsInCart" ) ) || allproducts;

    let productsUI = ProuductHome.map((item) => {
        return ` 
     
     
    
       <div class="product-item">
    
          <img class="product-item-img" src="${item.image}" alt="image">
       
       
             
               <div class="product-item-description">
                <h2>${item.title}</h2>
                  <br>
                    <p style="line-height: 30px;">${item.description}   </p>
       
          
                   <span style="color: rgb(50, 49, 49);"><span style="font-weight: bolder;"> EGP </span >${item.price}</span>
          
          </div>
       
          
       
            <div class="product-item-action">
       
                    <button class="add-to-cart" onclick="removeFromCart(${item.id})">Remove</button>
       
            </div>
            </div>
         
       
       `;
      }
    
    
      );
    
    
    
      productDom.innerHTML = productsUI;

}
drawCartProductUI();

function removeFromCart(id){
    let productsInCart=localStorage.getItem("productsInCart");
    if(productsInCart){

        let items= JSON.parse(productsInCart)

        let filteritems=items.filter((item)=>item.id !=id);
        localStorage.setItem("productsInCart",JSON.stringify(filteritems));
        drawCartProductUI(filteritems);

       
    }


}