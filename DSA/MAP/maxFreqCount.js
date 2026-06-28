function maxfreqCount(arr){
    let map =new Map();
    let max=0, result=null;

    for (let x of arr){
        map.set(x,((map.get(x)||0)+1));

        if(map.get(x)>max){
            max=map.get(x);
            result=x;
        }

    }
    return [result,max]
}

console.log(maxfreqCount([1,2,3,4,2,3,1,3,2,4]));
