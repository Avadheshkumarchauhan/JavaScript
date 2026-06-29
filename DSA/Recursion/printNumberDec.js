function decreasingNumber(n){
    if(n===1){
        console.log(n);
        return;
        
    }

    console.log(n);
    decreasingNumber(n-1);
    
}

decreasingNumber(10);

