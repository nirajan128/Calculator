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
                console.log(binary)
                document.getElementById("binary").innerText = binary;

                let hexaDecimal = decimalToHexa(finalResult);
                console.log(hexaDecimal)
                document.getElementById("hex").innerText = hexaDecimal;

                let octal = decimalToOctal(finalResult);
                console.log(octal)
                document.getElementById("oct").innerText = octal

              } catch (error) {
               if(display.value !== btnValue){
                   display.value = "Invalid syntax";
                   document.getElementById("binary").innerText = "" 
                   document.getElementById("hex").innerText = "" 
                   document.getElementById("oct").innerText = ""
                   console.log("error")
               }
              }
          }

          else if (btnValue == "AC"){ //9.if btnvalue is AC set its value to 0
            display.value = ""
            document.getElementById("binary").innerText = "" 
            document.getElementById("hex").innerText = "" 
            document.getElementById("oct").innerText = "" 
          }

          else{ //10. else convert the btn value to integer and set display value to the integer
            let convertNum = parseFloat(btnValue)
            display.value+=convertNum
          }
         
    })
})

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

//19. Convert the result to Binary digit and make it so that the fractional part is in 6 places.
function decimalToBinary(finalResult){
  let integerPart = Math.floor(finalResult);// gets the integer
  let fractionalPart = finalResult - integerPart; //gets the fractional part
  let binaryInteger = integerPart.toString(2); //convert integerpart to binary
  if(fractionalPart!==0){
    binaryInteger+="."//if fractional part is not 0 add "."
    for(i=0; i<6; i++){
      fractionalPart*=2; //Multiply fractional part to  get the next binary digit
      let bit = Math.floor(fractionalPart); //rounds the fractional part to get whole fractional digit
      binaryInteger+=bit.toString(2); //adds each bit to binaryInteger and convert it into binary
      fractionalPart-=bit; //remove the integer part from fraction for next iteration
    }
  } 
  return binaryInteger 
}

//20. Hexadecimal function to conver the number and set the fractional part to 6 decimal places
function decimalToHexa(finalResult){
let integerPart = Math.floor(finalResult); //get the integer value on final result in whole number
let fractionalPart = finalResult - integerPart;//get the fractional part
let hexaInteger = integerPart.toString(16).toUpperCase();//convet the integer part to hexadecimal and change it to uppercase
if(fractionalPart!==0){
  hexaInteger+="."//if fractiona part is not 0 add "."
  for(i=0; i<6; i++){
    fractionalPart*=16; //Multiply fractional part to  get the next hexadecimal digit
    let hexBit = Math.floor(fractionalPart); //rounds the fractional part to get whole fractional digit
    hexaInteger+=hexBit.toString(16).toUpperCase(); //adds each hexBit to hexInteger and convert it into hexadecimal
    fractionalPart-=hexBit; //remove the integer part from fraction for next iteration
  }
}
return hexaInteger;

}

//21. Octal function to convert result to octal number and set the fractional part to 6decimal places
function decimalToOctal(finalResult){
 let integerPart = Math.floor(finalResult);//get the integer value on final result in whole number
 let fractionalPart = finalResult - integerPart;//get the fractional part
 let octalInteger = integerPart.toString(8);//convet the integer part to octal number
 if(fractionalPart!==0){//if fractiona part is not 0 add "."
  octalInteger+="."
  for(i=0;i<6;i++){
     fractionalPart*=8;//Multiply fractional part to  get the next octal digit
     let octBit = Math.floor(fractionalPart); //rounds the fractional part to get whole fractional digit
     octalInteger+=octBit.toString(8); //adds each octalBit to octalInteger and convert it into octal digit
     fractionalPart-=octBit;//remove the integer part from fraction for next iteration
  }
 }
 return octalInteger;
}

console.log(allButton)



