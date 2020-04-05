const value1 = document.querySelector('#box1');
const value2 = document.querySelector('#box2');
const result1 = document.querySelector('#result1');


// document.addEventListener("keyup", function(e){
    
//     {
//         calculate();
//     }
// })


// Delete key function
document.addEventListener("keyup", function(e){
    if (e.keyCode == 46)
    {
        value1.value = ' ';
        value2.value = ' ';
        result1.value = ' ';
        value1.focus();
    }
})

// Enter key function
document.addEventListener("keyup", function(e){
    if (e.keyCode == 13)
    {
        calculate();
    }
})


document.querySelector('#calculate1').addEventListener("click", calculate);


function calculate(){
    result = parseFloat(value1.value / 100 * value2.value);
    console.log(result);
    result1.value = result.toFixed(2);
}



