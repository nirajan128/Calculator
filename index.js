//1.Selects all buttons in the calculator
let allButton = document.querySelectorAll(".btn")


allButton.forEach(button => { //2.for each button in calculator get their value
    button.addEventListener("click", ()=>{
          let display = document.getElementById("Results")//3.get the input filed to display result

          let btnValue = button.textContent; //4.get the value of the button click
          
          //5.if the value of button is any of the math operation, the value of display will be previous value,
          //a space, the expression clicked, and a space
          if (btnValue == "/" || btnValue == "*" || btnValue == "+" || btnValue == "-" || btnValue == "." ){
                display.value += " " + btnValue + " "
                /* display.value = display.value +" " +btnValue +" " *///in more simple way

          }else if (btnValue == "DEL"){//7. if the btn value is DEL
                let currentValue = display.value //gets the current value
                display.value = currentValue.slice(0,-1) //slices the current value from last

          }else if(btnValue == "="){ //8. if btn value is = perform a math operation
            console.log("NE")
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
console.log(allButton)



