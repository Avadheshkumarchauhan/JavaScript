
function firstUnique(str){

    let map =new Map();
    let first =null
    for (let ch of str){
        map.set(ch,((map.get(ch)||0)+1));

    }
    for(let chr of map.keys()){
        if(map.get(chr)===1){
            first =chr
            return  first
       }
    }
    return first;
}

console.log(firstUnique("ahhhgshghgas"));
console.log(firstUnique("abcdeabceh"));
console.log(firstUnique("abcdefgh"));
