function fectorial (n){
    if(n===0||n===1){
        return n;
    }

return n*fectorial(n-1);

}

let n =5;
console.log(`fectorial of ${n} is ${fectorial(n)}`);
