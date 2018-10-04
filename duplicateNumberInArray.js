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

    out=[]
    for (var i = 0; i < inputAr.length; i++) {
        if(inputAr[i]==inputAr[i+1])
            out.push(inputAr[i])
    }
    console.log('Duplicate number(s):'+out)
}


var arr = readline.question('Enter a sequence of number:');

arr=arr.split(' ').map(Number)

sortArray(arr)

