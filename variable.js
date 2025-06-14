const accountId=12344;
let accountEmail="avadhesh@gmail.com";
var accountPassword="123456";
accountCity="mirzapur";
let addresh;  // variable value not difine then campilar  undefined print
console.log(accountId);
 // accountId=234;// this value not change because this variale is use const keyword
console.table([accountId,accountEmail,accountPassword,accountCity,addresh]);// this function value print in table form type
console.log("change the value ");
accountEmail="hp@gmail.com";
accountPassword="qwert";
accountCity="chunar";
addresh="rampur";
console.table([accountId,accountEmail,accountPassword,accountCity,addresh]);