const user={
    username:"Avadhesh",
    passwors:"123345",
    welcomemassege:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
user.welcomemassege();
user.username="hello";
user.welcomemassege();
//console.log(this);// this is a empty object