

document.querySelector("#formData").addEventListener("submit",(r)=>{
    r.preventDefault();
 
    let email=document.querySelector("#input1").value;

if(email.length > 0)
{
    window.location.href="signup.html"

}    
 
 
 })



 
