







fetch(`http://localhost:3000/products`)
.then((res)=>{
    return res.json();
})
.then((Res)=>{
    console.log(Res);
   document.querySelector("#row6").innerHTML=view(Res)

    
})
.catch((err)=>{
    console.log(err);
    
})



function view(arr)
{
    return arr.map((el,ind)=>{
        return`
                      <div class="col-sm-12 col-md-6 col-lg-3 ronak2 d-flex  justify-content-center mt-3 ">
        <a href="single.html?id=${el.id}" class="text-decoration-none"> 

                  <div class="card">
                <div class="productimg">
                            <img src="${el.image}" class="card-img-top img-fluid" alt="..." id="productImage">
                
                </div>

                            <div class="card-body position-relative">
                              <h5 class="card-title text-dark" id="productName">${el.name}</h5>
                              <p class="card-text" id="productExtra">${el.extra}</p>
                      
                            <div class="row d-flex" id="row7">
                                <div class="col-4 rateimg d-flex">
                                    <div id="rate1" class="d-flex justify-content-center align-items-center">4.3<i class="fa-solid fa-star"></i></div> 
        
                                </div>
                                <div class="col-8 rate">
                                    <font id="rating">${el.rate}</font>
                                </div>
                            </div>
                            

                              <font id="mrp">MRP :- <font id="line"> ${el.mrp}</font><font id="off">${el.off}</font></font>
                                 <div class="row" id="row8">
                            <div class="col-12 productprice">
                                <h5 class="text-dark" id="productPrice">$:- ${el.price}</h5>
                            </div>
                        </div>

                            
                              
                            </div>
                          </div>
</a>

                      </div>


                            <img src="${el.image1}" class="card-img-top img-fluid" alt="..." id="productImage1">



        `
    }).join("")
}





// fetch(`http://localhost:3000/products`)
// .then((res)=>{
//     return res.json();
// })
// .then((res)=>{
//     console.log(res)
//    document.querySelector(".box").innerHTML=view(res)
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })

// function view(arr)
// {
//     return arr.map((el,ind)=>{
//         return`
//         <div class="col-3 border d-flex justify-content-center align-items-center flex-column mt-5" id="box2">
//      <div class="img2">
//      <img src="${el.img}">
//      </div>
//      <div class="text2 text-center">
//      <p>${el.title}</p>
//      <p>${el.price}</p>
 
// </div>
//    <a href="single.html?id=${el.id}"> <div class="row border" id="box3">
//   <div class="col-3" id="last1">
//   <i class="fa-regular fa-heart"></i>
//   </div>
//   <div class="col-9" id="last2">
//   Add To Bag
//   </div>
//   </a>

//      </div>
        

        

//         </div>
//         `
//     }).join("")
// }