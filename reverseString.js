/**
 * Created by taraskovtun on 1/16/16.
 */
var functions = {
    reverseString: function(str){
        var tmp = [];
        for(var ch = 0 ; ch < str.length; ch++){
            tmp.push(str[ch])
        }

        return tmp.reverse().join('')
    },

    reverseString2: function(str){
        var tmp = '';
        for(var ch = str.length - 1 ; ch >= 0; ch--){
            tmp+=str[ch]
        }

        return tmp
    },

    reverseString3: function(str){


        return str.split('').reverse().join('')
    },

    reverseString4: function(str){


        return str ? str[str.length - 1] + this.reverseString4(str.slice(0, -1)) : str
    },


    reverseString5: function(str){


        return str ? this.reverseString5(str.substr(1)) + str[0] : str
    }
}

var longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";


module.exports = functions