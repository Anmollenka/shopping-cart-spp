var products=
[
    {
        image:"https://www.munsonschocolates.com/Customer-Content/www/products/Photos/Full/1-Lb--Chocolate-Assortment.jpg",
        price:600,
        name:"CHOCOLATE PACK"
    },
    {
        image:"https://thefirstyearblog.com/wp-content/uploads/2015/11/Chocolate-Chocolate-Cake-4-480x480.jpg",
        price:800,
        name:"CHOCOLATE CAKE"
    },
    {
        image:"https://d2m1a7vdhhb67a.cloudfront.net/sites/default/files/styles/product_image/public/indulgent-choco-walnut-pastries-C-past0202chwa.jpg?itok=jHAYWL24",
        price:100,
        name:"CHOCO-WALNUT PASTRY "
    }  
]
var cart=
{
    items:[]
}
function showproductsShop()
{
    var item=document.getElementsByClassName("card")[0];
    item.innerHTML="";
    if(products.length===0)
    {
        var contents='<div class="card-body"><h2>NO ITEMS IN THE SHOP</h2></div>';
        item.innerHTML=contents;
    }
    else
    {
        item.innerHTML='<div class="row"><h2 style="padding: 0px 200px;">SHOP ITEMS</h2></div>';
    for(var i=0;i<products.length;i++)
    {
    var cartcontents='<div class="card-body"><div class="row"><div class="column" ><img class="col-sm" style="width:300px;" src="'+products[i].image+'"><h4 style="padding:0px 0px 0px 10px;">'+products[i].name+'</h4></div><h3 class="col-sm" style="padding:10px 0px 5px 50px;">RS.'+products[i].price+'/-</h3><div class="col-sm"><button type="button" style="height:50px;" class="btn btn-success" onclick="addToCart('+i+')">ADD TO CART</button></div></div></div>';  
    item.innerHTML+=cartcontents;
    }
    }
}
function showproductsCart()
{
    var item=document.getElementsByClassName("card")[1];
    item.innerHTML="";
    /**var create=document.createElement("div")
    create.className="card-body";*/
    if(cart.items.length===0)
    {   
        var contents='<div class="card-body"><h2>YOUR CART IS EMPTY</h></div>';
        item.innerHTML=contents;
    }
    else
    {
    var pr=0;
    item.innerHTML='<div class="row"><h2 style="padding: 0px 250px;">CART ITEMS</h2></div>';
    for(var i=0;i<cart.items.length;i++)
    {
    var cartcontents='<div class="card-body"><div class="row"><div class="column" ><img class="col-sm" style="width:300px;" src="'+cart.items[i].image+'"><h4 style="padding:0px 0px 0px 10px;">'+cart.items[i].name+'</h4></div><h3 class="col-sm" style="padding:10px 0px 5px 50px;">RS.'+cart.items[i].price+'/-</h3><div class="col-sm"><button type="button" style="height:40px;" class="btn btn-danger" onclick="removefromCart('+i+')">REMOVE</button></div></div></div>';  
    item.innerHTML+=cartcontents;
    pr+=cart.items[i].price;
    }
    var tot='<div class="row"><div class="card-body" style="padding:0px 10px 20px 350px;"><h3>TOTAL PRICE: RS.'+pr+'/-</h3></div></div>';
    item.innerHTML+=tot;
}
}   
function removefromCart(index) 
{
    var cartitem=cart.items[index];
    products.push(
        {
           price:cartitem.price,
           image:cartitem.image,
           name:cartitem.name
        });
    cart.totalprice-=cartitem.price;
    cart.items.splice(index,1);
    showproductsCart();
    showproductsShop();     
} 
function addToCart(index)
{
    var product=products[index];
    cart.items.push(
        {
           price:product.price,
           image:product.image,
           name:product.name
        });
    products.splice(index,1);
    showproductsShop();    
    showproductsCart();
}

showproductsShop();
showproductsCart();              
