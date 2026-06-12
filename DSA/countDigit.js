let num =87345987578957;

const countDigit =(number)=>{
    if(number === undefined)return 0
    let count=0;
    while(number>0){
        count++
        number=Math.floor(number/10);
    }
    return count
}

console.log(`Count of ${num} is `,countDigit(num));
