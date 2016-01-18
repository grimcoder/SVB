/**
 * Created by taraskovtun on 1/16/16.
 */
var assert = require ('chai').assert;
var functions = require('./../reverseString')
require('mocha')

describe("string should reverse itself", function(){

    describe("string reverse using array join", function(){

    it ('taras should be sarat', function(){

            var reversed = functions.reverseString('taras');
            assert.equal('sarat', reversed)

        })
    })

    describe("string reverse using string concat +=", function(){

    it ('papa Taras should be saraT apap', function(){

            var reversed = functions.reverseString2('papa Taras');
            assert.equal('saraT apap', reversed)

        })
    })
    describe("string reverse using split reverse join", function(){

    it ('papa Taras should be saraT apap', function(){

            var reversed = functions.reverseString3('papa Taras');
            assert.equal('saraT apap', reversed)

        })
    })

    describe("string reverse using recursion and slice", function(){

    it ('papa Taras should be saraT apap', function(){

            var reversed = functions.reverseString4('papa Taras');
            assert.equal('saraT apap', reversed)

        })
    })

    describe("string reverse using recursion and substr", function(){

    it ('papa Taras should be saraT apap', function(){

            var reversed = functions.reverseString5('papa Taras');
            assert.equal('saraT apap', reversed)

        })
    })

});