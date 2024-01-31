console.log("Serve bread");
prepareOmlette(5000,serveOmlette);
console.log("Serve coffe");

//call back function
function serveOmlette(){
    console.log("Serve omlette");
}

//high-order fuction
function prepareOmlette(duration,callback){
    console.log("Omlette preparation started");
    setTimeout(()=>{
        console.log("Omlette preparation completed");
    },duration);

}