function missingNumber(arr){

    total=(100*(100+1))/2
    n=arr.length
    console.log(n)
    missingTotal=0
    for(i=0;i<n;i++){
        missingTotal=missingTotal+arr[i]
        console.log(missingTotal)
    }

    console.log(missingNumber=total-missingTotal)
}
a=[1,2,3,4,5000]

module.exports=missingNumber(a)