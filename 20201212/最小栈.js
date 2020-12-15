var MinsStack = function(){
    this.X_stack = []
    this.min_stack = [Infinity]
}
MinsStack.prototype.push =function(x){
    this.X_stack.push(x)
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length-1],x))
}
MinsStack.prototype.pop = function(){
    this.X_stack.pop()
    this.min_stack.pop()
}
MinsStack.prototype.top =function(){
    return this.x_stack[this.x_stack.length-1]
}
MinsStack.prototype.getMin = function(){
    return this.min_stack[this.min_stack.length-1]
}