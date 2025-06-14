function names(){
    console.log("hello ");
    console.log("world ");
}
names();
names();
// names();
// names();
// names();
function sum(n1,n2){
    console.log(n1+n2);

}
sum(4,7);
//or
function sub(n1,n2){
    return n1-n2;


}
const result=sub(7,2);
console.log("Result = ",result);

function loggined(username="Hello "){
    if(!username){
        console.log("Please enter user name")
        return ;
    }
    return `${username } is loggined `;
}
console.log(loggined());