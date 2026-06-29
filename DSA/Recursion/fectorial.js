function fectorial (n){
    if(n<=0){
        return 1;
    }

return n*fectorial(n-1);

}

let n =-1;
console.log(`fectorial of ${n} is ${fectorial(n)}`);
