function fetchingData()
{
    fetch('http://localhost:3000/cart')
    .then((res)=>{
        return res.json();
    })
    .then((Res)=>{
        total(Res)
        document.querySelector(".add2").innerHTML=view(Res)


        if(Res.length==0)
        {
            window.location.href="care.html"
        }

        document.querySelector("#btn4").addEventListener("click",()=>{
          container.innerHTML = " "
        })
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
}


function total(Res)
{
    let sum=0;

    Res.forEach((el,ind) =>{
        sum+=Number(el.price) * Number(el.quantity);
    });
    document.querySelector(".bill").innerText = sum
}


function view(arr)
{
    return arr.map((el,ind)=>{
        return`
            <div class="row" id="cartRow">
                <div class="col-2 d-flex justify-content-center align-items-center">
                 
        <img src="${el.image}" alt="" id="cartImg">
                      
                </div>
                <div class="col-7 position-relative  d-flex justify-content-center align-items-start flex-column">
                    <p id="cartName">${el.name}</p>
                    <p id="cartExtra">${el.extra}</p>
                    <p id="cartRemove" onclick="deleteData(${el.id})">remove</p>
                </div>
                <div class="col-3  d-flex justify-content-center align-items-center">
                                  <div class="row">
                                       <div class="col-12">
                                           <font id="cartPrice">₹${el.price}</font>
                                           <font id="cartMrp">₹${el.mrp}</font>
                                           <font id="cartOff">${el.off}</font>
                                       </div>

                                       <div class="col-12">
                                         <div id="cartItem" class="d-flex justify-content-center align-items-center">
                                         
                                         <div class="row d-flex justify-content-center align-items-center" id="row13">
                                                 <div class="col-3 fs-4" id="minus" onclick="minus(${el.id}, ${el.quantity})">-</div>
                                                 <div class="col-6 text-center">${el.quantity}</div>
                                                 <div class="col-3 fs-4" id="plus" onclick="plus(${el.id}, ${el.quantity})">+</div>
                                         </div>
                                         
                                         </div>
                                       </div>
                                  </div>
                    
                  
                </div>
               </div>
                      <div class="line"></div>


        `
    }).join(" ")
}

function deleteData(id){
   fetch(`http://localhost:3000/cart/${id}`,{
    method : "DELETE"
   })
   .then((res)=>{
    return res.json();
   })
   .then((Res)=>{
    fetchingData();


    
   
    
   })
   .catch((err)=>{
    console.log(err);
    
   })
   
}


function plus(id,quantity)
{
    let newquantity=quantity+1;




     fetch(`http://localhost:3000/cart/${id}`, {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ quantity: newquantity })
    })
    .then((res) => res.json())
    .then((res) => {
        fetchingData();
    })
    .catch((err) => {
        console.log(err);
    });
}



function minus(id,quantity)
{
   
        let newquantity = quantity-1;
    if(newquantity < 1)
    {
        alert("quantity cannot less than 1")
        return;
    }





     fetch(`http://localhost:3000/cart/${id}`, {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ quantity : newquantity }) 
    })
    .then((res) => res.json())
    .then((res) => {
        fetchingData();
    })
    .catch((err) => {
        console.log(err);
    });
}












fetchingData()