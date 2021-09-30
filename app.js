function getNumber(numb){
    var result = document.getElementById("result")
    result.value += numb
}


function getResult(numb){
    var result = document.getElementById("result")
    result.value = eval(result.value)
}

function clearResult(numb){
    var result = document.getElementById("result")
   // clear
    result.value = " "
}
