

var plus = document.getElementById('plus-btn');
var num = document.getElementById('num-btn');
var minus = document.getElementById('minus-btn');


/*plus.addEventListener = ("click",Increment());
minus.addEventListener = ("click",Decrement());*/

let a = 0;
num.innerText=a;

function Increment(){
    a=a+1; 
    num.innerText=a;
    console.log(a) ;
}

function Decrement(){
    a=a-1;
    num.innerText=a;
    console.log(a);
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
}

function Decrementt(){
    b=b-1;
    numm.innerText=b;
    console.log(b);
}
//------------------------------------------------------

   /* var image = document.getElementsByClassName('image');
    var mg =  document.getElementsByClassName('mg');
    var plus = document.getElementById('plus-btn');
    var num = document.getElementById('num-btn');
    var minus = document.getElementById('minus-btn');
    image.removeChild(mg);*/

   
    function deleteItems(){ 
        let image = document.getElementsByClassName('image');
        let remo = document.getElementsByClassName('delete'); 
    for ( let i=0 ; i<image.length ; i++) {

      image[i].remove(image);
    
    }
    }
    //------------------------------------------------------- 
   
    function deleteIt(){ 
        let select = document.getElementsByClassName('select');
        let item = document.getElementsByClassName('item');
        for ( let i=0 ; i<item.length ; i++) {
    
          item[i].remove(item);
        
        }
        }
         

let btnHeart = document.getElementById('heart');
btnHeart.addEventListener("click",()=> btnHeart.style.color='red');

let btnLike = document.getElementById('like');
btnLike.addEventListener("click",()=> btnLike.style.color='red');

//----------------------------------------------------------------------------
/*let cartTotal = document.getElementsByClassName('total');
function totalPrice(){
    let T = 0;
    let Price = q * price; //q is the quantity of each item in the cart // price is the price of each item in the cart
    for(let i =0; i< Price.length ; i++)
    cartTotal.innertext = T;
    T+= Price[i];
  

}*/
 var items = document.getElementsByClassName('Item');
 var total = document.getElementById('finalPrice');

 function sum(){
  let  s = 0 ;
   for ( let i=0 ; i < items.length; i++){
   let item = items[i];
   s =
    s + 
   item.querySelector("#price").innerText * item.querySelector("#btnum").value;
 }
 return total.value=s;
}

pluss.addEventListener("click",sum());