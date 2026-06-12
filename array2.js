const arr1=["hello","sello","dello"];
const arr2=["avadhesh","amit","vijay"]
arr1.push(arr2);
console.log("1",arr1);
const arr4=arr1.concat(arr2);
console.log("2" ,arr4);
const arr5=[...arr1,...arr2];
console.log("3",arr5);
const arr6=arr5.flat(Infinity);
console.log("4",arr6);