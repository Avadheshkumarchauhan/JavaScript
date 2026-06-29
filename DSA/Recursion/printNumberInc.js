function increaseNumber(n){

    if(n===1){
        console.log(n);
        return;
        
    }

    increaseNumber(n-1);
    console.log(n);
    
}
increaseNumber(10)

