var Calculator = {
    division: function(){
    var numOne = parseInt(prompt("Enter the first number: "));
    var numTwo = parseInt(prompt("Enter the second number: "));

    if (numTwo==0)
        console.log("denominator should be greater than 0!,please try again!");
    else 
        return numOne/numTwo ;
},

    subtraction: function(){
    var numberOne = parseInt(prompt("Enter the first number: "));
    var numberTwo = parseInt(prompt("Enter the second number: "));
    return numberOne - numberTwo;
},

    addition: function (){
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
},

multipliication:function(){
    var multiplicationArray = new Array();
    var  result = 1;
    var NoOfvalues = parseInt(prompt("how many values do you want to multiply?"));
    for(var i=0;i<NoOfvalues;i++){
        multiplicationArray[i] = prompt("enter the numbers: ");
    }
    for(var j=0;j<NoOfvalues;j++){
        result *= parseInt(multiplicationArray[j]);
    }

    return result;
},

average: function(){
    var averageArray = new Array();
    var result = 0;
    var NoOfvalues = parseInt(prompt("how many values do you want to take average of?"));
    for(var i=0;i<NoOfvalues;i++){
        averageArray[i] = prompt("enter the numbers: ");
    }
    for(var j=0;j<NoOfvalues;j++){
        result += parseInt(averageArray[j]);
    }
    return result/NoOfvalues;
},

minimum: function(){
    var averageArray = new Array();
    var NoOfvalues = parseInt(prompt("how many values do you want to enter to see the minimum value ?"));
    for(var i=0;i<NoOfvalues;i++){
        averageArray[i] = parseInt(prompt("enter the numbers: "));
    }
    
    var result = Math.min.apply(Math,averageArray);
    console.log(averageArray)
    return result;
},
maximum: function(){
    var averageArray = new Array();
    var NoOfvalues = parseInt(prompt("how many values do you want to enter to see the maximum value ?"));
    for(var i=0;i<NoOfvalues;i++){
        averageArray[i] = parseInt(prompt("enter the numbers: "));
    }
    
    var result = Math.max.apply(Math,averageArray);
    console.log(averageArray)
    return result;
},

}
var fun =(function(){

    var choice = parseInt(prompt("Welcome! please write '1' to continue: else enter '0'"))
    while (choice) {

        var operand = prompt("Enter the operation you want to use? \n '+'  for addition \n '-'  for subtraction \n '*'  for mutilpication \n '/'  for division \n 'ave ' for average \n 'min ' for minimum \n 'max ' for maximum")
        switch(operand){
            case '+':
                console.log(Calculator.addition());
                break;
            case '-':
                console.log(Calculator.subtraction());
                break;

            case '*':
                console.log(Calculator.multipliication());
                break;
            case '/':
                console.log(Calculator.division());
                break;
            case 'ave':
                console.log(Calculator.average());
            case 'min':
                console.log( "Minimum value:  "+ Calculator.minimum());
            case 'max':
                console.log( "Maximum value:  "+ Calculator.maximum());
        }
        choice = parseInt(prompt("Welcome! please write '1' to continue: else enter '0'"))
        if (choice == 0){
            break;
        }
}

})();