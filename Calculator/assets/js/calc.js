
function divide(){
    var numOne = parseInt(prompt("Enter the first number: "));
    var numTwo = parseInt(prompt("Enter the second number: "));

    if (numTwo==0)
        console.log("denominator should be greater than 0!")
    else 
        return numOne/numTwo
}

function subt(){
    var numberOne = parseInt(prompt("Enter the first number: "));
    var numberTwo = parseInt(prompt("Enter the second number: "));
    return numberOne - numberTwo
}

function additionf(){
    var addition = new Array();
    var NoOfvalues;
    var  result = 0;
    NoOfvalues = parseInt(prompt("how many values do you want to add?"));
    for(var i=0;i<NoOfvalues;i++){
        addition[i] = prompt("enter the numbers: ");
    }
    for(var j=0;j<NoOfvalues;j++){
        result += parseInt (addition[j]) ;
    }

    return result;
}

function mul(){
    var multiplication = new Array();
    var  result = 1;
    var NoOfvalues = parseInt(prompt("how many values do you want to multiply?"));
    for(var i=0;i<NoOfvalues;i++){
        multiplication[i] = prompt("enter the numbers: ");
    }
    for(var j=0;j<NoOfvalues;j++){
        result *= parseInt(multiplication[j]);
    }

    return result;
}


(function(){
    var operand;
    
    operand = prompt("Enter the operation you want to use?")
    switch(operand){
        case '+':
            console.log(additionf());
            break;
        case '-':
            console.log(subt());
            break;

        case '*':
            console.log(mul());
            break;
        case '/':
            console.log(divide());
            break;
    }


})();