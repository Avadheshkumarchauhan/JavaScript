let x=12,y=18;

const gcd= (m,n)=>{

    while(n!==0){
        let rem =m%n;
        m=n;
        n=rem;
    }
    return m;

}

const lcm=(p,q)=>{
     return p *q/gcd(p,q)
}

console.log(`GCD of ${x} and ${y} is ${gcd(x,y)}`);
console.log(`LCM of ${x} and ${y} is ${lcm(x,y)}`);
