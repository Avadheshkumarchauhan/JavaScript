function chechDuplicate(arr){

    let set = new Set();
    for (let x of arr){
        if(set.has(x)){
            return true
        }
        set.add(x);
    }
    return false
}

console.log(chechDuplicate([1,2,3,4,5,2,3,1]));
console.log(chechDuplicate([1,2,3,4,5]));
console.log(chechDuplicate("abcdeavcsgd"));
console.log(chechDuplicate("abcde"));
