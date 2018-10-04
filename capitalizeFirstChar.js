var readline = require('readline-sync');

function capitalize(str) {

    const words=[]

    for(let word of str.split(' ')){
        words.push(word[0].toUpperCase()+word.slice(1))
    }
    words.join(' ')
    return words.toString().replace(/,/g, ' ')
}

var str = readline.question('Enter a sentence:');


console.log(capitalize(str))