function render() {
    let data = new URLSearchParams(window.location.search);
    let id = data.get("id");

    fetch(`http://localhost:3000/products?id=${id}`)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            document.querySelector("#row").innerHTML = view(res);
        })
        .catch((err) => {
            console.log(err);
        });
}

function view(arr) {
    return `
        <div class="col-3" id="image1">
            <img src="${arr.img}" alt="Product Image">
        </div>
        <div class="col-6 position-relative" id="side1">
            <p id="pp1">${arr.title}
                <br><font id="pp2">(10ml)</font></p>
            <font>
                <img src="img/images-removebg-preview (1).png" alt="Rating" id="imgg1">
                <font class="ps-3" id="pp3">4.4/5</font>
                <font id="pp4">|</font>
                <font id="pp5">627 ratings & 88 reviews</font>
            </font>
            <p id="pp6">MRP: 3200</p>
            <font>inclusive of all taxes <i class="fa-solid fa-exclamation"></i></font>
            
            <div class="mt-4">
                <button id="btnn1" class="border-dark">10ml</button>
                <button id="btnn2">100ml</button>
                <button id="btnn3">50ml</button>
            </div>

            <div class="mt-4">
                <button id="btnn4">Add To Bag</button>
            </div>
            
            <div class="line mt-3"></div>

            <font id="pp7">
                <i class="fa-solid fa-location-dot"></i>
                <font> Delivery Options</font>
            </font>
            <input type="text" id="in1" placeholder="Enter pincode" class="ps-3 mt-2">
            
            <div class="row mt-5">
                <div class="col-4" id="boxx1">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-2">
                            <img src="img/download.png" alt="Genuine Products" id="imgg2">
                        </div>
                        <div class="col-10">100% Genuine Products</div>
                    </div>
                </div>
                <div class="col-4" id="boxx2">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-2">
                            <img src="img/download (1).png" alt="Return Policy" id="imgg2">
                        </div>
                        <div class="col-10">Easy Return Policy</div>
                    </div>
                </div>
                <div class="col-4 d-flex justify-content-center align-items-center" id="boxx3">
                    <p id="pp8">Sold by: Nykaa E retail</p>
                </div>
            </div>
        </div>
    `;
}

render();





// function render() {

//     let data = new URLSearchParams(window.location.search)
//     let id = data.get("id")
//     fetch(`http://localhost:3000/products?id=${id}`)
//         .then((res) => {
//             return res.json()
//         })
//         .then((res) => {
//             document.getElementById("box").innerHTML = view(res)
//         })
//         .catch((err) => {
//             console.log(err)
//         })


// }

// function view(arr){
//     return `<div>
//           <img src="${arr[0].image}" width="150px">
//     </div>`
// }

// render()