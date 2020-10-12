firstVariable = ""
secondVariable = ""

addButton.onclick=function(){
firstVariable = firstNumberValue.value
secondVariable = secondNumberValue.value
let sum = parseInt(firstVariable) + parseInt(secondVariable)
lblSum.value = sum
} 

multiplyButton.onclick=function(){
firstVariable = firstNumberValue.value
secondVariable = secondNumberValue.value
let product = firstVariable*secondVariable
lblProduct.value = product
}