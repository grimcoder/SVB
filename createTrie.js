/**
 * Created by taraskovtun on 1/17/16.
 */
function createTrie(strArr){
    var strings = strArr.split(',')
    var trie = {}

    for (var i = 0; i < strings.length; i++){

        var number = strings[i].split('');
        var current = trie

        for(var n=0; n<number[n]; n++){
            current[number[n]] = current[number[n]] || {}
            current = current[number[n]]
        }
    }

    this.checkNumber = function(number){

        try{
            var str = String(number)
            var digits = str.split('');
            var current = trie
            for (var i = 0; i < digits.length; i++){
                if (current[digits[i]]){
                    current = current[digits[i]]
                }
                else{
                    return false
                }
            }
            return true

                }
        catch (e) {
            return false
        }
        return false

    }

    //return trie

}

module.exports = createTrie
