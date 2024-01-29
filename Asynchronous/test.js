//Asynchronous programming
console.log("One");
console.log("two");
console.log("three");
setTimeout(hello, 5000);

function hello(){
    console.log("Hello");
}

setTimeout(()=>{
    console.log("hi");
},500)
