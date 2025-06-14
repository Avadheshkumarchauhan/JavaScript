/*
"23"=>23
"23abc"=>NaN
null=> 0
undefined=>NaN
*/
// convert string to number
let str;
let con_number=Number(str);
console.table([typeof(str),typeof(con_number),con_number]);
// conver number & string to boolean
/*
1=>true
0=>false
"123dsfd"=>true
""=>false
null=>false
undefined=>false
*/
let Bolleans;
let con_boleans=Boolean(Bolleans);
console.table([typeof(Bolleans),typeof(con_boleans),con_boleans]);
// convert number & boolean to string
/*
1=>'1'
null=>'null'
undefined=>'undefined'
true=>'true'
false=>'false'
*/
let num=null;
let con_string=String(num);
console.table([typeof(num),typeof(con_string),con_string]);