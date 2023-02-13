const express = require('express')
let app= express()
 
app.get('/',(req,res)=>{
    res.sendFile(__dirname+ 'sum.html')
})

    function add(number1,number2,number3,number4){
        let sum = number1+number2+number3+number4;
        return sum;
    }
    console.log(add(1,2,3,4));

function multiplication(array=[],n){
    let multiply = 1;
    for(let i =0; i<n; i++){
        multiply = multiply * array[i];
        return multiply;
    }
}

console.log(multiplication(1,2,3,4));

app.listen(2000,()=> {
    console.log(`server is running...`)
})
