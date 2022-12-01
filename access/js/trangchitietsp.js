
function getUrlParams() {
    const params = new URLSearchParams (window.location.search);
    return params;
}
var maSp=getUrlParams().get("maSp");
console.log(maSp);
let product1=[];
function LoadJson(){
    fetch("./access/json/listproduct.json")
    .then(function(response){
        if(!response.ok){
            throw new Error("có lỗi: (")
        }
        return response.json()
    })
    .then(
        function (data){
            let items="";
            let slider="";
            let productPrice="";
            for(let p of data){
                let html ="";
                let productDescription="";
                var priceDisount=0;
                priceDisount = p.Price-p.Discount*p.Price/100;
                if(p.MaSP == maSp){
                    console.log(maSp)
                    items="<div class='item'  data-bs-target='#carouselExampleDark' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1' alt=''>";
                    items+="<img class='w-100' src='./access/Img/sanpham/"+p.Hinhanh[0]+"' />";
                    items+="</div>";

                    slider="<div class='carousel-item active' data-bs-interval='5000'>";
                    slider+="<img src='./access/Img/sanpham/"+p.Hinhanh[0]+"' class='d-block w-100' alt=''>";
                    slider+="</div>"
                    for (let a = 1; a < p.Hinhanh.length; a++) {
                        items+="<div class='item '  data-bs-target='#carouselExampleDark' data-bs-slide-to='"+a+"' aria-label='Slide "+(a+1)+"' alt=''>";
                        items+="<img class='w-100 ' src='./access/Img/sanpham/"+p.Hinhanh[a]+"' />"; 
                        items+="</div>";

                        slider+="<div class='carousel-item' data-bs-interval='5000'>";
                        slider+="<img src='./access/Img/sanpham/"+p.Hinhanh[a]+"' class='d-block w-100' alt=''>";
                        slider+="</div>";
                    }

                    if(p.Discount == 0){
                        productPrice="<span class='product__price-current'>"+p.Price+".000đ</span>";
                    }else{
                        productPrice="<span class='product__discount' >-"+p.Discount+"%</span>";
                        productPrice+="<span class='product__price-current'>"+priceDisount+".000đ</span>";
                        productPrice+="<span class='product__price-old'>"+p.Price+".000đ</span>";
                    }
                    document.getElementById("product__price").innerHTML=productPrice;
                    for (let b = 0; b < Object.keys(p.Mota).length; b++) {
                        productDescription+="<p>"+p.Mota[b]+"</p>"
                        
                    }
                    var count=0;
                    for(let d of data){
                        if(d.Hang == p.Hang){
                            if(count<6){
                                count ++;
                                function showProduct(d) {
                                    var s = 0;
                                    s=d.Price-d.Discount*d.Price/100;
                                    let price ="";
                                    let discountTag="";
                                    if (d.Discount==0) {
                                        price+="<div class='home-product-item__price'>";
                                        price+="<span class='home-product-item__price-no-discount'>"+d.Price+".000đ</span>";
                                        price+="</div>";
                                    }else{
                                        price+="<div class='home-product-item__price'>";
                                        price+="<span class='home-product-item__price-current'>"+s+".000đ</span>";
                                        price+="<span class='home-product-item__price-old'>"+d.Price+".000đ</span>";
                                        price+="</div>";
                                        
                                        discountTag+="<div class='home-product-item__sale-off'>";
                                        discountTag+="<div class='home-product-item__sale-off-percent'>"+d.Discount+"%</div>";
                                        discountTag+="<div class='home-product-item__sale-off-label'>GIẢM</div>";
                                        discountTag+="</div>";
                                    }
                                    
                                    html+="<div class='col-2 product' id='"+d.MaSP+"'>";
                                    html+="<button class='home-product-item w-100'  type='submit' name='maSp' id='"+d.MaSP+"' value='"+d.MaSP+"'>";
                                    html+="<div class='home-product-item__img' style='background-image:url(./access/Img/sanpham/"+d.Hinhanh[0]+")'></div>";
                                    html+="<h4 class='home-product-item__name'>"+d.TenSP+"</h4>";
                                    html+=price;
                                    html+="<div class='home-product-item__action'>";
                                    html+="<span class='home-product-item__like home-product-item__like--liked'>";
                                    html+="<i class='home-product-item__like-icon-emty fa-regular fa-heart'></i>";
                                    html+="<i class='home-product-item__like-icon-fil fa-solid fa-heart'></i>";
                                    html+="</span>";
                                    html+="</div>";
                                    html+="<div class='home-product-item__origin'>";
                                    html+="<div class='home-product-item__grand'>"+d.Hang+"</div>";
                                    html+="<div class='home-product-item__origin-name'>Nhật bản</div>";
                                    html+="</div>";
                                    html+="<div class='home-product-item__favor'>";
                                    html+="<i class='fa-solid fa-check'></i>";
                                    html+="<span>Yêu thích</span>";
                                    html+="</div>";
                                    html+=discountTag;
                                    html+="</button>";
                                    html+="</div>";
                                }
                                showProduct(d)
                            }else{
                                html+="";
                            }

                        }
                    }
                    document.getElementById("product-name").innerHTML=p.TenSP;
                    document.getElementById("product-brand").innerHTML=p.Hang;
                    document.getElementById("items").innerHTML=items;
                    document.getElementById("slider").innerHTML=slider;
                    document.getElementById("product__description-detail").innerHTML=productDescription;
                    document.getElementById("curent_product").innerHTML=p.TenSP;
                    document.getElementById("total_product").innerHTML=html;
                    
                
                }
            }
            }

        )
        .catch(function(err){
            throw new Error(err.message);
        })
        }   
let amountElement = document.getElementById('amount');
let amount=amountElement.value;
let render=(amount) =>{
amountElement.value=amount
}
let handlePlus=()=>{
    amount++;
    render(amount);
}
let handleMinus=()=>{
    amount--;
    render(amount)
}
// var x=60
// console.log(x);
// let minus=()=>{
//     x--;
// console.log(x);

// }
setInterval(minus,1000);
let showDescription=()=>{
    document.getElementById("product__description-detail").classList.toggle("activate");
    document.getElementById("minus-icon-1").classList.toggle("deactivate");
    document.getElementById("plus-icon-1").classList.toggle("activate");
}
let showEvaluate=()=>{
    document.getElementById("product-evaluate").classList.toggle("activate");
    document.getElementById("minus-icon-2").classList.toggle("deactivate");
    document.getElementById("plus-icon-2").classList.toggle("activate");

}
function clickCounter() {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
      sessionStorage.clickcount = 1;
      }
    console.log(sessionStorage.clickcount);
  }