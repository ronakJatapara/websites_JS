let arr = [];

document.querySelector("#formdata").addEventListener("submit", (r) => {
    r.preventDefault();  
    let valid = true;

    let name = document.querySelector("#name").value;
    let phone = document.querySelector("#pnumber").value;
    let email = document.querySelector("#email").value;

    // Clear previous error messages


    if (name.length === 0) {
        document.querySelector("#p9").innerHTML = "PLEASE ENTER YOUR NAME";
        document.querySelector("#p9").style.display = "block";
        document.querySelector("#p9").style.color = "red";
        valid = false;
    }
    if (phone.length === 0) {
        document.querySelector("#p10").innerHTML = "PLEASE ENTER YOUR NUMBER";
        document.querySelector("#p10").style.display = "block";
        document.querySelector("#p10").style.color = "red"; 
        valid = false;
    }
    if (email.length === 0) {
        document.querySelector("#p11").innerHTML = "PLEASE ENTER YOUR EMAIL";
        document.querySelector("#p11").style.display = "block";
        document.querySelector("#p11").style.color = "red"; 
        valid = false;
    }

    // Only create obj and make fetch call if valid
    if (valid) {
        let obj = {
            NAME: name,
            PHONE: phone,
            EMAIL: email
        };
        arr.push(obj);
        console.log(arr);
        
        fetch(`http://localhost:3000/users`,{
         method: "POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify(obj)
       })
       .then((res)=>{
         return res.json();
       })
       .then((res)=>{
         console.log(res);
         window.location.href="home.html"
         
       })
       .catch((err)=>{
         console.log(err);
         
       })
    }


   
});
