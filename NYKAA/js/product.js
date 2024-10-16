



fetch(`http://localhost:3000/products`)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log(res)
   document.querySelector(".box").innerHTML=view(res)
    
})
.catch((err)=>{
    console.log(err);
    
})

function view(arr)
{
    return arr.map((el,ind)=>{
        return`
        <div class="col-3 border d-flex justify-content-center align-items-center flex-column mt-5" id="box2">
     <div class="img2">
     <img src="${el.img}">
     </div>
     <div class="text2 text-center">
     <p>${el.title}</p>
     <p>${el.price}</p>
 
</div>
   <a href="single.html?id=${el.id}"> <div class="row border" id="box3">
  <div class="col-3" id="last1">
  <i class="fa-regular fa-heart"></i>
  </div>
  <div class="col-9" id="last2">
  Add To Bag
  </div>
  </a>

     </div>
        

        

        </div>
        `
    }).join("")
}