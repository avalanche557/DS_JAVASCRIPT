myqueue = function() {
    var collection = [];

    this.print = function() {
        console.log(collection);
    }

    this.enqueue = function(value) {
        collection.push(value)
    }

    this.dequeue = function () {
        return collection.shift();
    }

    this.front = function() { 
        return collection[0]
    }

    this.size = function() {
        return collection.length;
    }

    this.isEmpty = function() {
        return (collection.length == 0)
    }
}

var queue = new myqueue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.print()
queue.dequeue()
queue.print()