let num="23432";

const polindromes =(numbers)=>{
    if(numbers===undefined) return 0
    let number=numbers
    let reverse=0;
    
  if(typeof number !=="string"){
      while(number>0){        
        reverse = reverse*10+(number%10);
        number=Math.floor(number/10);

    }
  }
  else{
        reverse=number.split("").reverse().join("")
        console.log(reverse);
        
  }
  //Chech number or string equal or not equal
    if (numbers===reverse) {
     return "Polindrome";
    }
    else{
        return "Not Polindrome";
    }
}

console.log(`Reverse of ${num} is `,polindromes(num));
