const obj= new Object();

//OR
const obj1={}
console.log(obj1);
obj1.id="12345";
obj1.name="AVADHESH";
console.log(obj1);
//OR

const obj2={
    id:1234,
    name:"avadhesh"
}

console.log(obj2)
const obj3={
    id:12345,
    email:"avadhesh@gmail.com",
    Fullname:{
        fname:"Avadhesh",
        lastname:"Chauhan",
        midname:{
            nickname:"chauhan"
        }

    }
}
console.log(obj3);
//console.table(obj3);
const ob={
    1:'a',2:'b',3:'c'
}
const ob1={
    4:'d',5:'e'
}
//add two more then object
const ob2={ob,ob1};

console.log(ob2)
const ob3=Object.assign({},ob,ob1,obj3);
console.log(ob3);
const ob4={...ob,...ob1};
console.log(ob4);
console.log(Object.keys(ob3));
console.log(Object.values(ob3));
console.log(Object.entries(ob3));
console.log(ob3.hasOwnProperty('1'));
const objs={
    id:"123435",
    names:"Hello",
    Email:"hello@gmail.com"
}

//console.log(objs.id);
//or
const {names}=objs
console.log(names);
//or
const {Email:n}=objs
console.log(n);
