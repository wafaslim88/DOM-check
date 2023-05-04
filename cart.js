

var plus = document.getElementById('plus-btn');
var num = document.getElementById('num-btn');
var minus = document.getElementById('minus-btn');



let a = 0;
num.innerText=a;

function Increment(){
    a=a+1; 
    num.innerText=a;
    console.log(a) ;
    updateCartTotal();
}

function Decrement(){
    a=a-1;
    num.innerText=a;
    console.log(a);
    updateCartTotal();
}
var pluss = document.getElementById('btplus');
var numm = document.getElementById('btnum');
var minuss = document.getElementById('btmin');

let b = 0;
numm.innerText=b;

function Incrementt(){
    b=b+1; 
    numm.innerText=b;
    console.log(b) ;
    updateCartTotal();
}

function Decrementt(){
    b=b-1;
    numm.innerText=b;
    console.log(b);
    updateCartTotal();
}
//------------------------------------------------------

  

   
    function deleteItems(){ 
        let image = document.getElementsByClassName('image');
        let remo = document.getElementsByClassName('delete'); 
    for ( let i=0 ; i<image.length ; i++) {

      image[i].remove(image);
      updateCartTotal();
    }
    }
    //------------------------------------------------------- 
   
    function deleteIt(){ 
        let select = document.getElementsByClassName('select');
        let item = document.getElementsByClassName('item');
        for ( let i=0 ; i< product.length ; i++) {
    
         item[i].remove(item);
         updateCartTotal();
        }
        }
         

let btnHeart = document.getElementById('heart');
btnHeart.addEventListener("click",()=> btnHeart.style.color='red');

let btnLike = document.getElementById('like');
btnLike.addEventListener("click",()=> btnLike.style.color='red');

//----------------------------------------------------------------------------


/*
 var products = document.getElementsByClassName('container');
 var total = document.getElementsByClassName('total');
 var pls = document.getElementsByClassName('pls');

 function sum(){
  let  s = 0 ;
   for ( let i=0 ; i < products.length; i++){
   let item = products[i];
   s =
    s + 
   item.querySelector("#price").innerText * item.querySelector(".nm").value;
 }
 return total.value=s;
}

pls.addEventListener("click",sum());*/

//calculate total price
 
var pls = document.getElementsByClassName('pls');

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('container')[0]
    var Items = cartItemContainer.getElementsByClassName('cart-item')
    var total = 0;
    for( var i = 0 ; i < Items.length ; i++ ) {
        var Item  = Items[i];
        var priceElement = Item.getElementById('price')[0]
        var quantityElement = Item.getElementsByClassName('nm')[0]
        var price = parsefloat(priceElement.innerText.replace('TND', ''))
        var quantity = quantityElement.value
        total+= (price*quantity)
    }
    document.querySelector('cart-total-price')[0].innerText = total + 'TND'
}
updateCartTotal();

pls.addEventListener("click",  updateCartTotal());