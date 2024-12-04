

document.querySelector("#formData2").addEventListener("submit",(r)=>{
   r.preventDefault();


   let Email=document.querySelector("#email").value;
   let Pass=document.querySelector("#password").value;

  let obj={
    email:Email,
    pass:Pass

  }

  fetch(`http://localhost:3000/users?email=${obj.email}`)
  .then((res)=>{
    return res.json();

  })
  .then((Res)=>{
    console.log(Res)
    if(Res.length > 0)
    {
      alert("email already addded")
    }
    else{
      add(obj)
    }
    
  })
  .catch((err)=>{
    console.log(err);
    
  })







  
})


function add(obj){
  fetch(`http://localhost:3000/users`,{
     method : "POST",
     headers : {
       'Content-Type' : "application/json"
     },
     body : JSON.stringify(obj)
 })
 .then((Res)=>{
  return Res.json()
 })
 .then((res)=>{
  console.log(res)
 })
 .catch((err)=>{
  console.log(err)
 })
}
















