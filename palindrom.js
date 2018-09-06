var readline = require('readline-sync');

function reverse(str) {
    reversed=str.split('').reverse().join('')
    if(str===reversed){
        console.log('Palindrome')
    }else {
        console.log('Not a Palindrome')
    }

}

var str = readline.question('Enter a string:');
reverse(str)