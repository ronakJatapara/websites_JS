

function fetching()
{
    
fetch(`http://localhost:3000/cart`)
.then((Res)=>Res.json())
.then((res)=>{
    
    console.log(res);
    total(res)
    document.querySelector("#add").innerHTML = view(res)

    
    // document.querySelector("#total").innerHTML = view(res)

    
})
.catch((err)=>{
    console.log(err)
})
}

function total(res)
{
    let sum=0;
    res.forEach((el,ind)=>{
        sum+=el.price;
    })

    document.querySelector("#totalAdd").innerHTML=sum;

}


function view(arr){
  
    return arr.map((el,ind)=>{
        return `
       
            <div class="col-4 mt-5">
                <div class="img15">
                    <img src="${el.img}" alt="">
                </div>
                <div class="text15 d-flex justify-content-center align-items-center flex-column">
      <p class="pp16 text-center">${el.title}</p>
      <p class="pp17">${el.price}</p>
      <span class="d-flex justify-content-center align-items-center" id="span"><img src="img/images-removebg-preview (1).png" alt="" id="img16"><font>4.4</font></span>
      <br><br>
 <div class="btns">
    <button id="btn20">-</button>
<input type="" name="" id="btn21" class="text-center" placeholder="Quentity : 1" checked>
    <button id="btn22" onclick(plus())>+</button>
 </div>
<button id="delete" onclick="delete1(${el.id})"><i class="fa-solid fa-trash"></i></button>


                </div>
            </div>
           
      
        `
        
    }).join("")
}
function delete1(id)
{
    fetch(`http://localhost:3000/cart/${id}`,{
        method : "DELETE"
        
    })
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        fetching()
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
}

fetching();



