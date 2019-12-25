var Set = function () {
    var collection = [] ;

    this.has = function (element) {
        return (collection.indexOf(element) !== -1)
    }

    this.add = function(value) {
        if(!this.has(value)) {
            collection.push(value)
            return true;
        }
        return false
    }

    this.remove = function(value) {
        if(this.has(value)) {
            let index = collection.indexOf(value)
            collection.splice(index, 1);
            return true;
        }
        return false
    }

    this.size = function() {
        return collection.length
    }

    this.values = function() {
        return collection;
    }
    
    this.union = function(otherset){
        var unionSet = new Set()
        var oldSet = this.values()
        var secondSet = otherset.values()
        oldSet.forEach(element => {
                unionSet.add(element)
        });
        secondSet.forEach(element => {
            unionSet.add(element)
        })
        return unionSet
    }

    this.intersection = function(otherSet) {
        var intersectionSet = new Set()
        var oldSet = this.values();
        oldSet.forEach(function(element) {
            if(otherSet.has(element)){
                intersectionSet.add(element)
            }
        })
        return intersectionSet;
    }
}

var setA = new Set();
var setB = new Set();
setA.add(1)
setA.add(2)
setA.add(3)
setB.add(4)
setB.add(1)
setB.add(2)
setB.add(3)
setB.add(5)


console.log(setA.union(setB).values())

