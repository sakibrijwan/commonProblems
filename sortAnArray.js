var readline = require('readline-sync');

function sortArray(inputAr) {
    var temp;
    for (var i = 0; i < inputAr.length; i++) {
        for (var j = i + 1; j < inputAr.length; j++) {
            if (inputAr[j] < inputAr[i]) {
                temp = inputAr[j];
                inputAr[j] = inputAr[i];
                inputAr[i] = temp;
            }
        }
    }
    return inputAr
}


var arr = readline.question('Enter a sequence of number:');

arr=arr.split(' ').map(Number)

console.log(sortArray(arr))

