//Array in javaScript
numArray = [10,20,30,40,50];
console.log(numArray);
console.log("......................................");
numArray[2]= 99;
console.log(numArray);
console.log("......................................");
for(let i =0;i<numArray.length;i++){
    console.log(numArray[i]);
}


console.log(".........................");
arr = [1,2,3,4,5,6];
console.log(arr.length);
console.log(".........................");

arr.push(99);
console.log("before pop");
console.log(".........................");
for(let i =0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log("after pop");
console.log(".........................");
arr.pop();
for(let i =0;i<arr.length;i++){
    console.log(arr[i]);
}

console.log("...........Silce method..............");
console.log(arr.slice(1,4));
