try {
//     let x = {} //this is not map and not work map method
//     x.set(3,8)
// console.log(x);

    let map = new Map();
    
    map.set(1,2);
    map.set(1,3);
    map.set("1",1)
    map.set("1",2)
    map.set("a",2)
    //map.set(a,2)
    console.log("Size of map : ",map.size);
    console.log("map : ", map);
    console.log("Keys of map : ",map.keys());
    console.log("value of map : ",map.values());
    console.log("entities of map : ",map.entries());
    console.log("get value of map : ",map.get(1));
    console.log("get value of map : ",map.get("1"));
    console.log("get value of map : ",map.get('1'));
    console.log("get value of map : ",map.get(3));
    console.log("get value of map : ",map.get("a"));
    
    for(let x of map.keys()){
        console.log(x ,":",map.get(x));
        
    }
    for(let x  of map.keys()){
        console.log(x ,"=",map.get(x));
        
    }
    for(let x of map){
        console.log(x );
        
    }
    for(let x of map.values()){
        console.log(x );
        
    }
    for(let x of map.entries()){
        console.log(x );
        
    }
    
    map.forEach((value,key,obj)=>{
        console.log(key,":",value,"in",obj);
        
    });
    
    
    let y =map.keys();
    let v =map.values();
    let e=map.entries();
    //console.log(y.next().value);
    for(let i=0;i<map.size;i++){
        console.log(y.next().value,":",v.next().value,"=",e.next().value);
        
    }
    
    
    
    
} catch (error) {
    console.log("Error : ",error);
    
    
}