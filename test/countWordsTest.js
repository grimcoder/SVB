/**
 * Created by taraskovtun on 1/17/16.
 */
var countWords = require('./../countWords')
var assert = require('chai').assert

describe('count words', function(){

    it('should return 0 for empty sentence', function(){
        assert.equal(0,countWords(''))
    })
    it('should return 2 for \'taras here\'', function(){
        assert.equal(2,countWords('taras here'))
    })
})