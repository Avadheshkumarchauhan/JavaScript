class product{
    //product ->variable->data member
    name="avadhesh";

    price=50000;
    rating=5;
    // create constructer
    constructor(n,p,r){
        this.name=n;
        this.price=p;
        this.rating=r;
        console.log("calling the construtor ");
        //return {x:100, y:300,x:79};// not function calling the execute constractor
    }
    static as(){
        console.log("static method");
    }
    //behaviors->function->member function
    display(){
        console.log("Display the curent product",this.name,this.price,this.rating);
    }
}
const p=new product("iphone",100000,4  );
console.log(p);
p.display();
product.as();
