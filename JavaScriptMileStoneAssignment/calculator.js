// Project - Calculator.

const calculator = (num1,num2)=>{
    
    let  operator = " * ";
    if(operator == " + "){
        console.log(num1 + num2);
    }else if(operator == " - "){
        console.log(num1 - num2);
    }else if(operator == " / "){
        console.log(num1 / num2);
    }else if(operator == " * "){
        console.log(num1 * num2);
    }else{
        console.log("Invalid Operator");
    }
    return calculator;
}
// let result = calculator();
// console.log(result);
calculator(50,50);

