
function firstUnique(str){

    let map =new Map();
    let last=null
    for (let ch of str){
        map.set(ch,((map.get(ch)||0)+1));

    }
    for(let chr of map.keys()){
        if(map.get(chr)===1){
            last =chr            
       }
    }
    return last;
}

console.log(firstUnique("ahhhgshghgas"));
console.log(firstUnique("abcdeabceh"));
console.log(firstUnique("abcdefgh"));
console.log(firstUnique([1,2,3,4,5,1,2,3,6,7]));

