var largestRectangleArea =function (heights){
    let stack = []
    let maxArea = 0
    heights = [0,...heights,0]
    for(let i = 0;i<heights.length;i++){
        while(heights[i]<heights[stack[stack.length-1]]){
            const stackTopIndex = stack.pop()
            maxArea = Math.max(maxArea,heights[stackTopIndex]*(i-stack[stack.length-1]-1))
        }
        stack.push(i)
    }
    return maxArea
}