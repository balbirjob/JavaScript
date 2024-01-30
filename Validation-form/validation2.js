function acceptData(){
    let x = document.getElementById("username").value;
    validateUsername(x);

    let y =document.getElementById("password").value;
    validatepassword(y);
   
 }
 
 function validateUsername(x){
    let regux = /^[A-Za-z]+$/;
     if(x === ''){
         alert("username cannotbe empty");
     }
     else if(x.length < 5 || x.length > 15){
         alert("username should contain min 5 and max 15 character");
     }else if(regux.test(x)==false){
        alert("username should contain alfanumeric");
     }
     else{
         alert("valid username");
     }
 
 }