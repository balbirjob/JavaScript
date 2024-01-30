function acceptData(){

    let pass = document.getElementById("pass").value;
    validatepassword(pass);
   
 }
 
 function validatepassword(pass){
    let digtregux = /[0-9]/;
    let upercaseregux = /[A-Z]/;
    let lowercaseregux = /[a-z]/;
     if(pass === ''){
         alert("password cannotbe empty");
     }
     else if(pass.length < 8 || pass.length > 12){
         alert("password should contain min 8 and max 12 character");
     }else if(digtregux.test(pass) == false){
        alert("password should contain at list 1 digit 1 upercase 1 lowercase");
    }
    else if(upercaseregux.test(pass) == false){
        alert("password should contain at list 1 upercase");
    }
    else if(lowercaseregux.test(pass) == false){
        alert("password should contain at list  1 lowercase");
    }
     else{
         alert("valid password");
     }
 
 }