var readline = require('readline-sync');

function reverse(str) {
    str=str.split('')
    let reversed=''
    for(let char of str){
        reversed=char+reversed
    }
    return reversed
}

var str = readline.question('Enter a string:');
console.log(reverse(str))