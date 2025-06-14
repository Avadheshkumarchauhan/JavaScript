// Array 
const myarray=[0,2,3,5,7.5,true,"avadhesh"]  
console.log(myarray[4]);
console.log(typeof(myarray[4]));
const myarray2=new Array(1,4,5,7,"hello",false);
// Array method .....
myarray2.push(6);
myarray2.pop();
myarray2.unshift(9);  //add data in 0 index
myarray2.shift(); //remove data in array in 0 index
console.log(myarray2.includes(6));
console.log(myarray2);
console.log(myarray2.indexOf(5));
console.log(typeof(myarray2));
const newarr=myarray2.join();
console.log(newarr);
console.log(typeof(newarr));
const myn1=myarray2.slice(1,4);
console.log(myn1);
console.log(myarray2);
const myn2=myarray2.splice(1,4);
console.log(myn2);
console.log(myarray2);
