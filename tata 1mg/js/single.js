function render() {
    let data = new URLSearchParams(window.location.search)
    let id = data.get("id");

    fetch(`http://localhost:3000/products?id=${id}`)
        .then((res) => {
            return res.json();
        })
        .then((Res) => {
            // console.log(Res);
            document.querySelector(".bigimg").innerHTML = view(Res)
            // posting(Res)

            document.querySelector("#btn1").addEventListener("click", () => {

                fetch(`http://localhost:3000/cart?id=${id}`)
                    .then((res) => {
                        return res.json();
                    })
                    .then((Res) => {
                        console.log(Res);
                        PostData(Res)

                    })
                    .catch((err) => {
                        console.log(err);

                    })


            })



        })
        .catch((err) => {
            console.log(err);

        })
}


function render2() {
    let data2 = new URLSearchParams(window.location.search)
    let id2 = data2.get("id");

    fetch(`http://localhost:3000/small?id=${id2}`)
        .then((res) => {
            return res.json();
        })
        .then((Res) => {
            // console.log(Res);
            document.querySelector(".smallimg").innerHTML = view2(Res)




        })
        .catch((err) => {
            console.log(err);

        })
}


function view2(arr) {
    // console.log(arr);

    return arr.map((el, ind) => {
        return `
            
                 
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
    }).join("");
}


function view(arr) {
    return `
        <div class="bigImage">
            <img src="${arr[0].image}" class="img-fluid">  
        </div>
    `

}


function render3() {
    let data3 = new URLSearchParams(window.location.search);
    let id3 = data3.get("id");


    fetch(`http://localhost:3000/bigText?id=${id3}`)
        .then((res) => {
            return res.json();

        })
        .then((Res) => {
            // console.log(Res);
            document.querySelector(".bigText").innerHTML = view3(Res)


            document.querySelector("#btn1").addEventListener("click", () => {

                fetch(`http://localhost:3000/cart?id=${id}`)
                    .then((res) => {
                        return res.json();
                    })
                    .then((Res) => {
                        // console.log(Res);
                        //   posting(Res[0])

                    })
                    .catch((err) => {
                        console.log(err);

                    })

            })

        })
        .catch((err) => {
            console.log(err);

        })
}


function view3(arr) {
    return arr.map((el, ind) => {
        return `
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
    }).join("");
}


function render4() {
    let data4 = new URLSearchParams(window.location.search);
    let id4 = data4.get("id");


    fetch(`http://localhost:3000/price?id=${id4}`)
        .then((res) => {
            return res.json();
        })
        .then((Res) => {
            // console.log(Res);
            document.querySelector(".bigBox").innerHTML = view4(Res)

            document.querySelector("#btn1").addEventListener("click", () => {

                fetch(`http://localhost:3000/cart?id=${id}`)
                    .then((res) => {
                        return res.json();
                    })
                    .then((Res) => {
                        // console.log(Res);
                        //   posting(Res[0])

                    })
                    .catch((err) => {
                        console.log(err);

                    })

            })

        })
        .catch((err) => {
            console.log(err);

        })
}


function view4(arr) {
    return arr.map((el, ind) => {
        return `
        <div class="uper">
        
                <div class="row">
                   <div class="col-2 d-flex justify-content-end align-items-center">
                   <img src="${el.arrow}"></div>
                   <div class="col-10   d-flex justify-content-start align-items-center"><font id="upertext">${el.text}</font></div>
                </div>
        
              </div>

               <div class="lower ">
                <div class="row  d-flex justify-content-center align-items-center mt-3">
                    <div class="col-1"><i class="${el.circle} ps-2"></i></div>
                    <div class="col-8  d-flex justify-content-start align-items-center"><font id="mrp2" class="">${el.mrp2}</font> <font id="realprice" class="ps-2">${el.realprice}</font><div id="lastDis2" class=" d-flex justify-content-center align-items-center">${el.off}</div></div>
                    <div class="col-3"></div>
                </div>
                <div class="row d-flex ">
    <div class="col-1  d-flex justify-content-center align-items-center ps-4 ">
                   <input type="radio" name="" id="radio" class="ps-2">
    </div>
    <div class="col-10 d-flex  align-items-center">
  <font id="mainprice">  ${el.mrp2}</font>
  <div id="core" class="ms-3">${el.core}</div>
  <font id="mprice" class="ps-2">${el.mprice}</font>
  
    </div>
    <div class="col-1"></div>
    <div class="col-11 ps-5" id="free">${el.free}</div>
</div>


<font class="ps-2 " id="tex">${el.tex}</font>
<br>
  <select name="" id="selectpacket" class="ms-2 mt-3">
                <option value="">${el.p1}</option>
                <option value="">${el.p2}</option>
                <option value="">${el.p3}</option>
                <option value="">${el.p4}</option>
                <option value="">${el.p5}</option>

            </select>
            <font id="off2">${el.off2}</font>


            <button id="btn1" onclick="PostData('${el.id}')">ADD TO CART</button>
                   

            </div>
             
        `
    }).join("")
}


function PostData(data) {
    
    fetch(`http://localhost:3000/cart?id=${data}`)
        .then((res) => {
            return res.json();
        })
        .then((Res) => {
            if (Res.length > 0) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Product already added",
                   
                  });
            } else {
                let count=0;
                fetch(`http://localhost:3000/products?id=${data}`)
                    .then((res) => res.json())
                    .then((Res) => {
                        fetch(`http://localhost:3000/cart`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ ...Res[0], quantity: 1 })
                        })
                            .then((res) => res.json())
                            .then((Res) => {
                               
                                Swal.fire({
                                    title: "Good job!",
                                    text: "You clicked the button!",
                                    icon: "success"
                                  });
                            
                                  

                            })
                    })
                    .catch((err) => console.log(err))
            }

        })
        .catch((err) => {
            console.log(err);

        })




}


render();
render2();
render3();
render4();
// PostData()