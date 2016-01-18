

function sum(a) {
    var sum = a

    function f(b) {
        sum += b
        return f
    }

    //f.toString = function() { return sum }

    return f
}

console.log(sum(1)(2));

({
    name: 'mainObject',
    myFunc : function (){
        console.log(this.name)
    }
}).myFunc();

function mainFunction(){
    var self = this;
    this.printThis = function(){
        console.log (this)
    }
    this.printSelf = function(){
        console.log (self)
    }
}

new mainFunction().printSelf();

new mainFunction().printThis();

function hoisted() {
    console.log("foo1");
}

hoisted(); // logs "foo"

function hoisted() {
    console.log("foo2");
}