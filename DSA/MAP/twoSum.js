/**
 * time complexity is o(n)
 * space complexity is s(n)
 */
function twoSum(arr,target){
    let map ={}//new Map();
    for(let i=0;i<arr.length;i++){
        let cop = target-arr[i];
        if(map[cop]!=undefined){
            return [map[cop],i]
        }
        map[arr[i]]=i;
    }
    return[]

}
function twoSums(arr,target){
    let map =new Map();
    for(let i=0;i<arr.length;i++){
        let cop = target-arr[i];       
        if(map.get(cop)!==undefined){
            return [map.get(cop),i]
        }
        map.set(arr[i],i);
    }
    //console.log(map);
    
    return[]

}


console.log(twoSum([2,4,6,8,3],9));
console.log(twoSums([2,4,6,8,3],8));
console.log(twoSums([2,4,6,8,3],6));
console.log(twoSums([2,4,6,8,3],13));
