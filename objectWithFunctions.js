/**
 * Created by taraskovtun on 1/17/16.
 */


/*
* Write a JS object with (5min)
 o Public function
 o Private function

 o Local/private variable
 o Global/public variable
 o What is object literal? Why we need it if we have a function?
 * */


myObject = function(init){

    var i = init

    this.publicFunction = function(){
        console.log('publicFunction\'s being called')

    }

    this.increment = function(){
        return ++i;

    }

    var privateFunction = function(){
        console.log('privateFunction\'s being called')

    }

}

var object = new myObject(1)
object.publicFunction()

object.increment()
var i = object.increment()

console.log(i)
