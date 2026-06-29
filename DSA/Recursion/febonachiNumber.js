function febonacciNumber(n){
    if(n==0 ||n==1){
        return n;
    }

    return febonacciNumber(n-1)+febonacciNumber(n-2);
} 
let n =10;
for (let i=0;i<=n;i++){
    
console.log(febonacciNumber(i));
}
