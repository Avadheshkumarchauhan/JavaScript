try {
    const arr = [1,4,6,8,3,9,2,5];
    // try {
        
    //     console.log(arr);
    //     arr[2] =90;
    //     console.log(arr);
    //     arr[8]=66;
    //     console.log(arr);
        
    //     const x=20;
    //     console.log(x)
    //     x=20;
    //     console.log(x)
    // } catch (error) {
    //     console.log("Error : ",error);
    //    // process.exit(1);
    //     console.log("Error : ",error.message);
        
    // }
    
    const findMaxValue =(arrs,lenght)=>{
        let max = arrs[0];
        for(let i=1;i<lenght;i++){
            if(arrs[i]>max){
                max =arrs[i];
            }
        }
        return max;
    }
    const findMinValue =(arrs,lenght)=>{
        let min = arrs[0];
        for(let i=1;i<lenght;i++){
            if(arrs[i]<min){
                min =arrs[i];
            }
        }
        return min;
    }
    const findSecondMaxValue =(arrs)=>{
        arrs.sort((a,b)=>b-a);
        return arrs[1];       
    }
    const findSecondMinValue =(arrs)=>{
        arrs.sort((a,b)=>a-b);
        return arrs[1];       
    }
    
    console.log("Maximum value of array : ",findMaxValue(arr,arr.length));
    console.log("Minimum value of array : ",findMinValue(arr,arr.length));
    console.log("Second max value of array : ",findSecondMaxValue(arr));
    console.log("Second minvalue of array : ",findSecondMinValue(arr));
} catch (error) {
    console.log("error : ",error.message);   
}