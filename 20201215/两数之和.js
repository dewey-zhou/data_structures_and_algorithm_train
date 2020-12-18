function twoSum(sum,target){
    let map =new Map()
    for(let i=0;i<sum.length;i++){
        let a= target-sum[i]
        if(map.has(sum[i])){return [map.get(sum[i]),i]}
        else{
            map.set(a,i)
        }
    }
} 