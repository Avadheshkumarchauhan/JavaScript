function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(4,5,7));
 
const user={
    id:"1234",
    names:"avadhesh"
}
function loggind(anyobject){
    return `My id is  ${anyobject.id} and name is ${anyobject.names} `;
}
console.log(loggind(user))
//0r
console.log(loggind({id:5678,names:"hello"}));

const newarray=[2,8,4,1,0,5];
function arrayvalue(getarray){
    return getarray[4];
}
console.log(arrayvalue(newarray));
console.log(arrayvalue([4,8,0,6,2,1,3,7]));