function freqCount(arr){
let map={};
for (let x of arr){
    map[x]=(map[x]||0)+1;

  }
  return map;

}
function freqCounts(arr){
let map=new Map();
for (let x of arr){
    map.set(x,(map.get(x)||0)+1);

  }
  return map;

}

console.log(freqCount([1,2,3,2,1,3,4,9,7,6]));
console.log(freqCounts([1,2,3,2,1,3,4,9,7,6]));
console.log(freqCounts([1,3,2,5,7,6]));
