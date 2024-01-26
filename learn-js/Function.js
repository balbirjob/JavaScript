// Function in javaScript
console.log("............................Function in javaScript.........................");

//Syntax
/**
 * 
 * 
 * function function_name(parameters){
 * 
 * }
 * 
 * 
 * 
 */


//Types of function

//1. no-return value + no parameters
console.log("................no-return value + no parameters............");
function add(){
    let a = 5;
    let b =10;
    let sum = a + b;
    console.log("Sum "+sum);
}
add();

//2. no-return value + accept parameters
console.log("................no-return value + accept parameters............");
function addx(x, y){
   
    let sum2 = x + y;
    console.log("Sum2 "+sum2);
}
addx(10,30);


//3. accept return value + accept parameters
console.log("........................ accept return value + accept parameters.............");
function addy(m,n){

    let sumx = m + n;
    return sumx;
}
newproduct=addy(50,20);
console.log(newproduct);


//3. return value + no parameters
console.log("........................return value + no parameters.............");
function addz(){
    let p= 50;
    let q = 100;
    let sumpq = p + q;
    return sumpq;
}
pro = addz();
console.log("Sum3 "+pro);