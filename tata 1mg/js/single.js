



function render()
{
    let data = new URLSearchParams(window.location.search)
    let id=data.get("id");

    fetch(`http://localhost:3000/products?id=${id}`)
    .then((res)=>{
        return res.json();
    })
    .then((Res)=>{
        console.log(Res);
        document.querySelector(".bigimg").innerHTML=view2(Res)

        
    })
    .catch((err)=>{
        console.log(err);
        
    })
}








function render2()
{
    let data2 = new URLSearchParams(window.location.search)
    let id2=data2.get("id");

    fetch(`http://localhost:3000/small?id=${id2}`)
    .then((res)=>{
        return res.json();
    })
    .then((Res)=>{
        // console.log(Res);
        document.querySelector(".smallimg").innerHTML=view(Res)

        
    })
    .catch((err)=>{
        console.log(err);
        
    })
}






function view(arr)
{
    // console.log(arr);
    
    return arr.map((el,ind)=>{
        return`
            
                 
            <div class="smallimg1">
                            <img src="${el.img1}" class="card-img-top img-fluid" alt="..." id="productImage1" class="img-fluid">

            </div>
            <div class="smallimg2">
                            <img src="${el.img2}" class="card-img-top img-fluid" alt="..." id="productImage2" class="img-fluid">
                
            </div>
            <div class="smallimg3">
                            <img src="${el.img3}" class="card-img-top img-fluid" alt="..." id="productImage3" class="img-fluid">
                
            </div>
            <div class="smallimg4">
                            <img src="${el.img4}" class="card-img-top img-fluid" alt="..." id="productImage4" class="img-fluid">
                
            </div>
            <div class="smallimg5">
                            <img src="${el.img5}" class="card-img-top img-fluid" alt="..." id="productImage5" class="img-fluid" >
                
            </div>
        



        
               

            
        `
    })
}

function view2(arr)
{
    return`
        <div class="bigImage">
            <img src="${arr[0].image}" class="img-fluid">  
        </div>
    `
     
}










function render3()
{
    let data3= new URLSearchParams(window.location.search);
    let id3=data3.get("id");


    fetch(`http://localhost:3000/bigText?id=${id3}`)
    .then((res)=>{
        return res.json();

    })
    .then((Res)=>{
        // console.log(Res);
        document.querySelector(".bigText").innerHTML=view3(Res)
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
}


function view3(arr)
{
    return arr.map((el,ind)=>{
        return`
          <p id="prName" class="ps-3">${el.name1}</p>
          <p id="prLtd" class="ps-3">${el.ltd}</p>
            <div class="row d-flex justify-content-center align-items-center">
    <div class="col-2  ">
           <div class="ms-3" id="textReview">4.3<i class="fa-solid fa-star"></i></div>
    </div>
    <div class="col-10">
         <font id="rating">${el.ratingReview}</font>
    
    </div>
  </div>
  <p class="ps-3 pt-3" id="title">${el.title}</p>
     <ul>
    <li>${el.titleNote1}</li>
    <li>${el.titleNote2}</li>
    <li>${el.titleNote3}</li>
    <li>${el.titleNote4}</li>
    </ul>
        `
    })
}







render();
render2();
render3();