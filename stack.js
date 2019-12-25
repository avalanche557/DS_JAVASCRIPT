var Stack = function()  {
    this.count = 0;
    this.storage = {}
    this.push = function (value) {
       this.storage[this.count] = value;
       this.count++; 
    }

    this.pop = function() {
        if(this.count == 0) {
            return undefined
        }
        this.count--;
        result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    this.length = function () {
        return this.count
    }

    this.peek = function () {
        return this.storage[this.count -1 ]
    }
}


var stack = new Stack()
stack.push(2)
stack.push(1)
stack.push(0)
console.log(stack.length());

console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.length());
