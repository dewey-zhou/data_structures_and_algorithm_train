var maxSlidingWindow = function(nums,k){
    let queue = nums.slice(0,k),max=[]
    if(!queue.length)return []
    max.push(Math.max(...queue))
    for(let i = k;i < nums.length;i++){
        queue.shift()
        queue.push(nums[i])
        max.push(Math.max(...queue))
    }
    return max
}