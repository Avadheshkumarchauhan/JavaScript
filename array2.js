const arr1=["hello","sello","dello"];
const arr2=["avadhesh","amit","vijay"]
arr1.push(arr2);
console.log(arr1);
const arr4=arr1.concat(arr2);
console.log(arr4);
const arr5=[...arr1,...arr2];
console.log(arr5);
const arr6=arr5.flat(Infinity);
console.log(arr6);