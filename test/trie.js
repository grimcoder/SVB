var createTrie = require('./../createTrie')
var assert = require('chai').assert

describe("trie create", function(){

    it('empty trie returns empty object', function(){

        assert.equal(false, new createTrie('').checkNumber('123'))

        assert.equal(true, new createTrie('123').checkNumber('123'))

        assert.equal(true, new createTrie('1234,234').checkNumber('23'))

    })

})