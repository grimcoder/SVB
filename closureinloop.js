//var funcs = [];
//for (var i = 0; i < 3; i++) {          // let's create 3 functions
//    funcs[i] = function() {            // and store them in funcs
//        //console.log(this)
//        console.log("My value: " + i); // each should log its value.
//    };
//    console.log(this)
//}
//for (var j = 0; j < 3; j++) {
//    funcs[j]();                        // and now let's run each one to see
//}

console.log('---------------------------');

var print = function(){
    console.log(this)
}
print()

var funcs = {};
for (var i = 0; i < 3; i++) {
    funcs[i] = function(i) {

        console.log(this)
        console.log('My value: ' + i);

    }.bind(this, i);
}
for (var j = 0; j < 3; j++) {
    funcs[j]();
}