function acceptData(){

    let email = document.getElementById("email").value;
    validatepassword(email);
   
 }
 
 function validatepassword(email){
    let regux = /^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]+$/
     if(email === ''){
         alert("email cannotbe empty");
     }
    else if(regux.test(email) == false){
        alert("email should follow the format - alphanumeric @ alphanumeric . alphabets");
    }
     else{
         alert("valid email");
     }
 
 }