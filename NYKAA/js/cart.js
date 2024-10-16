




fetch(`http://localhost:3000/cart`)
.then((Res)=>Res.json())
.then((res)=>{
    
    console.log(res);
    document.getElementById("box").innerHTML = view(res)
    
})
.catch((err)=>{
    console.log(err)
})


function view(arr){
  
    return arr.map((el)=>{
        return `<div id="">
                <div>
                   <img src="${el.img}" width="150px" height="150px"/>
                </div>
                <div>
                    <p>${el.id}</p>
                </div>
        </div>`
    }).join("")
}