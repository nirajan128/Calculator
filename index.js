//1.Selects all buttons in the calculator
let allButton = document.querySelectorAll(".btn");


allButton.forEach(button => { //2.for each button in calculator get their value
    button.addEventListener("click", ()=>{
          let display = document.getElementById("Results")//3.get the input filed to display result

          let btnValue = button.textContent; //4.get the value of the button click
          
          //5.if the value of button is any of the math operation, the value of display will be previous value,
          //a space, the expression clicked, and a space
          if (btnValue == "/" || btnValue == "*" || btnValue == "+" || btnValue == "-" || btnValue == "." ){
                
                 display.value += " " + btnValue + " ";  
                /* display.value = display.value +" " +btnValue +" " *///in more simple way

          }else if (btnValue == "DEL"){//7. if the btn value is DEL
                let currentValue = display.value //gets the current value
                display.value = currentValue.slice(0,-1) //slices the current value from last

          }else if(btnValue == "="){ //8. if btn value is = perform a math operation
              const fullExp = display.value //11.get the expression value
              console.log( fullExp)

              try {
                let finalResult = calculate(fullExp);
                display.value = finalResult

              } catch (error) {
                console.log("error")
              }
          }

          else if (btnValue == "AC"){ //9.if btnvalue is AC set its value to 0
            display.value = 0 
          }

          else{ //10. else convert the btn value to integer and set display value to the integer
            convertNum = parseInt(btnValue)
            display.value+=convertNum
          }
         
    })
})


//12.Make a function that performs math calculation on the expression
function calculate(fullExp){
    
    let tokens = fullExp.split(" ") //13.splits the fullexp and make it into a array of sub strting
    let result  = parseFloat(tokens[0])

    console.log(tokens)


    for (i=1; i<tokens.length; i+=2){ //14. use a loop to get the individual expression 
        let operator = tokens[i] //16. get each expression only, where i = i+1
        let operand = parseFloat(tokens[i + 1]) //15.get each numbers only, where i = i+2, convert it into float value
       
        console.log(operand)
        console.log(operator)
        

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



