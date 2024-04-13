//1.Selects all buttons in the calculator
let allButton = document.querySelectorAll(".btn");


allButton.forEach(button => { //2.for each button in calculator get their value
    button.addEventListener("click", ()=>{
          let display = document.getElementById("Results");//3.get the input filed to display result

          let btnValue = button.textContent; //4.get the value of the button click
          
          //5.if the value of button is any of the math operation, the value of display will be previous value,
          //a space, the expression clicked, and a space
          if (btnValue == "/" || btnValue == "*" || btnValue == "+" || btnValue == "-" || btnValue == "." ){
                
                 display.value += btnValue;  
                /* display.value = display.value +" " +btnValue +" " *///in more simple way

          }else if (btnValue == "DEL"){//7. if the btn value is DEL
                let currentValue = display.value; //gets the current value
                display.value = currentValue.slice(0,-1); //slices the current value from last

          }else if(btnValue == "="){ //8. if btn value is = perform a math operation
              const fullExp = display.value; //11.get the expression value
              console.log( fullExp)

              try {
                const finalResult = calculate(fullExp);
                display.value = finalResult;
                //18.show number system results
                let binary = decimalToBinary(finalResult);
                document.getElementById("binary").innerText = binary;

                let hexaDecimal = finalResult.toString(16);
                document.getElementById("hex").innerText = hexaDecimal.toUpperCase();

                let octal = finalResult.toString(8);
                document.getElementById("oct").innerText = octal
                console.log(binary)
                console.log(hexaDecimal)
                console.log(octal)

              } catch (error) {
                console.log("error")
              }
          }

          else if (btnValue == "AC"){ //9.if btnvalue is AC set its value to 0
            display.value = ""
            document.getElementById("binary").innerText = "" 
            document.getElementById("hex").innerText = "" 
            document.getElementById("oct").innerText = "" 
          }

          else{ //10. else convert the btn value to integer and set display value to the integer
            convertNum = parseFloat(btnValue)
            display.value+=convertNum
          }
         
    })
})

//19. Convert the result to Binary digit and make it so that the fractional part is in 6 places.
function decimalToBinary(finalResult){
    let integerPart = Math.floor(finalResult);// gets the integer
    let fractionalPart = finalResult - integerPart; //gets the fractional part
    let binaryInteger = integerPart.toString(2); //convert integerpart to binary

    let binaryFractional = "."; //A string that will hold the value of fractional binary after .
    let count = 0;
    while (fractionalPart !== 0 && count < 6){
      fractionalPart*=2; //multiply fractional part with 2, to shict to next digit
      let bits = Math.floor(fractionalPart) //gets the binary bits of each fractional digit
      binaryFractional+=bits //appends each binary digit to fractional binary
      fractionalPart-=bits //removes the integer from fractional part for next iteration ex if fractional part fisrt iteration value is 1.34 bit stores 1 now the sode subtracts 1.34 - 1 whhich is 0.34 now we can use this for next iteration
      count++ //inrements count each time until it reaches 6

    }
    return binaryInteger + binaryFractional  //return the value by concactenation integer and binary parts
}

//12.Make a function that performs math calculation on the expression
function calculate(fullExp){
    
    let tokens = fullExp.match(/[+\-*\/]|\d+(\.\d+)?/g);//13.splits the fullexp and make it into a array of sub strting
    let result  = parseFloat(tokens[0]) //first number
    console.log(tokens)


    for (i=1; i<tokens.length; i+=2){ //14. use a loop to get the individual expression 
        let operator = tokens[i] //16. get each expression only, where i = i+1
        let operand = parseFloat(tokens[i + 1]) //15.get each numbers only, where i = i+2, convert it into float value
        
        console.log(operand)
        console.log(operator)
        
        //17. Switch case operator to handle math operations
        switch (operator) {
            case "/":
                result /= operand
                console.log(result) 
                break;

            case "*":
                result *= operand
                console.log(result) 
                break;

            case "+":
                result += operand
                console.log(result) 
                break;
            case "-":

                result -= operand
                console.log(result) 
                break;
        
            default:
                break;
        }
    }
      return result
}
console.log(allButton)



