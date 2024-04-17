Description
-----------

This is a simple calculator npm package that provides basic arithmetic operations such as addition, subtraction, multiplication, and division. It also supports decimal numbers and includes features such as delete (DEL) and clear (AC). The results are converted into Binary, Octal, and Hexadecimal numbers.

Installation
------------

To install the calculator app, run the following command:

$ npm install @nirajan_/calcula-tor

After installing the package, you can use the calculator app in your project by importing the necessary files and adding them to your HTML file.

Import the CSS files:

```
<link rel="stylesheet" href="node_modules/calculator-app/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="node_modules/calculator-app/dist/css/style.css">

Import the JavaScript file:

```
<script src="node_modules/calculator-app/dist/js/calculator.js"></script>

Add the calculator HTML structure to your file:
#existing HTML structure

```
#<div class="container d-grid mt-3">
  <div class="row p-1">
    <div class="col-lg-3 col-md-3 col-sm-1 d-flex align-items-center bg-dark shadow opacity-75 text-light box mr-1">
      <h3 class="vt323-regular p-2 heading">This calculator performs basic math operations and converts the results to Binary, Hexadecimal, and Octal Numbers</h3>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-7 box">
      <!-- Calculator buttons and input field -->
    </div>
    <div class="col-lg-3 col-md-3 col-sm-4 box opacity-75 d-flex flex-column justify-content-center align-content-center text-align-center text-light">
      <!-- Number system result displays -->
    </div>
  </div>
#</div>

The JavaScript code (index.js) utilizes the IDs and classes defined in the HTML to perform calculations and update the display. If you wish to modify the HTML structure or CSS styles, you can do so by editing the existing files. However, please ensure that the JavaScript code remains compatible with the updated HTML structure.

If you decide to make changes to the HTML structure, you may need to update the JavaScript code accordingly to ensure proper functionality

Documentation
-------------

The calculator app consists of the following functions:
```
`calculate(fullExp)`: This function performs mathematical calculations on the given expression. It splits the expression into tokens, parses the numbers and operators, and performs the corresponding operations.

`decimalToBinary(finalResult)`: This function converts the given decimal number to its binary representation, including the fractional part up to 6 decimal places.

`decimalToHexa(finalResult)`: This function converts the given decimal number to its hexadecimal representation, including the fractional part up to 6 decimal places.

`decimalToOctal(finalResult)`: This function converts the given decimal number to its octal representation, including the fractional part up to 6 decimal places.

The main logic for handling button clicks and updating the display is contained in the event listener attached to each button.

Dependencies
------------

The calculator app relies on the following dependencies:
- Bootstrap (CSS framework)
- Additional CSS styles (style.css)

These dependencies are included in the dist folder of the npm package.

Contributing
------------

Contributions to the calculator app are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the project's GitHub repository.
